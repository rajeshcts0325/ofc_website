"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
    CreditCard,
    ShieldCheck,
    CheckCircle,
    Clock,
    IndianRupee,
} from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";
import "@/styles/dashboard/kyc/complete-profile.css";

declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function PaymentDetails() {
    const [loading, setLoading] = useState(false);
    const { user, checkAuth } = useAuthStore();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const hasActiveSubscription = user?.subscriptions?.some(
        (sub: any) => sub.status === "ACTIVE"
    );

    const verificationStatus =
        user?.company?.verificationStatus || "PROFILE_PENDING";

    const latestSubscription = user?.subscriptions?.[0];

    const subscriptionStatus = latestSubscription?.status || "PENDING";

    const shouldShowPayment =
        !hasActiveSubscription || subscriptionStatus === "EXPIRED";

    const isPendingApproval =
        hasActiveSubscription &&
        (verificationStatus === "PROFILE_PENDING" ||
            verificationStatus === "PENDING_APPROVAL");

    const isVerified =
        hasActiveSubscription && verificationStatus === "VERIFIED";

    const handlePayment = async () => {
        try {
            setLoading(true);

            const orderRes = await fetch("/api/v1/subscription/create-subscription", {
                method: "POST",
                credentials: "include",
            });

            const orderData = await orderRes.json();

            if (!orderRes.ok || !orderData.success) {
                throw new Error(orderData.message || "Failed to create payment order");
            }

            const paymentData = orderData.data;

            const options = {
                key: paymentData.razorpayKey,
                amount: paymentData.amount,
                currency: paymentData.currency,
                name: "Off Contract",
                description: paymentData.planName,
                order_id: paymentData.razorpayOrderId,

                handler: async function (response: any) {
                    const verifyRes = await fetch("/api/v1/subscription/verify-payment", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: "include",
                        body: JSON.stringify({
                            subscriptionId: paymentData.subscriptionId,
                            razorpayOrderId: response.razorpay_order_id,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpaySignature: response.razorpay_signature,
                        }),
                    });

                    const verifyData = await verifyRes.json();

                    if (!verifyRes.ok || !verifyData.success) {
                        throw new Error(
                            verifyData.message || "Payment verification failed"
                        );
                    }

                    toast.success("Payment successful. Pending admin approval.");
                    await checkAuth();
                },

                prefill: {
                    name: user?.profile?.fullName || "",
                    email: user?.email || "",
                    contact: user?.profile?.phone || "",
                },

                theme: {
                    color: "#111827",
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error: any) {
            toast.error(error.message || "Payment failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="dashboard-page">
            <div className="profile-page-header">
                <div>
                    <h1>
                        {isVerified
                            ? "Business Verified"
                            : isPendingApproval
                                ? "Submission Under Review"
                                : "Complete Payment"}
                    </h1>

                    <p>
                        {isVerified
                            ? "Your business profile has been approved and dashboard access is enabled."
                            : isPendingApproval
                                ? "Your payment is completed. Admin verification is currently pending."
                                : "Pay your membership fee to submit your business profile for admin verification."}
                    </p>
                </div>
            </div>
            {isPendingApproval && (
                <div className="profile-form-card">
                    <div className="profile-form-header">
                        <h3>Submission Received</h3>
                        <p>
                            Your payment has been completed successfully. Your business profile is
                            now pending admin verification.
                        </p>
                    </div>

                    <div className="profile-review-grid">
                        <div className="profile-review-item">
                            <span>Payment Status</span>
                            <strong>Paid</strong>
                        </div>

                        <div className="profile-review-item">
                            <span>Verification Status</span>
                            <strong>Pending Admin Approval</strong>
                        </div>

                        <div className="profile-review-item">
                            <span>Plan Name</span>
                            <strong>{latestSubscription?.planName || "Basic Membership"}</strong>
                        </div>

                        <div className="profile-review-item">
                            <span>Next Step</span>
                            <strong>Admin Review</strong>
                        </div>
                    </div>
                </div>
            )}
            {isVerified && (
                <div className="profile-form-card">
                    <div className="profile-form-header">
                        <h3>Business Verified</h3>
                        <p>
                            Congratulations! Your business profile has been approved and verified.
                        </p>
                    </div>

                    <div className="profile-review-grid">
                        <div className="profile-review-item">
                            <span>Membership Status</span>
                            <strong>Active</strong>
                        </div>

                        <div className="profile-review-item">
                            <span>Verification Status</span>
                            <strong>Verified</strong>
                        </div>

                        <div className="profile-review-item">
                            <span>Plan</span>
                            <strong>{latestSubscription?.planName}</strong>
                        </div>

                        <div className="profile-review-item">
                            <span>Dashboard Access</span>
                            <strong>Enabled</strong>
                        </div>
                    </div>
                </div>
            )}
            {shouldShowPayment && (
                <div className="profile-form-card">
                    <div className="profile-form-header">
                        <h3>Membership Plan</h3>
                        <p>One-time membership payment for supplier/agency verification.</p>
                    </div>

                    <div className="profile-review-grid">
                        <div className="profile-review-item">
                            <span>Plan Name</span>
                            <strong>Basic Membership</strong>
                        </div>

                        <div className="profile-review-item">
                            <span>Amount</span>
                            <strong>₹999</strong>
                        </div>

                        <div className="profile-review-item">
                            <span>Payment Status</span>
                            <strong>{hasActiveSubscription ? "Paid" : "Pending"}</strong>
                        </div>

                        <div className="profile-review-item">
                            <span>Verification Status</span>
                            <strong>{verificationStatus}</strong>
                        </div>
                    </div>

                    <div className="profile-stepper-card" style={{ marginTop: "24px" }}>
                        <div className="profile-stepper-grid">
                            <div className="profile-step-item completed">
                                <div className="profile-step-circle">
                                    <CheckCircle size={16} />
                                </div>
                                <div className="profile-step-content">
                                    <strong>Profile Completed</strong>
                                    <span>Business details submitted</span>
                                </div>
                            </div>

                            <div
                                className={`profile-step-item ${hasActiveSubscription ? "completed" : "active"
                                    }`}
                            >
                                <div className="profile-step-circle">
                                    <CreditCard size={16} />
                                </div>
                                <div className="profile-step-content">
                                    <strong>Payment</strong>
                                    <span>
                                        {hasActiveSubscription ? "Payment completed" : "Pay now"}
                                    </span>
                                </div>
                            </div>

                            <div
                                className={`profile-step-item ${verificationStatus === "PENDING_APPROVAL" ? "active" : ""
                                    } ${verificationStatus === "VERIFIED" ? "completed" : ""}`}
                            >
                                <div className="profile-step-circle">
                                    <Clock size={16} />
                                </div>
                                <div className="profile-step-content">
                                    <strong>Admin Approval</strong>
                                    <span>Verification review</span>
                                </div>
                            </div>

                            <div
                                className={`profile-step-item ${verificationStatus === "VERIFIED" ? "completed" : ""
                                    }`}
                            >
                                <div className="profile-step-circle">
                                    <ShieldCheck size={16} />
                                </div>
                                <div className="profile-step-content">
                                    <strong>Verified</strong>
                                    <span>Dashboard access enabled</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-form-actions">
                        {!hasActiveSubscription ? (
                            <button
                                type="button"
                                className="profile-btn-primary"
                                onClick={handlePayment}
                                disabled={loading}
                            >
                                <IndianRupee size={18} />
                                {loading ? "Processing..." : "Pay ₹999 Now"}
                            </button>
                        ) : (
                            <button type="button" className="profile-btn-primary" disabled>
                                <CheckCircle size={18} />
                                Payment Completed
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}