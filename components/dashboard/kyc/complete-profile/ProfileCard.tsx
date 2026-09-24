"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { JSX } from "react";
import "@/styles/dashboard/kyc/complete-profile.css";

import {
  Building2,
  MapPin,
  BriefcaseBusiness,
  Phone,
  User,
  Globe,
  FileText,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Check,
  CheckCircle2,
  AlertCircle,
  Mail,
  Layers,
  Clock,
  Hourglass,
} from "lucide-react";

import { useAuthStore } from "@/stores/useAuthStore";
import toast from "react-hot-toast";

/* ============================================================
   CONSTANTS
============================================================ */

const STEPS = [
  "Personal Info",
  "Company Info",
  "Business Details",
  "Review & Submit",
] as const;

const TOTAL_STEPS = STEPS.length;

const BUSINESS_TYPES = [
  { value: "INDIVIDUAL", label: "Individual" },
  { value: "PROPRIETORSHIP", label: "Proprietorship" },
  { value: "PARTNERSHIP", label: "Partnership" },
  { value: "LLP", label: "LLP" },
  { value: "PRIVATE_LIMITED", label: "Private Limited" },
  { value: "PUBLIC_LIMITED", label: "Public Limited" },
  { value: "OTHER", label: "Other" },
];

const CATEGORY_OPTIONS = ["Construction", "Supplier", "Electrical", "Plumbing"];

const GST_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_REGEX = /^https?:\/\/.+\..+/;

/* ============================================================
   TYPES
============================================================ */

type FormData = {
  fullName: string;
  phone: string;

  companyName: string;
  businessType: string;
  gstNumber: string;
  panNumber: string;
  registrationNumber: string;

  category: string;
  experience: string;
  description: string;
  website: string;

  businessEmail: string;
  businessPhone: string;
  address: string;

  stateId: string;
  cityId: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type LocationOption = {
  id: string;
  name: string;
  slug: string;
};

type ProfileStatus =
  | "incomplete"
  | "ready"
  | "submitted"
  | "under_review"
  | "rejected"
  | "verified";

const EMPTY_FORM: FormData = {
  fullName: "",
  phone: "",
  companyName: "",
  businessType: "",
  gstNumber: "",
  panNumber: "",
  registrationNumber: "",
  category: "",
  experience: "",
  description: "",
  website: "",
  businessEmail: "",
  businessPhone: "",
  address: "",
  stateId: "",
  cityId: "",
};

/* ============================================================
   VALIDATION HELPERS
============================================================ */

function validateStep(step: number, data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (step === 1) {
    if (!data.fullName.trim()) errors.fullName = "Full name is required.";
    if (!data.phone.trim()) errors.phone = "Personal phone number is required.";
  }

  if (step === 2) {
    if (!data.companyName.trim()) errors.companyName = "Company name is required.";
    if (!data.businessType) errors.businessType = "Please select a business type.";

    if (data.gstNumber.trim() && !GST_REGEX.test(data.gstNumber.trim())) {
      errors.gstNumber = "Enter a valid 15-character GST number.";
    }
    if (data.panNumber.trim() && !PAN_REGEX.test(data.panNumber.trim())) {
      errors.panNumber = "Enter a valid 10-character PAN number.";
    }
    if (data.businessEmail.trim() && !EMAIL_REGEX.test(data.businessEmail.trim())) {
      errors.businessEmail = "Enter a valid email address.";
    }
    if (data.website.trim() && !URL_REGEX.test(data.website.trim())) {
      errors.website = "Enter a valid URL, e.g. https://example.com";
    }
  }

  if (step === 3) {
    if (!data.category) errors.category = "Please select a business category.";
    if (!data.stateId) errors.stateId = "Please select a state.";
    if (!data.cityId) errors.cityId = "Please select a city.";
  }

  return errors;
}

function validateAllSteps(data: FormData): { errors: FormErrors; firstInvalidStep: number | null } {
  for (let step = 1; step <= 3; step++) {
    const errors = validateStep(step, data);
    if (Object.keys(errors).length > 0) {
      return { errors, firstInvalidStep: step };
    }
  }
  return { errors: {}, firstInvalidStep: null };
}

function preparePayload(data: FormData) {
  return {
    fullName: data.fullName.trim(),
    phone: data.phone.trim(),

    companyName: data.companyName.trim(),
    businessType: data.businessType,
    gstNumber: data.gstNumber.trim().toUpperCase() || null,
    panNumber: data.panNumber.trim().toUpperCase() || null,
    registrationNumber: data.registrationNumber.trim() || null,

    category: data.category.trim(),
    experience: data.experience ? Number(data.experience) : null,
    description: data.description.trim() || null,
    website: data.website.trim() || null,

    businessEmail: data.businessEmail.trim().toLowerCase() || null,
    businessPhone: data.businessPhone.trim() || null,
    address: data.address.trim() || null,

    stateId: data.stateId || null,
    cityId: data.cityId || null,
  };
}

function normalizeForComparison(data: FormData): FormData {
  return {
    ...data,
    gstNumber: data.gstNumber.trim().toUpperCase(),
    panNumber: data.panNumber.trim().toUpperCase(),
    registrationNumber: data.registrationNumber.trim(),
    category: data.category.trim(),
    description: data.description.trim(),
    website: data.website.trim(),
    businessEmail: data.businessEmail.trim().toLowerCase(),
    businessPhone: data.businessPhone.trim(),
    address: data.address.trim(),
    fullName: data.fullName.trim(),
    phone: data.phone.trim(),
    companyName: data.companyName.trim(),
  };
}

function hasFormChanged(current: FormData, original: FormData | null): boolean {
  if (!original) return false;

  return (Object.keys(current) as (keyof FormData)[]).some((field) => {
    return String(current[field] ?? "").trim() !== String(original[field] ?? "").trim();
  });
}

/* ============================================================
   COMPONENT
============================================================ */

export default function ProfileCard() {
  const { user, checkAuth } = useAuthStore();

  const [currentStep, setCurrentStep] = useState(1);
  const [maxStepReached, setMaxStepReached] = useState(1);

  const [profileSubmitted, setProfileSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(true);
  const [loading, setLoading] = useState(false);

  const [states, setStates] = useState<LocationOption[]>([]);
  const [cities, setCities] = useState<LocationOption[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [originalFormData, setOriginalFormData] = useState<FormData | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const fieldRefs = useRef<Partial<Record<keyof FormData, HTMLElement | null>>>({});

  const kycApplication = user?.company?.kycApplication;
  const onboardingStatus = user?.onboardingStatus;

  /* ------------------------------------------------------------
     STATUS MODEL (single source of truth)
  ------------------------------------------------------------ */

  const isUnderReview = onboardingStatus === "KYC_UNDER_REVIEW";
  const isRejected = onboardingStatus === "KYC_REJECTED";
  const isVerified =
    kycApplication?.status === "VERIFIED" ||
    onboardingStatus === "SUBSCRIPTION_PENDING" ||
    onboardingStatus === "ACTIVE";

  const canEdit = !isUnderReview && !isVerified && (!isRejected || isEditing) && !loading;
  const formDisabled = !canEdit;

  const hasChanges = useMemo(
    () => hasFormChanged(formData, originalFormData),
    [formData, originalFormData]
  );

  const canSubmit = isRejected ? isEditing && hasChanges : true;

  const status: ProfileStatus = isVerified
    ? "verified"
    : isUnderReview
      ? "under_review"
      : isRejected
        ? "rejected"
        : profileSubmitted
          ? "submitted"
          : currentStep === TOTAL_STEPS
            ? "ready"
            : "incomplete";

  const STATUS_CONFIG: Record<ProfileStatus, { label: string; icon: JSX.Element; tone: string }> = {
    incomplete: { label: "Profile Incomplete", icon: <FileText size={15} />, tone: "neutral" },
    ready: { label: "Ready for Submission", icon: <CheckCircle2 size={15} />, tone: "info" },
    submitted: { label: "Profile Submitted", icon: <Check size={15} />, tone: "info" },
    under_review: { label: "Under Admin Verification", icon: <Hourglass size={15} />, tone: "warning" },
    rejected: { label: "Correction Required", icon: <AlertCircle size={15} />, tone: "danger" },
    verified: { label: "Company Verified", icon: <CheckCircle2 size={15} />, tone: "success" },
  };

  /* ------------------------------------------------------------
     LOAD STATES (once)
  ------------------------------------------------------------ */

  useEffect(() => {
    const fetchStates = async () => {
      setLoadingStates(true);
      try {
        const res = await fetch("/api/v1/locations/states");
        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to load states");
        }
        setStates(data.data || []);
      } catch (error) {
        console.error("FETCH STATES ERROR:", error);
        toast.error("Unable to load states. Please refresh the page.");
      } finally {
        setLoadingStates(false);
      }
    };

    fetchStates();
  }, []);

  /* ------------------------------------------------------------
     LOAD CITIES (dependent on state)
  ------------------------------------------------------------ */

  useEffect(() => {
    if (!formData.stateId) {
      setCities([]);
      return;
    }

    let cancelled = false;

    const fetchCities = async () => {
      setLoadingCities(true);
      try {
        const res = await fetch(`/api/v1/locations/cities?stateId=${formData.stateId}`);
        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to load cities");
        }
        if (!cancelled) setCities(data.data || []);
      } catch (error) {
        console.error("FETCH CITIES ERROR:", error);
        if (!cancelled) toast.error("Unable to load cities for the selected state.");
      } finally {
        if (!cancelled) setLoadingCities(false);
      }
    };

    fetchCities();

    return () => {
      cancelled = true;
    };
  }, [formData.stateId]);

  /* ------------------------------------------------------------
     LOAD EXISTING USER DATA
  ------------------------------------------------------------ */

  useEffect(() => {
    if (!user) return;

    const loaded: FormData = {
      fullName: user.profile?.fullName || "",
      phone: user.profile?.phone || "",

      companyName: user.company?.name || "",
      businessType: user.company?.businessType || "",
      gstNumber: user.company?.gstNumber || "",
      panNumber: user.company?.panNumber || "",
      registrationNumber: user.company?.registrationNumber || "",

      category: user.company?.category || "",
      experience:
        user.company?.experience !== null && user.company?.experience !== undefined
          ? String(user.company.experience)
          : "",
      description: user.company?.description || "",
      website: user.company?.website || "",

      businessEmail: user.company?.businessEmail || "",
      businessPhone: user.company?.businessPhone || "",
      address: user.company?.address || "",

      stateId:
        user.company?.stateId !== null && user.company?.stateId !== undefined
          ? String(user.company.stateId)
          : "",
      cityId:
        user.company?.cityId !== null && user.company?.cityId !== undefined
          ? String(user.company.cityId)
          : "",
    };

    setFormData(loaded);
    setOriginalFormData(loaded);

    if (user.company?.onboardingCompleted) {
      setProfileSubmitted(true);
      setCurrentStep(TOTAL_STEPS);
      setMaxStepReached(TOTAL_STEPS);
      setIsEditing(false);
    }
  }, [user]);

  /* ------------------------------------------------------------
     INPUT HANDLING
  ------------------------------------------------------------ */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;

    let nextValue = value;
    if (field === "gstNumber" || field === "panNumber") {
      nextValue = value.toUpperCase();
    }

    setFormData((prev) => ({ ...prev, [field]: nextValue }));

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, stateId: value, cityId: "" }));
    setErrors((prev) => ({ ...prev, stateId: undefined, cityId: undefined }));
  };

  const focusField = (field: keyof FormData) => {
    const el = fieldRefs.current[field];
    if (el && typeof el.focus === "function") {
      el.focus();
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  /* ------------------------------------------------------------
     STEP NAVIGATION
  ------------------------------------------------------------ */

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToStep = (step: number) => {
    const allowedToJump = profileSubmitted || step <= maxStepReached;
    if (!allowedToJump) return;

    setCurrentStep(step);
    scrollTop();
  };

  const nextStep = () => {
    const stepErrors = validateStep(currentStep, formData);

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      const firstField = Object.keys(stepErrors)[0] as keyof FormData;
      focusField(firstField);
      return;
    }

    setErrors({});

    if (currentStep < TOTAL_STEPS) {
      const next = currentStep + 1;
      setCurrentStep(next);
      setMaxStepReached((prev) => Math.max(prev, next));
      scrollTop();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      scrollTop();
    }
  };

  /* ------------------------------------------------------------
     SUBMIT
  ------------------------------------------------------------ */

  const handleSubmit = async () => {
    if (loading) return;

    const { errors: allErrors, firstInvalidStep } = validateAllSteps(formData);

    if (firstInvalidStep) {
      setErrors(allErrors);
      setCurrentStep(firstInvalidStep);
      const firstField = Object.keys(allErrors)[0] as keyof FormData;
      setTimeout(() => focusField(firstField), 0);
      return;
    }

    if (isRejected && !hasChanges) {
      toast("Make a change before resubmitting your profile.", { icon: "ℹ️" });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const payload = preparePayload(formData);

      const res = await fetch("/api/v1/profile/complete-profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Unable to update your profile. Please try again.");
      }

      const savedFormData = normalizeForComparison(formData);
      setFormData(savedFormData);
      setOriginalFormData(savedFormData);

      const wasResubmission = profileSubmitted;

      setProfileSubmitted(true);
      setIsEditing(false);
      setCurrentStep(TOTAL_STEPS);
      setMaxStepReached(TOTAL_STEPS);

      toast.success(
        wasResubmission
          ? "Business profile resubmitted successfully."
          : "Business profile submitted successfully."
      );

      if (typeof checkAuth === "function") {
        await checkAuth();
      }
    } catch (error: any) {
      console.error("COMPLETE PROFILE ERROR:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const startCorrection = () => {
    setIsEditing(true);
    setErrors({});
    setCurrentStep(1);
    scrollTop();
  };

  /* ------------------------------------------------------------
     DERIVED DISPLAY VALUES
  ------------------------------------------------------------ */

  const selectedState = states.find((s) => String(s.id) === String(formData.stateId));
  const selectedCity = cities.find((c) => String(c.id) === String(formData.cityId));
  const selectedBusinessType = BUSINESS_TYPES.find((t) => t.value === formData.businessType);

  const completionPercent = useMemo(() => {
    const fields = Object.values(formData);
    const filled = fields.filter((v) => String(v || "").trim() !== "").length;
    return Math.round((filled / fields.length) * 100);
  }, [formData]);

  const progressPercent = Math.round((currentStep / TOTAL_STEPS) * 100);

  const registerRef = (field: keyof FormData) => (el: HTMLElement | null) => {
    fieldRefs.current[field] = el;
  };

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <div className="dashboard-page">
      {/* HEADER */}
      <div className="profile-page-header">
        <div>
          <h1>Complete Business Profile</h1>
          <p>
            Complete your business information to continue with KYC verification and unlock
            dashboard features.
          </p>
        </div>

        <div className={`status-badge status-badge--${STATUS_CONFIG[status].tone}`}>
          {STATUS_CONFIG[status].icon}
          {STATUS_CONFIG[status].label}
          <span className="status-badge__divider" />
          {completionPercent}% Complete
        </div>
      </div>

      {/* STEPPER */}
      <div className="profile-stepper-card">
        <div className="profile-progress-head">
          <span>
            Step {currentStep} of {TOTAL_STEPS}: {STEPS[currentStep - 1]}
          </span>
          <span>{progressPercent}%</span>
        </div>

        <div className="profile-progress-track">
          <div className="profile-progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>

        <div className="profile-stepper-grid">
          {STEPS.map((step, index) => {
            const stepNumber = index + 1;
            const active = currentStep === stepNumber;
            const completed = profileSubmitted || currentStep > stepNumber;
            const clickable = profileSubmitted || stepNumber <= maxStepReached;

            return (
              <div
                key={step}
                className={[
                  "profile-step-item",
                  active ? "active" : "",
                  completed ? "completed" : "",
                  !clickable ? "disabled" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => goToStep(stepNumber)}
                role="button"
                aria-disabled={!clickable}
              >
                <div className="profile-step-circle">
                  {completed ? <Check size={18} /> : stepNumber}
                </div>
                <div className="profile-step-content">
                  <strong>{step}</strong>
                  <span>{completed ? "Completed" : active ? "In progress" : "Pending"}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FORM */}
      <div className="profile-form-card">
        {currentStep === 1 && (
          <div className="profile-step-fade">
            <div className="profile-form-header">
              <h3>Personal Information</h3>
              <p>Provide your personal contact details.</p>
            </div>

            <div className="profile-form-grid">
              <div className="profile-input-group">
                <label>
                  Full Name<span className="profile-required">*</span>
                </label>
                <div className={`profile-input-wrap ${errors.fullName ? "has-error" : ""}`}>
                  <User size={18} />
                  <input
                    ref={registerRef("fullName")}
                    type="text"
                    name="fullName"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                </div>
                {errors.fullName ? (
                  <small className="field-error">{errors.fullName}</small>
                ) : (
                  <small className="profile-hint">Use your name as per official records.</small>
                )}
              </div>

              <div className="profile-input-group">
                <label>
                  Personal Phone Number<span className="profile-required">*</span>
                </label>
                <div className={`profile-input-wrap ${errors.phone ? "has-error" : ""}`}>
                  <Phone size={18} />
                  <input
                    ref={registerRef("phone")}
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                </div>
                {errors.phone ? (
                  <small className="field-error">{errors.phone}</small>
                ) : (
                  <small className="profile-hint">We may use this number for verification.</small>
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="profile-step-fade">
            <div className="profile-form-header">
              <h3>Company Information</h3>
              <p>Provide your registered business information.</p>
            </div>

            <div className="profile-form-grid">
              <div className="profile-input-group">
                <label>
                  Company Name<span className="profile-required">*</span>
                </label>
                <div className={`profile-input-wrap ${errors.companyName ? "has-error" : ""}`}>
                  <Building2 size={18} />
                  <input
                    ref={registerRef("companyName")}
                    type="text"
                    name="companyName"
                    placeholder="Enter company name"
                    value={formData.companyName}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                </div>
                {errors.companyName && <small className="field-error">{errors.companyName}</small>}
              </div>

              <div className="profile-input-group">
                <label>
                  Business Type<span className="profile-required">*</span>
                </label>
                <select
                  ref={registerRef("businessType") as any}
                  name="businessType"
                  className={errors.businessType ? "has-error" : ""}
                  value={formData.businessType}
                  onChange={handleChange}
                  disabled={formDisabled}
                >
                  <option value="">Select business type</option>
                  {BUSINESS_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.businessType && <small className="field-error">{errors.businessType}</small>}
              </div>

              <div className="profile-input-group">
                <label>GST Number</label>
                <div className={`profile-input-wrap ${errors.gstNumber ? "has-error" : ""}`}>
                  <BriefcaseBusiness size={18} />
                  <input
                    ref={registerRef("gstNumber")}
                    type="text"
                    name="gstNumber"
                    placeholder="Enter GST number"
                    maxLength={15}
                    value={formData.gstNumber}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                </div>
                {errors.gstNumber ? (
                  <small className="field-error">{errors.gstNumber}</small>
                ) : (
                  <small className="profile-hint">15 characters, e.g. 22AAAAA0000A1Z5</small>
                )}
              </div>

              <div className="profile-input-group">
                <label>PAN Number</label>
                <div className={`profile-input-wrap ${errors.panNumber ? "has-error" : ""}`}>
                  <FileText size={18} />
                  <input
                    ref={registerRef("panNumber")}
                    type="text"
                    name="panNumber"
                    placeholder="Enter PAN number"
                    maxLength={10}
                    value={formData.panNumber}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                </div>
                {errors.panNumber ? (
                  <small className="field-error">{errors.panNumber}</small>
                ) : (
                  <small className="profile-hint">10 characters, e.g. ABCDE1234F</small>
                )}
              </div>

              <div className="profile-input-group">
                <label>Registration Number</label>
                <div className="profile-input-wrap">
                  <FileText size={18} />
                  <input
                    type="text"
                    name="registrationNumber"
                    placeholder="Enter registration number"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                </div>
              </div>

              <div className="profile-input-group">
                <label>Business Email</label>
                <div className={`profile-input-wrap ${errors.businessEmail ? "has-error" : ""}`}>
                  <Mail size={18} />
                  <input
                    ref={registerRef("businessEmail")}
                    type="email"
                    name="businessEmail"
                    placeholder="business@example.com"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                </div>
                {errors.businessEmail && <small className="field-error">{errors.businessEmail}</small>}
              </div>

              <div className="profile-input-group">
                <label>Business Phone</label>
                <div className="profile-input-wrap">
                  <Phone size={18} />
                  <input
                    type="text"
                    name="businessPhone"
                    placeholder="Enter business phone"
                    value={formData.businessPhone}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                </div>
              </div>

              <div className="profile-input-group">
                <label>Website</label>
                <div className={`profile-input-wrap ${errors.website ? "has-error" : ""}`}>
                  <Globe size={18} />
                  <input
                    ref={registerRef("website")}
                    type="url"
                    name="website"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                </div>
                {errors.website && <small className="field-error">{errors.website}</small>}
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="profile-step-fade">
            <div className="profile-form-header">
              <h3>Business Details</h3>
              <p>Add your business category, experience, address and location.</p>
            </div>

            <div className="profile-form-grid">
              <div className="profile-input-group">
                <label>
                  Business Category<span className="profile-required">*</span>
                </label>
                <select
                  ref={registerRef("category") as any}
                  name="category"
                  className={errors.category ? "has-error" : ""}
                  value={formData.category}
                  onChange={handleChange}
                  disabled={formDisabled}
                >
                  <option value="">Select category</option>
                  {CATEGORY_OPTIONS.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && <small className="field-error">{errors.category}</small>}
              </div>

              <div className="profile-input-group">
                <label>Experience (Years)</label>
                <div className="profile-input-wrap">
                  <Clock size={18} />
                  <input
                    type="number"
                    min="0"
                    name="experience"
                    placeholder="Enter experience"
                    value={formData.experience}
                    onChange={handleChange}
                    disabled={formDisabled}
                  />
                </div>
              </div>

              <div className="profile-input-group">
                <label>
                  State<span className="profile-required">*</span>
                </label>
                <div className={`profile-input-wrap ${errors.stateId ? "has-error" : ""}`}>
                  <MapPin size={18} />
                  <select
                    ref={registerRef("stateId") as any}
                    name="stateId"
                    value={formData.stateId}
                    onChange={handleStateChange}
                    disabled={formDisabled || loadingStates}
                  >
                    <option value="">{loadingStates ? "Loading states..." : "Select state"}</option>
                    {states.map((state) => (
                      <option key={String(state.id)} value={String(state.id)}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  {loadingStates && <Loader2 size={16} className="profile-inline-spinner" />}
                </div>
                {errors.stateId && <small className="field-error">{errors.stateId}</small>}
              </div>

              <div className="profile-input-group">
                <label>
                  City<span className="profile-required">*</span>
                </label>
                <div className={`profile-input-wrap ${errors.cityId ? "has-error" : ""}`}>
                  <MapPin size={18} />
                  <select
                    ref={registerRef("cityId") as any}
                    name="cityId"
                    value={formData.cityId}
                    onChange={handleChange}
                    disabled={!formData.stateId || formDisabled || loadingCities}
                  >
                    <option value="">
                      {loadingCities ? "Loading cities..." : "Select city"}
                    </option>
                    {cities.map((city) => (
                      <option key={String(city.id)} value={String(city.id)}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                  {loadingCities && <Loader2 size={16} className="profile-inline-spinner" />}
                </div>
                {errors.cityId ? (
                  <small className="field-error">{errors.cityId}</small>
                ) : (
                  !formData.stateId && (
                    <small className="profile-hint">Select a state first to load cities.</small>
                  )
                )}
              </div>

              <div className="profile-input-group profile-textarea-group full-width">
                <label>
                  Business Address
                  <span className="profile-char-count">{formData.address.length}/300</span>
                </label>
                <div className="profile-textarea-wrap">
                  <MapPin size={18} />
                  <textarea
                    name="address"
                    placeholder="Enter complete business address"
                    value={formData.address}
                    onChange={handleChange}
                    maxLength={300}
                    rows={4}
                    disabled={formDisabled}
                  />
                </div>
              </div>

              <div className="profile-input-group profile-textarea-group full-width">
                <label>
                  Business Description
                  <span className="profile-char-count">{formData.description.length}/500</span>
                </label>
                <div className="profile-textarea-wrap">
                  <FileText size={18} />
                  <textarea
                    name="description"
                    placeholder="Describe your business, services and expertise"
                    value={formData.description}
                    onChange={handleChange}
                    maxLength={500}
                    rows={5}
                    disabled={formDisabled}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="profile-step-fade">
            <div className="profile-form-header">
              <h3>Review Information</h3>
              <p>
                {isUnderReview
                  ? "Your business information is currently under admin verification."
                  : isVerified
                    ? "Your business information has been verified by the admin."
                    : "Verify all information before submission."}
              </p>
            </div>

            {isRejected && (
              <div className="rejection-box">
                <div className="rejection-box__title">
                  <AlertCircle size={18} />
                  Correction Required
                </div>
                <p className="rejection-box__lead">
                  Your company information needs correction before it can be verified.
                </p>
                {kycApplication?.rejectionReason && (
                  <div className="rejection-box__message">
                    <span>Admin Message</span>
                    <p>{kycApplication.rejectionReason}</p>
                  </div>
                )}
              </div>
            )}

            <div className="profile-review-section">
              <div className="profile-review-title">
                <User size={16} />
                Personal Details
              </div>
              <div className="profile-review-grid">
                <div className="profile-review-item">
                  <span>Full Name</span>
                  <strong>{formData.fullName || "N/A"}</strong>
                </div>
                <div className="profile-review-item">
                  <span>Personal Phone</span>
                  <strong>{formData.phone || "N/A"}</strong>
                </div>
              </div>
            </div>

            <div className="profile-review-section">
              <div className="profile-review-title">
                <Building2 size={16} />
                Company Details
              </div>
              <div className="profile-review-grid">
                <div className="profile-review-item">
                  <span>Company Name</span>
                  <strong>{formData.companyName || "N/A"}</strong>
                </div>
                <div className="profile-review-item">
                  <span>Business Type</span>
                  <strong>{selectedBusinessType?.label || "N/A"}</strong>
                </div>
                <div className="profile-review-item">
                  <span>GST Number</span>
                  <strong>{formData.gstNumber || "N/A"}</strong>
                </div>
                <div className="profile-review-item">
                  <span>PAN Number</span>
                  <strong>{formData.panNumber || "N/A"}</strong>
                </div>
                <div className="profile-review-item">
                  <span>Registration Number</span>
                  <strong>{formData.registrationNumber || "N/A"}</strong>
                </div>
                <div className="profile-review-item">
                  <span>Business Email</span>
                  <strong>{formData.businessEmail || "N/A"}</strong>
                </div>
                <div className="profile-review-item">
                  <span>Business Phone</span>
                  <strong>{formData.businessPhone || "N/A"}</strong>
                </div>
                <div className="profile-review-item">
                  <span>Website</span>
                  <strong>
                    {formData.website ? (
                      <a
                        href={formData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="profile-review-link"
                      >
                        {formData.website}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </strong>
                </div>
              </div>
            </div>

            <div className="profile-review-section">
              <div className="profile-review-title">
                <Layers size={16} />
                Business & Location
              </div>
              <div className="profile-review-grid">
                <div className="profile-review-item">
                  <span>Category</span>
                  <strong>{formData.category || "N/A"}</strong>
                </div>
                <div className="profile-review-item">
                  <span>Experience</span>
                  <strong>{formData.experience || "0"} Years</strong>
                </div>
                <div className="profile-review-item">
                  <span>State</span>
                  <strong>{selectedState?.name || "N/A"}</strong>
                </div>
                <div className="profile-review-item">
                  <span>City</span>
                  <strong>{selectedCity?.name || "N/A"}</strong>
                </div>
                <div className="profile-review-item full-width">
                  <span>Business Address</span>
                  <strong>{formData.address || "N/A"}</strong>
                </div>
                <div className="profile-review-item full-width">
                  <span>Business Description</span>
                  <strong>{formData.description || "N/A"}</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ACTIONS */}
        <div className="profile-form-actions">
          {currentStep > 1 && (
            <button
              type="button"
              className="profile-btn-secondary"
              onClick={prevStep}
              disabled={loading}
            >
              <ChevronLeft size={18} />
              Previous
            </button>
          )}

          {currentStep < TOTAL_STEPS ? (
            <button type="button" className="profile-btn-primary" onClick={nextStep} disabled={loading}>
              Continue
              <ChevronRight size={18} />
            </button>
          ) : !profileSubmitted ? (
            <button
              type="button"
              className="profile-btn-primary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="profile-btn-spinner" />
                  Submitting...
                </>
              ) : (
                <>
                  <Check size={18} />
                  Submit Profile
                </>
              )}
            </button>
          ) : isRejected && !isEditing ? (
            <button type="button" className="profile-btn-primary" onClick={startCorrection}>
              <FileText size={18} />
              Correct & Resubmit
            </button>
          ) : isRejected && isEditing ? (
            <button
              type="button"
              className="profile-btn-primary"
              onClick={handleSubmit}
              disabled={loading || !canSubmit}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="profile-btn-spinner" />
                  Resubmitting...
                </>
              ) : (
                <>
                  <Check size={18} />
                  Resubmit for Verification
                </>
              )}
            </button>
          ) : isUnderReview ? (
            <button type="button" className="profile-btn-primary" disabled>
              <Clock size={18} />
              Waiting for Admin Verification
            </button>
          ) : isVerified ? (
            <button type="button" className="profile-btn-primary" disabled>
              <CheckCircle2 size={18} />
              Company Verified
            </button>
          ) : (
            <button type="button" className="profile-btn-primary" disabled>
              <Check size={18} />
              Profile Submitted
            </button>
          )}
        </div>
      </div>
    </div>
  );
}