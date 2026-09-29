"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { CreditCard, ShieldCheck, CheckCircle, IndianRupee, Layers } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";
import "@/styles/dashboard/kyc/complete-profile.css";

declare global {
    interface Window {
        Razorpay: any;
    }
}

type Plan = {
    id: string;
    name: string;
    description?: string | null;
    price: number;
    billingCycle: "MONTHLY" | "YEARLY";
};

const PROFILE_ROUTE = "/dashboard/kyc/complete-profile"; // change to your KYC / profile page route

const formatPrice = (p: Plan) =>
    `₹${p.price.toLocaleString("en-IN")} / ${p.billingCycle === "YEARLY" ? "year" : "month"}`;

export default function PaymentDetails() {
    const { user, checkAuth } = useAuthStore();

    const [plans, setPlans] = useState<Plan[]>([]);
    const [selectedPlanId, setSelectedPlanId] = useState("");
    const [loadingPlans, setLoadingPlans] = useState(false);
    const [paying, setPaying] = useState(false);

    /* ---------- status (driven by onboardingStatus) ---------- */
    const onboarding = user?.onboardingStatus;
    const isActive = onboarding === "ACTIVE";
    const canPay = onboarding === "SUBSCRIPTION_PENDING";

    const activeSubscription = user?.subscriptions?.find((s: any) => s.status === "ACTIVE");
    const selectedPlan = plans.find((p) => p.id === selectedPlanId);

    const KYC_REQUIRED_MSG = "Please complete your business verification first.";

    const kycStepText =
        onboarding === "KYC_UNDER_REVIEW" ? "Under admin review"
            : onboarding === "KYC_REJECTED" ? "Correction required"
                : "Pending";

    const handleSelectPlan = (id: string) => {
        if (!canPay) return toast.error(KYC_REQUIRED_MSG, { id: "kyc-required" });
        setSelectedPlanId(id);
    };

    /* ---------- load Razorpay script once ---------- */
    useEffect(() => {
        if (window.Razorpay) return;
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    /* ---------- load plans (visible to everyone who is not active yet) ---------- */
    useEffect(() => {
        if (isActive) return;

        const loadPlans = async () => {
            setLoadingPlans(true);
            try {
                const res = await fetch("/api/v1/subscription/plans", { credentials: "include" });
                const json = await res.json();
                if (!res.ok || !json.success) throw new Error(json.message || "Failed to load plans");

                setPlans(json.data || []);
                if (canPay && json.data?.length === 1) setSelectedPlanId(json.data[0].id);
            } catch (err: any) {
                toast.error(err.message || "Unable to load plans");
            } finally {
                setLoadingPlans(false);
            }
        };

        loadPlans();
    }, [isActive, canPay]);

    /* ---------- payment ---------- */
    const handlePayment = async () => {
        if (!canPay) return toast.error(KYC_REQUIRED_MSG, { id: "kyc-required" });
        if (!selectedPlanId) return toast.error("Please choose a plan first.");
        if (!window.Razorpay) return toast.error("Payment gateway is still loading. Try again.");

        setPaying(true);
        try {
            const orderRes = await fetch("/api/v1/subscription/create-subscription", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ planId: selectedPlanId }),
            });
            const orderData = await orderRes.json();
            if (!orderRes.ok || !orderData.success) {
                throw new Error(orderData.message || "Failed to create payment order");
            }

            const order = orderData.data;

            const razorpay = new window.Razorpay({
                key: order.razorpayKey,
                amount: order.amount,
                currency: order.currency,
                name: "Off Contract",
                description: order.planName,
                order_id: order.razorpayOrderId,

                handler: async (response: any) => {
                    try {
                        const verifyRes = await fetch("/api/v1/subscription/verify-payment", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            credentials: "include",
                            body: JSON.stringify({
                                subscriptionId: order.subscriptionId,
                                razorpayOrderId: response.razorpay_order_id,
                                razorpayPaymentId: response.razorpay_payment_id,
                                razorpaySignature: response.razorpay_signature,
                            }),
                        });
                        const verifyData = await verifyRes.json();
                        if (!verifyRes.ok || !verifyData.success) {
                            throw new Error(verifyData.message || "Payment verification failed");
                        }

                        toast.success("Payment successful. Your account is now active.");
                        await checkAuth(); // onboardingStatus -> ACTIVE
                    } catch (err: any) {
                        toast.error(err.message || "Payment verification failed");
                    } finally {
                        setPaying(false);
                    }
                },

                modal: { ondismiss: () => setPaying(false) },

                prefill: {
                    name: user?.profile?.fullName || "",
                    email: user?.email || "",
                    contact: user?.profile?.phone || "",
                },
                theme: { color: "#111827" },
            });

            razorpay.open();
        } catch (err: any) {
            toast.error(err.message || "Payment failed");
            setPaying(false);
        }
    };

    /* ---------- copy ---------- */
    const heading = isActive ? "Membership Active" : "Choose Your Plan";
    const subheading = isActive
        ? "Your payment is complete and full dashboard access is enabled."
        : canPay
            ? "Your company is verified. Select a plan and complete payment to activate your account."
            : "Explore our plans. Payment unlocks after your business verification is approved.";

    return (
        <div className="dashboard-page">
            <div className="profile-page-header">
                <div>
                    <h1>{heading}</h1>
                    <p>{subheading}</p>
                </div>
            </div>

            {/* ACTIVE */}
            {isActive && (
                <div className="profile-form-card">
                    <div className="profile-form-header">
                        <h3>Payment Successful</h3>
                        <p>Thank you! Your membership is active.</p>
                    </div>

                    <div className="profile-review-grid">
                        <div className="profile-review-item">
                            <span>Plan</span>
                            <strong>{activeSubscription?.plan?.name || "Active Plan"}</strong>
                        </div>
                        <div className="profile-review-item">
                            <span>Billing Cycle</span>
                            <strong>{activeSubscription?.billingCycle || "N/A"}</strong>
                        </div>
                        <div className="profile-review-item">
                            <span>Valid Till</span>
                            <strong>
                                {activeSubscription?.endDate
                                    ? new Date(activeSubscription.endDate).toLocaleDateString("en-IN")
                                    : "N/A"}
                            </strong>
                        </div>
                        <div className="profile-review-item">
                            <span>Dashboard Access</span>
                            <strong>Enabled</strong>
                        </div>
                    </div>
                </div>
            )}

            {/* STEPPER + PLANS (always visible until active) */}
            {!isActive && (
                <>
                    {/* STEPPER (top) */}
                    <div className="profile-stepper-card">
                        <div className="profile-stepper-grid">
                            <div className={`profile-step-item ${canPay ? "completed" : "active"}`}>
                                <div className="profile-step-circle">
                                    {canPay ? <CheckCircle size={16} /> : <ShieldCheck size={16} />}
                                </div>
                                <div className="profile-step-content">
                                    <strong>KYC Verification</strong>
                                    <span>{canPay ? "Company approved" : kycStepText}</span>
                                </div>
                            </div>

                            <div className={`profile-step-item ${selectedPlan ? "completed" : canPay ? "active" : ""}`}>
                                <div className="profile-step-circle"><Layers size={16} /></div>
                                <div className="profile-step-content">
                                    <strong>Choose Plan</strong>
                                    <span>{selectedPlan ? selectedPlan.name : "Select a plan"}</span>
                                </div>
                            </div>

                            <div className={`profile-step-item ${selectedPlan ? "active" : ""}`}>
                                <div className="profile-step-circle"><CreditCard size={16} /></div>
                                <div className="profile-step-content">
                                    <strong>Payment</strong>
                                    <span>Pay securely</span>
                                </div>
                            </div>

                            <div className="profile-step-item">
                                <div className="profile-step-circle"><CheckCircle size={16} /></div>
                                <div className="profile-step-content">
                                    <strong>Active</strong>
                                    <span>Full platform access</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PLANS + PAY (below) */}
                    <div className="profile-form-card">
                        <div className="profile-form-header">
                            <h3>Subscription Plans</h3>
                            <p>Pick the plan that fits your business.</p>
                        </div>

                        {!canPay && (
                            <p style={{ marginBottom: 16 }}>
                                Business verification is {kycStepText.toLowerCase()}.{" "}
                                <Link href={PROFILE_ROUTE} style={{ textDecoration: "underline", fontWeight: 600 }}>
                                    Complete verification
                                </Link>{" "}
                                to unlock payment.
                            </p>
                        )}

                        {loadingPlans ? (
                            <p>Loading plans...</p>
                        ) : plans.length === 0 ? (
                            <p>No plans are available right now. Please contact support.</p>
                        ) : (
                            <div className="profile-review-grid">
                                {plans.map((plan) => {
                                    const selected = plan.id === selectedPlanId;
                                    return (
                                        <div
                                            key={plan.id}
                                            role="button"
                                            tabIndex={0}
                                            aria-disabled={!canPay}
                                            className="profile-review-item"
                                            onClick={() => handleSelectPlan(plan.id)}
                                            onKeyDown={(e) => e.key === "Enter" && handleSelectPlan(plan.id)}
                                            style={{
                                                cursor: canPay ? "pointer" : "not-allowed",
                                                opacity: canPay ? 1 : 0.6,
                                                border: selected ? "2px solid #111827" : undefined,
                                            }}
                                        >
                                            <span>{plan.name}</span>
                                            <strong>{formatPrice(plan)}</strong>
                                            {plan.description && <small>{plan.description}</small>}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        <div className="profile-form-actions">
                            <button
                                type="button"
                                className="profile-btn-primary"
                                onClick={handlePayment}
                                disabled={paying || (canPay && !selectedPlan)}
                            >
                                <IndianRupee size={18} />
                                {paying
                                    ? "Processing..."
                                    : !canPay
                                        ? "Complete Verification to Pay"
                                        : selectedPlan
                                            ? `Pay ₹${selectedPlan.price.toLocaleString("en-IN")} Now`
                                            : "Select a plan to pay"}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}