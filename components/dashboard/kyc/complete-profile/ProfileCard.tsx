"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import "@/styles/dashboard/kyc/complete-profile.css";

import {
  Building2, MapPin, BriefcaseBusiness, Phone, User, Globe, FileText, Mail, Layers, Clock,
  ChevronRight, ChevronLeft, Loader2, Check, CheckCircle2, AlertCircle, Hourglass,
  type LucideIcon,
} from "lucide-react";
import toast from "react-hot-toast";
import { useAuthStore } from "@/stores/useAuthStore";

/* ============================================================
   CONFIG  (change the route to match your app)
============================================================ */

export const SUBSCRIPTION_ROUTE = "/dashboard/kyc/complete-payment";

const GST_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_REGEX = /^https?:\/\/.+\..+/;

const opts = (list: string[]) => list.map((v) => ({ value: v, label: v }));

const BUSINESS_TYPES = [
  ["INDIVIDUAL", "Individual"], ["PROPRIETORSHIP", "Proprietorship"], ["PARTNERSHIP", "Partnership"],
  ["LLP", "LLP"], ["PRIVATE_LIMITED", "Private Limited"], ["PUBLIC_LIMITED", "Public Limited"], ["OTHER", "Other"],
].map(([value, label]) => ({ value, label }));

const EMPTY_FORM = {
  fullName: "", phone: "",
  companyName: "", businessType: "", gstNumber: "", panNumber: "", registrationNumber: "",
  businessEmail: "", businessPhone: "", website: "",
  category: "", experience: "", stateId: "", cityId: "", address: "", description: "",
};

type FormData = typeof EMPTY_FORM;
type FormErrors = Partial<Record<keyof FormData, string>>;
type Option = { value: string; label: string };

type Field = {
  name: keyof FormData;
  label: string;
  icon?: LucideIcon;
  kind?: "text" | "email" | "url" | "number" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  hint?: string;
  maxLength?: number;
  pattern?: RegExp;
  patternMsg?: string;
  options?: Option[];
};

/* One config drives the form, validation AND the review screen */
const STEPS: { name: string; title: string; subtitle: string; icon: LucideIcon; fields: Field[] }[] = [
  {
    name: "Personal Info", title: "Personal Information", subtitle: "Provide your personal contact details.", icon: User,
    fields: [
      { name: "fullName", label: "Full Name", icon: User, required: true, placeholder: "Enter full name", hint: "Use your name as per official records." },
      { name: "phone", label: "Personal Phone Number", icon: Phone, required: true, placeholder: "Enter phone number", hint: "We may use this number for verification." },
    ],
  },
  {
    name: "Company Info", title: "Company Information", subtitle: "Provide your registered business information.", icon: Building2,
    fields: [
      { name: "companyName", label: "Company Name", icon: Building2, required: true, placeholder: "Enter company name" },
      { name: "businessType", label: "Business Type", icon: Layers, kind: "select", required: true, options: BUSINESS_TYPES },
      { name: "gstNumber", label: "GST Number", icon: BriefcaseBusiness, placeholder: "Enter GST number", maxLength: 15, hint: "15 characters, e.g. 22AAAAA0000A1Z5", pattern: GST_REGEX, patternMsg: "Enter a valid 15-character GST number." },
      { name: "panNumber", label: "PAN Number", icon: FileText, placeholder: "Enter PAN number", maxLength: 10, hint: "10 characters, e.g. ABCDE1234F", pattern: PAN_REGEX, patternMsg: "Enter a valid 10-character PAN number." },
      { name: "registrationNumber", label: "Registration Number", icon: FileText, placeholder: "Enter registration number" },
      { name: "businessEmail", label: "Business Email", icon: Mail, kind: "email", placeholder: "business@example.com", pattern: EMAIL_REGEX, patternMsg: "Enter a valid email address." },
      { name: "businessPhone", label: "Business Phone", icon: Phone, placeholder: "Enter business phone" },
      { name: "website", label: "Website", icon: Globe, kind: "url", placeholder: "https://example.com", pattern: URL_REGEX, patternMsg: "Enter a valid URL, e.g. https://example.com" },
    ],
  },
  {
    name: "Business Details", title: "Business Details", subtitle: "Add your business category, experience, address and location.", icon: Layers,
    fields: [
      { name: "category", label: "Business Category", icon: Layers, kind: "select", required: true, options: opts(["Construction", "Supplier", "Electrical", "Plumbing"]) },
      { name: "experience", label: "Experience (Years)", icon: Clock, kind: "number", placeholder: "Enter experience" },
      { name: "stateId", label: "State", icon: MapPin, kind: "select", required: true },
      { name: "cityId", label: "City", icon: MapPin, kind: "select", required: true, hint: "Select a state first to load cities." },
      { name: "address", label: "Business Address", icon: MapPin, kind: "textarea", maxLength: 300, placeholder: "Enter complete business address" },
      { name: "description", label: "Business Description", icon: FileText, kind: "textarea", maxLength: 500, placeholder: "Describe your business, services and expertise" },
    ],
  },
];

const REVIEW_STEP = STEPS.length + 1;
const STEP_NAMES = [...STEPS.map((s) => s.name), "Review & Submit"];

/* ============================================================
   HELPERS
============================================================ */

const validate = (fields: Field[], data: FormData): FormErrors => {
  const errs: FormErrors = {};
  for (const f of fields) {
    const v = data[f.name].trim();
    if (!v) {
      if (f.required) errs[f.name] = `${f.label} is required.`;
    } else if (f.pattern && !f.pattern.test(v)) {
      errs[f.name] = f.patternMsg;
    }
  }
  return errs;
};

const clean = (d: FormData): FormData => {
  const out = Object.fromEntries(Object.entries(d).map(([k, v]) => [k, v.trim()])) as FormData;
  out.businessEmail = out.businessEmail.toLowerCase();
  return out;
};

const toPayload = (d: FormData) => {
  const c = clean(d);
  return {
    ...Object.fromEntries(Object.entries(c).map(([k, v]) => [k, v || null])),
    experience: c.experience ? Number(c.experience) : null,
  };
};

const focusField = (name: string) =>
  setTimeout(() => {
    const el = document.querySelector<HTMLElement>(`[name="${name}"]`);
    el?.focus();
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 0);

async function fetchList(url: string): Promise<Option[]> {
  const res = await fetch(url);
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(json.message);
  return (json.data ?? []).map((x: { id: string | number; name: string }) => ({ value: String(x.id), label: x.name }));
}

function useLocations(stateId: string) {
  const [states, setStates] = useState<Option[]>([]);
  const [cities, setCities] = useState<Option[]>([]);
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);

  useEffect(() => {
    fetchList("/api/v1/locations/states")
      .then(setStates)
      .catch(() => toast.error("Unable to load states. Please refresh the page."))
      .finally(() => setLoadingStates(false));
  }, []);

  useEffect(() => {
    if (!stateId) return setCities([]);
    let cancelled = false;
    setLoadingCities(true);
    fetchList(`/api/v1/locations/cities?stateId=${stateId}`)
      .then((d) => !cancelled && setCities(d))
      .catch(() => !cancelled && toast.error("Unable to load cities for the selected state."))
      .finally(() => !cancelled && setLoadingCities(false));
    return () => { cancelled = true; };
  }, [stateId]);

  return { states, cities, loadingStates, loadingCities };
}

const BADGES = {
  incomplete: { label: "Profile Incomplete", icon: <FileText size={15} />, tone: "neutral" },
  submitted: { label: "Profile Submitted", icon: <Check size={15} />, tone: "info" },
  review: { label: "Under Admin Verification", icon: <Hourglass size={15} />, tone: "warning" },
  rejected: { label: "Correction Required", icon: <AlertCircle size={15} />, tone: "danger" },
  verified: { label: "Company Verified", icon: <CheckCircle2 size={15} />, tone: "success" },
} as const;

/* ============================================================
   COMPONENT
============================================================ */

export default function ProfileCard() {
  const { user, checkAuth } = useAuthStore();

  const [step, setStep] = useState(1);
  const [maxStep, setMaxStep] = useState(1);
  const [isEditing, setIsEditing] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [original, setOriginal] = useState<FormData | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const { states, cities, loadingStates, loadingCities } = useLocations(formData.stateId);

  /* ---------- status (single source of truth) ---------- */
  const onboarding = user?.onboardingStatus;
  const kyc = user?.company?.kycApplication;
  const submitted = !!user?.company?.onboardingCompleted;

  const isUnderReview = onboarding === "KYC_UNDER_REVIEW";
  const isRejected = onboarding === "KYC_REJECTED";
  const isVerified =
    kyc?.status === "VERIFIED" || onboarding === "SUBSCRIPTION_PENDING" || onboarding === "ACTIVE";
  const canProceed = isVerified && onboarding !== "ACTIVE"; // verified, but not paid yet

  const locked = loading || isUnderReview || isVerified || (isRejected && !isEditing);
  const hasChanges = !!original && JSON.stringify(clean(formData)) !== JSON.stringify(original);

  const status = isVerified ? "verified" : isUnderReview ? "review" : isRejected ? "rejected" : submitted ? "submitted" : "incomplete";
  const badge = BADGES[status];

  const completion = Math.round(
    (Object.values(formData).filter((v) => v.trim()).length / Object.keys(formData).length) * 100
  );
  const progress = Math.round((step / STEP_NAMES.length) * 100);

  /* ---------- load existing user data ---------- */
  useEffect(() => {
    if (!user) return;
    const c = user.company;
    const s = (v: unknown) => (v === null || v === undefined ? "" : String(v));

    const loaded: FormData = {
      fullName: s(user.profile?.fullName), phone: s(user.profile?.phone),
      companyName: s(c?.name), businessType: s(c?.businessType), gstNumber: s(c?.gstNumber),
      panNumber: s(c?.panNumber), registrationNumber: s(c?.registrationNumber),
      businessEmail: s(c?.businessEmail), businessPhone: s(c?.businessPhone), website: s(c?.website),
      category: s(c?.category), experience: s(c?.experience), stateId: s(c?.stateId), cityId: s(c?.cityId),
      address: s(c?.address), description: s(c?.description),
    };

    setFormData(loaded);
    setOriginal(clean(loaded));

    if (c?.onboardingCompleted) {
      setStep(REVIEW_STEP);
      setMaxStep(REVIEW_STEP);
      setIsEditing(false);
    }
  }, [user]);

  /* ---------- handlers ---------- */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name as keyof FormData;
    const value = name === "gstNumber" || name === "panNumber" ? e.target.value.toUpperCase() : e.target.value;

    setFormData((p) => ({ ...p, [name]: value, ...(name === "stateId" && { cityId: "" }) }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const goTo = (n: number) => {
    if (!submitted && n > maxStep) return;
    setStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => {
    const errs = validate(STEPS[step - 1].fields, formData);
    setErrors(errs);
    if (Object.keys(errs).length) return focusField(Object.keys(errs)[0]);

    setMaxStep((m) => Math.max(m, step + 1));
    goTo(step + 1);
  };

  const handleSubmit = async () => {
    if (loading) return;

    for (let i = 0; i < STEPS.length; i++) {
      const errs = validate(STEPS[i].fields, formData);
      if (Object.keys(errs).length) {
        setErrors(errs);
        setStep(i + 1);
        return focusField(Object.keys(errs)[0]);
      }
    }

    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/v1/profile/complete-profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(toPayload(formData)),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Unable to update your profile.");

      toast.success(submitted ? "Business profile resubmitted successfully." : "Business profile submitted successfully.");
      await checkAuth?.(); // refreshes user -> effect above resets form, step & status
    } catch (err: any) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- rendering helpers ---------- */
  const optionsFor = (f: Field): Option[] =>
    f.name === "stateId" ? states : f.name === "cityId" ? cities : f.options ?? [];

  const displayValue = (f: Field) => {
    const v = formData[f.name];
    if (!v) return "N/A";
    if (f.kind === "select") return optionsFor(f).find((o) => o.value === v)?.label ?? v;
    return f.name === "experience" ? `${v} Years` : v;
  };

  const renderField = (f: Field) => {
    const err = errors[f.name];
    const Icon = f.icon;
    const isTextarea = f.kind === "textarea";
    const isCity = f.name === "cityId";
    const busy = (f.name === "stateId" && loadingStates) || (isCity && loadingCities);
    const common = { name: f.name, value: formData[f.name], onChange: handleChange, disabled: locked };

    const control =
      f.kind === "select" ? (
        <select {...common} disabled={locked || busy || (isCity && !formData.stateId)}>
          <option value="">{busy ? "Loading..." : `Select ${f.label.toLowerCase()}`}</option>
          {optionsFor(f).map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      ) : isTextarea ? (
        <textarea {...common} rows={4} maxLength={f.maxLength} placeholder={f.placeholder} />
      ) : (
        <input {...common} type={f.kind ?? "text"} min={f.kind === "number" ? 0 : undefined} maxLength={f.maxLength} placeholder={f.placeholder} />
      );

    // City hint only shows until a state is chosen
    const showHint = f.hint && !(isCity && formData.stateId);

    return (
      <div key={f.name} className={`profile-input-group ${isTextarea ? "profile-textarea-group full-width" : ""}`}>
        <label>
          {f.label}
          {f.required && <span className="profile-required">*</span>}
          {isTextarea && <span className="profile-char-count">{formData[f.name].length}/{f.maxLength}</span>}
        </label>
        <div className={`${isTextarea ? "profile-textarea-wrap" : "profile-input-wrap"} ${err ? "has-error" : ""}`}>
          {Icon && <Icon size={18} />}
          {control}
          {busy && <Loader2 size={16} className="profile-inline-spinner" />}
        </div>
        {err ? <small className="field-error">{err}</small> : showHint && <small className="profile-hint">{f.hint}</small>}
      </div>
    );
  };

  const renderAction = () => {
    const disabledBtn = (icon: React.ReactNode, text: string) => (
      <button type="button" className="profile-btn-primary" disabled>{icon}{text}</button>
    );

    if (canProceed)
      return (
        <Link href={SUBSCRIPTION_ROUTE} className="profile-btn-primary">
          Continue to Subscription <ChevronRight size={18} />
        </Link>
      );
    if (isVerified) return disabledBtn(<CheckCircle2 size={18} />, "Company Verified");
    if (isUnderReview) return disabledBtn(<Clock size={18} />, "Waiting for Admin Verification");
    if (isRejected && !isEditing)
      return (
        <button type="button" className="profile-btn-primary" onClick={() => { setIsEditing(true); setErrors({}); setStep(1); }}>
          <FileText size={18} /> Correct & Resubmit
        </button>
      );
    if (submitted && !isRejected) return disabledBtn(<Check size={18} />, "Profile Submitted");

    return (
      <button type="button" className="profile-btn-primary" onClick={handleSubmit} disabled={loading || (isRejected && !hasChanges)}>
        {loading ? <Loader2 size={18} className="profile-btn-spinner" /> : <Check size={18} />}
        {isRejected ? "Resubmit for Verification" : "Submit Profile"}
      </button>
    );
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
          <p>Complete your business information to continue with KYC verification and unlock dashboard features.</p>
        </div>
        <div className={`status-badge status-badge--${badge.tone}`}>
          {badge.icon}
          {badge.label}
          <span className="status-badge__divider" />
          {completion}% Complete
        </div>
      </div>

      {/* STEPPER */}
      <div className="profile-stepper-card">
        <div className="profile-progress-head">
          <span>Step {step} of {STEP_NAMES.length}: {STEP_NAMES[step - 1]}</span>
          <span>{progress}%</span>
        </div>
        <div className="profile-progress-track">
          <div className="profile-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="profile-stepper-grid">
          {STEP_NAMES.map((name, i) => {
            const n = i + 1;
            const active = step === n;
            const completed = submitted || step > n;
            const clickable = submitted || n <= maxStep;
            return (
              <div
                key={name}
                role="button"
                aria-disabled={!clickable}
                onClick={() => goTo(n)}
                className={["profile-step-item", active && "active", completed && "completed", !clickable && "disabled"].filter(Boolean).join(" ")}
              >
                <div className="profile-step-circle">{completed ? <Check size={18} /> : n}</div>
                <div className="profile-step-content">
                  <strong>{name}</strong>
                  <span>{completed ? "Completed" : active ? "In progress" : "Pending"}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FORM */}
      <div className="profile-form-card">
        {step < REVIEW_STEP ? (
          <div className="profile-step-fade">
            <div className="profile-form-header">
              <h3>{STEPS[step - 1].title}</h3>
              <p>{STEPS[step - 1].subtitle}</p>
            </div>
            <div className="profile-form-grid">{STEPS[step - 1].fields.map(renderField)}</div>
          </div>
        ) : (
          <div className="profile-step-fade">
            <div className="profile-form-header">
              <h3>Review Information</h3>
              <p>
                {isUnderReview
                  ? "Your business information is currently under admin verification."
                  : isVerified
                    ? "Your company is verified. Continue to choose your subscription plan."
                    : "Verify all information before submission."}
              </p>
            </div>

            {isRejected && (
              <div className="rejection-box">
                <div className="rejection-box__title"><AlertCircle size={18} /> Correction Required</div>
                <p className="rejection-box__lead">Your company information needs correction before it can be verified.</p>
                {kyc?.rejectionReason && (
                  <div className="rejection-box__message">
                    <span>Admin Message</span>
                    <p>{kyc.rejectionReason}</p>
                  </div>
                )}
              </div>
            )}

            {STEPS.map(({ title, icon: Icon, fields }) => (
              <div key={title} className="profile-review-section">
                <div className="profile-review-title"><Icon size={16} /> {title}</div>
                <div className="profile-review-grid">
                  {fields.map((f) => (
                    <div key={f.name} className={`profile-review-item ${f.kind === "textarea" ? "full-width" : ""}`}>
                      <span>{f.label}</span>
                      <strong>{displayValue(f)}</strong>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ACTIONS */}
        <div className="profile-form-actions">
          {step > 1 && (
            <button type="button" className="profile-btn-secondary" onClick={() => goTo(step - 1)} disabled={loading}>
              <ChevronLeft size={18} /> Previous
            </button>
          )}
          {step < REVIEW_STEP ? (
            <button type="button" className="profile-btn-primary" onClick={next} disabled={loading}>
              Continue <ChevronRight size={18} />
            </button>
          ) : (
            renderAction()
          )}
        </div>
      </div>
    </div>
  );
}