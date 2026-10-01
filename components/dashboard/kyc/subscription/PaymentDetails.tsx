"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { CreditCard, ShieldCheck, CheckCircle, IndianRupee, Layers, Eye, Download, X } from "lucide-react";
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

type ReceiptSection = { title: string; rows: [string, string][] };

const PROFILE_ROUTE = "/dashboard/kyc/complete-profile"; // change to your KYC / profile page route

const formatPrice = (p: Plan) =>
    `₹${p.price.toLocaleString("en-IN")} / ${p.billingCycle === "YEARLY" ? "year" : "month"}`;

/* ---------- receipt helpers ---------- */
const fmtDate = (d?: string | Date | null) =>
    d ? new Date(d).toLocaleDateString("en-IN", { dateStyle: "medium" }) : "N/A";

const fmtDateTime = (d?: string | Date | null) =>
    d ? new Date(d).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }) : "N/A";

const fmtMoney = (n?: number | null) =>
    typeof n === "number" ? `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2 })}` : "N/A";

const orNA = (v: any) => (v === undefined || v === null || v === "" ? "N/A" : String(v));

/* ---------- issuer (company) details shown on the receipt ---------- */
// TODO: fill in your real company details. Put your logo (PNG or JPG) in /public and match the path below.
const ISSUER = {
    name: "Off Contract",
    address: "Registered office address ,Phase-II, Kanan Vihar, Patia, Bhubaneswar, Odisha",
    email: "ofctechindia@gmail.com",
    gstin: "", // leave empty to hide
    logo: "/icons/logo.png",
};
const issuerLines = [
    ISSUER.address,
    `Email: ${ISSUER.email}`,
    ISSUER.gstin && `GSTIN: ${ISSUER.gstin}`,
].filter(Boolean) as string[];

const DECLARATION =
    "This receipt acknowledges that the payment described above has been received by Off Contract towards the " +
    "subscription plan stated herein. The subscription is provided subject to the Terms of Service of Off Contract. " +
    "Payments are processed securely through Razorpay. This receipt is valid only for the payment and period mentioned above.";

/* ---------- amount in words (Indian numbering) ---------- */
const ONES = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
    "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const twoDigits = (n: number) => (n < 20 ? ONES[n] : `${TENS[Math.floor(n / 10)]}${n % 10 ? " " + ONES[n % 10] : ""}`);
const threeDigits = (n: number) =>
    `${n >= 100 ? ONES[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " : "") : ""}${n % 100 ? twoDigits(n % 100) : ""}`;

const amountInWords = (amount: number) => {
    let n = Math.floor(amount);
    const paise = Math.round((amount - n) * 100);
    const out: string[] = [];
    ([[1e7, "Crore"], [1e5, "Lakh"], [1e3, "Thousand"]] as [number, string][]).forEach(([div, label]) => {
        const q = Math.floor(n / div);
        if (q) { out.push(`${threeDigits(q)} ${label}`); n %= div; }
    });
    if (n) out.push(threeDigits(n));
    return `Rupees ${out.join(" ") || "Zero"}${paise ? ` and ${twoDigits(paise)} Paise` : ""} Only`;
};

/* ---------- load logo as data URL for the PDF (returns null if missing) ---------- */
const loadLogo = async () => {
    try {
        const res = await fetch(ISSUER.logo);
        if (!res.ok) return null;
        const blob = await res.blob();
        const data = await new Promise<string>((resolve, reject) => {
            const r = new FileReader();
            r.onload = () => resolve(r.result as string);
            r.onerror = reject;
            r.readAsDataURL(blob);
        });
        const size = await new Promise<{ w: number; h: number }>((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve({ w: img.width, h: img.height });
            img.onerror = reject;
            img.src = data;
        });
        return { data, ...size };
    } catch {
        return null;
    }
};

export default function PaymentDetails() {
    const { user, checkAuth } = useAuthStore();

    const [plans, setPlans] = useState<Plan[]>([]);
    const [selectedPlanId, setSelectedPlanId] = useState("");
    const [loadingPlans, setLoadingPlans] = useState(false);
    const [paying, setPaying] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);
    const [downloading, setDownloading] = useState(false);

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

    /* ---------- receipt data (single source for page, modal and PDF) ---------- */
    // Assumes /auth/me returns subscriptions[].payments[] (latest first) and a company object.
    // Adjust the field names below if your backend uses different ones.
    const payment = activeSubscription?.payments?.[0];
    const company = user?.company || user?.businessProfile || {};
    const planName = activeSubscription?.plan?.name;
    const subAmount = activeSubscription?.amount ?? activeSubscription?.plan?.price;
    const paidAmount = payment?.amount ?? subAmount;
    const receiptNo = payment?.razorpayPaymentId
        ? `RCPT-${String(payment.razorpayPaymentId).slice(-8).toUpperCase()}`
        : "N/A";

    const paymentRows: [string, string][] = [
        ["Payment Status", orNA(payment?.status)],
        ["Payment ID", orNA(payment?.razorpayPaymentId)],
        ["Razorpay Order ID", orNA(payment?.razorpayOrderId)],
        ["Payment Date & Time", fmtDateTime(payment?.paidAt || payment?.createdAt)],
        ["Amount Paid", fmtMoney(paidAmount)],
        ["Currency", orNA(payment?.currency || "INR")],
    ];

    const subscriptionRows: [string, string][] = [
        ["Plan", orNA(planName)],
        ["Billing Cycle", orNA(activeSubscription?.billingCycle || activeSubscription?.plan?.billingCycle)],
        ["Subscription Amount", fmtMoney(subAmount)],
        ["Start Date", fmtDate(activeSubscription?.startDate)],
        ["Valid Till", fmtDate(activeSubscription?.endDate)],
        ["Subscription Status", orNA(activeSubscription?.status)],
        ["Dashboard Access", isActive ? "Enabled" : "Disabled"],
    ];

    const receiptSections: ReceiptSection[] = [
        {
            title: "Customer Details",
            rows: [
                ["Full Name", orNA(user?.profile?.fullName)],
                ["Email", orNA(user?.email)],
                ["Phone", orNA(user?.profile?.phone)],
            ],
        },
        {
            title: "Business Details",
            rows: [
                ["Company / Business Name", orNA(company.name || company.companyName || company.businessName)],
                ["Business Type", orNA(company.type || company.businessType)],
                ["GST Number", orNA(company.gstNumber || company.gst)],
                ["PAN", orNA(company.panNumber || company.pan)],
                ["Address", orNA(company.address)],
            ],
        },
        {
            title: "Plan Information",
            rows: [
                ["Plan", orNA(planName)],
                ["Billing Cycle", orNA(activeSubscription?.billingCycle || activeSubscription?.plan?.billingCycle)],
                ["Amount", fmtMoney(subAmount)],
                ["Subscription Start", fmtDate(activeSubscription?.startDate)],
                ["Valid Till", fmtDate(activeSubscription?.endDate)],
            ],
        },
        {
            title: "Payment Information",
            rows: [
                ["Payment ID", orNA(payment?.razorpayPaymentId)],
                ["Razorpay Order ID", orNA(payment?.razorpayOrderId)],
                ["Payment Date", fmtDateTime(payment?.paidAt || payment?.createdAt)],
                ["Amount Paid", fmtMoney(paidAmount)],
                ["Payment Status", orNA(payment?.status)],
            ],
        },
    ];

    /* ---------- receipt document data (shared by modal and PDF) ---------- */
    const receiptDate = payment?.paidAt || payment?.createdAt;
    const isPaid = payment?.status === "SUCCESS";
    const billingCycleText = orNA(activeSubscription?.billingCycle || activeSubscription?.plan?.billingCycle);
    const businessName = company.name || company.companyName || company.businessName;
    const servicePeriod = `${fmtDate(activeSubscription?.startDate)} to ${fmtDate(activeSubscription?.endDate)}`;
    const amountWords = typeof paidAmount === "number" ? amountInWords(paidAmount) : "N/A";

    const receivedFrom = [
        user?.profile?.fullName,
        businessName,
        company.address,
        user?.email && `Email: ${user.email}`,
        user?.profile?.phone && `Phone: ${user.profile.phone}`,
        (company.gstNumber || company.gst) && `GSTIN: ${company.gstNumber || company.gst}`,
        (company.panNumber || company.pan) && `PAN: ${company.panNumber || company.pan}`,
    ].filter(Boolean) as string[];

    const receiptMeta: [string, string][] = [
        ["Receipt No.", receiptNo],
        ["Receipt Date", fmtDate(receiptDate)],
        ["Payment Time", fmtDateTime(receiptDate)],
        ["Payment ID", orNA(payment?.razorpayPaymentId)],
        ["Order ID", orNA(payment?.razorpayOrderId)],
        ["Payment Mode", "Online (Razorpay)"],
        ["Status", isPaid ? "PAID" : orNA(payment?.status)],
    ];

    const cell = { border: "1px solid #d1d5db", padding: "8px 12px" } as const;
    const blockTitle = { fontSize: 11, letterSpacing: 1.5, fontWeight: 700, textTransform: "uppercase", color: "#6b7280", marginBottom: 6 } as const;

    /* ---------- receipt PDF ---------- */
    const handleDownloadReceipt = async () => {
        setDownloading(true);
        try {
            // dynamic import keeps jsPDF out of the server bundle / initial load
            const { jsPDF } = await import("jspdf");
            const autoTable = (await import("jspdf-autotable")).default;
            const logo = await loadLogo();

            const doc = new jsPDF({ unit: "pt", format: "a4" });
            // jsPDF's built-in fonts can't render the ₹ symbol, so use "Rs. " in the PDF
            const pdf = (s: string) => s.replace(/₹/g, "Rs. ");
            const INK: [number, number, number] = [17, 24, 39];
            const base: any = {
                theme: "grid",
                styles: { font: "times", fontSize: 10, cellPadding: 6, lineColor: [209, 213, 219], textColor: INK },
                headStyles: { fillColor: INK, textColor: 255, fontStyle: "bold" },
            };
            const finalY = () => (doc as any).lastAutoTable.finalY as number;

            /* page border (double line) */
            doc.setDrawColor(...INK);
            doc.setLineWidth(1.5).rect(20, 20, 555, 802);
            doc.setLineWidth(0.4).rect(25, 25, 545, 792);

            /* header: logo + issuer (left), title + stamp (right) */
            let textX = 40;
            if (logo) {
                const h = 40;
                const w = Math.min(120, (logo.w / logo.h) * h);
                doc.addImage(logo.data, logo.data.startsWith("data:image/png") ? "PNG" : "JPEG", 40, 40, w, h);
                textX = 40 + w + 12;
            }
            doc.setFont("times", "bold").setFontSize(16).setTextColor(...INK).text(ISSUER.name, textX, 54);
            doc.setFont("times", "normal").setFontSize(9).setTextColor(90);
            issuerLines.forEach((line, i) => doc.text(line, textX, 68 + i * 11));

            doc.setFont("times", "bold").setFontSize(18).setTextColor(...INK).text("PAYMENT RECEIPT", 555, 54, { align: "right" });
            if (isPaid) {
                doc.setDrawColor(22, 163, 74).setTextColor(22, 163, 74).setLineWidth(1.2);
                doc.roundedRect(495, 66, 60, 22, 3, 3, "S");
                doc.setFont("helvetica", "bold").setFontSize(12).text("PAID", 525, 81, { align: "center" });
            }
            doc.setDrawColor(...INK).setLineWidth(0.8).line(40, 104, 555, 104);

            /* received from (left) + payment details (right) */
            autoTable(doc, {
                ...base, startY: 120, margin: { left: 40 }, tableWidth: 240,
                head: [["Received From"]],
                body: receivedFrom.map((l) => [l]),
            });
            const leftEnd = finalY();
            autoTable(doc, {
                ...base, startY: 120, margin: { left: 300 }, tableWidth: 255,
                head: [[{ content: "Payment Details", colSpan: 2 }]],
                body: receiptMeta.map(([k, v]) => [k, pdf(v)]),
                columnStyles: { 0: { cellWidth: 80, fontStyle: "bold" } },
            });
            let y = Math.max(leftEnd, finalY()) + 20;

            /* itemised table + total */
            autoTable(doc, {
                ...base, startY: y, margin: { left: 40, right: 40 },
                head: [["Description", "Billing Cycle", "Service Period", "Amount"]],
                body: [[`${orNA(planName)} Subscription`, billingCycleText, servicePeriod, pdf(fmtMoney(subAmount))]],
                columnStyles: { 3: { halign: "right" } },
            });
            autoTable(doc, {
                ...base, startY: finalY(), margin: { left: 40, right: 40 },
                body: [["Total Amount Paid", pdf(fmtMoney(paidAmount))]],
                styles: { ...base.styles, fontStyle: "bold", fontSize: 11 },
                columnStyles: { 0: { halign: "right" }, 1: { halign: "right", cellWidth: 130 } },
            });
            y = finalY() + 22;

            /* amount in words */
            doc.setFont("times", "italic").setFontSize(10).setTextColor(...INK);
            doc.text(`Amount in words: ${amountWords}`, 40, y, { maxWidth: 515 });
            y += 32;

            /* declaration */
            doc.setFont("times", "bold").setFontSize(10).text("Declaration", 40, y);
            doc.setFont("times", "normal").setFontSize(9.5);
            const lines = doc.splitTextToSize(DECLARATION, 515);
            doc.text(lines, 40, y + 14);
            y += 14 + lines.length * 12 + 40;

            /* signature */
            doc.setFont("times", "bold").setFontSize(10).text(`For ${ISSUER.name}`, 555, y, { align: "right" });
            doc.setLineWidth(0.5).line(405, y + 42, 555, y + 42);
            doc.setFont("times", "normal").text("Authorized Signatory", 555, y + 55, { align: "right" });

            /* footer */
            doc.setFontSize(8).setTextColor(110);
            doc.text("This is a computer-generated receipt and does not require a physical signature.", 297.5, 800, { align: "center" });

            doc.save(`off-contract-receipt-${receiptNo}.pdf`);
        } catch {
            toast.error("Unable to generate receipt. Please try again.");
        } finally {
            setDownloading(false);
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
                <>
                    {/* PAYMENT DETAILS */}
                    <div className="profile-form-card">
                        <div className="profile-form-header">
                            <h3>
                                <CheckCircle size={20} style={{ verticalAlign: "middle", marginRight: 8, color: "#16a34a" }} />
                                Payment Successful
                            </h3>
                            <p>Thank you! Your membership is active.</p>
                        </div>

                        <div className="profile-review-grid">
                            {paymentRows.map(([label, value]) => (
                                <div className="profile-review-item" key={label}>
                                    <span>{label}</span>
                                    <strong style={{ wordBreak: "break-all" }}>{value}</strong>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SUBSCRIPTION INFORMATION */}
                    <div className="profile-form-card">
                        <div className="profile-form-header">
                            <h3>Subscription Information</h3>
                            <p>Your current plan and access details.</p>
                        </div>

                        <div className="profile-review-grid">
                            {subscriptionRows.map(([label, value]) => (
                                <div className="profile-review-item" key={label}>
                                    <span>{label}</span>
                                    <strong>{value}</strong>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* OFF CONTRACT RECEIPT */}
                    <div className="profile-form-card">
                        <div className="profile-form-header">
                            <h3>Off Contract Payment Receipt</h3>
                            <p>Receipt No: {receiptNo}</p>
                        </div>

                        {receiptSections.map((section) => (
                            <div key={section.title} style={{ marginBottom: 20 }}>
                                <h4 style={{ margin: "0 0 10px", fontSize: 15 }}>{section.title}</h4>
                                <div className="profile-review-grid">
                                    {section.rows.map(([label, value]) => (
                                        <div className="profile-review-item" key={label}>
                                            <span>{label}</span>
                                            <strong style={{ wordBreak: "break-all" }}>{value}</strong>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="profile-form-actions">
                            <button
                                type="button"
                                className="profile-btn-primary"
                                style={{ background: "#fff", color: "#111827", border: "1px solid #111827" }}
                                onClick={() => setShowReceipt(true)}
                            >
                                <Eye size={18} /> View Receipt
                            </button>
                            <button
                                type="button"
                                className="profile-btn-primary"
                                onClick={handleDownloadReceipt}
                                disabled={downloading}
                            >
                                <Download size={18} /> {downloading ? "Preparing..." : "Download Receipt"}
                            </button>
                        </div>
                    </div>

                    {/* RECEIPT MODAL (paper-style document) */}
                    {showReceipt && (
                        <div
                            onClick={() => setShowReceipt(false)}
                            style={{
                                position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1000,
                                display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
                            }}
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                style={{ width: "100%", maxWidth: 794, maxHeight: "92vh", overflowY: "auto" }}
                            >
                                {/* toolbar (outside the paper) */}
                                <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 8 }}>
                                    <button type="button" className="profile-btn-primary" onClick={handleDownloadReceipt} disabled={downloading}>
                                        <Download size={16} /> {downloading ? "Preparing..." : "Download PDF"}
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Close"
                                        onClick={() => setShowReceipt(false)}
                                        style={{ background: "#fff", border: "none", borderRadius: 6, padding: "0 10px", cursor: "pointer" }}
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                {/* paper */}
                                <div
                                    style={{
                                        background: "#fff", color: "#111827", padding: "32px 36px",
                                        border: "4px double #111827",
                                        fontFamily: "Georgia, 'Times New Roman', serif",
                                    }}
                                >
                                    {/* header */}
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", paddingBottom: 16, borderBottom: "2px solid #111827" }}>
                                        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={ISSUER.logo}
                                                alt={ISSUER.name}
                                                style={{ height: 52, width: "auto" }}
                                                onError={(e) => { e.currentTarget.style.display = "none"; }}
                                            />
                                            <div>
                                                <div style={{ fontSize: 22, fontWeight: 700 }}>{ISSUER.name}</div>
                                                <div style={{ fontSize: 12, color: "#4b5563", lineHeight: 1.5 }}>
                                                    {issuerLines.map((l) => <div key={l}>{l}</div>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 1 }}>PAYMENT RECEIPT</div>
                                            {isPaid && (
                                                <div style={{
                                                    display: "inline-block", marginTop: 10, border: "2px solid #16a34a", color: "#16a34a",
                                                    padding: "2px 16px", fontWeight: 700, letterSpacing: 3, transform: "rotate(-6deg)",
                                                }}>
                                                    PAID
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* received from + payment details */}
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, margin: "20px 0" }}>
                                        <div>
                                            <div style={blockTitle}>Received From</div>
                                            <div style={{ fontSize: 14, lineHeight: 1.7 }}>
                                                {receivedFrom.map((l, i) => (
                                                    <div key={l} style={i === 0 ? { fontWeight: 700 } : undefined}>{l}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <div style={blockTitle}>Payment Details</div>
                                            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                                                <tbody>
                                                    {receiptMeta.map(([label, value]) => (
                                                        <tr key={label}>
                                                            <td style={{ ...cell, fontWeight: 700, width: "38%" }}>{label}</td>
                                                            <td style={{ ...cell, wordBreak: "break-all" }}>{value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* itemised table */}
                                    <div style={{ overflowX: "auto" }}>
                                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                                            <thead>
                                                <tr style={{ background: "#111827", color: "#fff", textAlign: "left" }}>
                                                    <th style={cell}>Description</th>
                                                    <th style={cell}>Billing Cycle</th>
                                                    <th style={cell}>Service Period</th>
                                                    <th style={{ ...cell, textAlign: "right" }}>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={cell}>{orNA(planName)} Subscription</td>
                                                    <td style={cell}>{billingCycleText}</td>
                                                    <td style={cell}>{servicePeriod}</td>
                                                    <td style={{ ...cell, textAlign: "right" }}>{fmtMoney(subAmount)}</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3} style={{ ...cell, textAlign: "right", fontWeight: 700 }}>Total Amount Paid</td>
                                                    <td style={{ ...cell, textAlign: "right", fontWeight: 700 }}>{fmtMoney(paidAmount)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p style={{ fontSize: 14, fontStyle: "italic", margin: "14px 0 24px" }}>
                                        Amount in words: {amountWords}
                                    </p>

                                    {/* declaration */}
                                    <div style={{ fontSize: 13, lineHeight: 1.6 }}>
                                        <strong>Declaration</strong>
                                        <p style={{ margin: "4px 0 0" }}>{DECLARATION}</p>
                                    </div>

                                    {/* signature */}
                                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 40 }}>
                                        <div style={{ textAlign: "center", minWidth: 200 }}>
                                            <div style={{ fontSize: 13, fontWeight: 700 }}>For {ISSUER.name}</div>
                                            <div style={{ borderBottom: "1px solid #111827", height: 44 }} />
                                            <div style={{ fontSize: 13, marginTop: 4 }}>Authorized Signatory</div>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: 28, paddingTop: 10, borderTop: "1px solid #d1d5db", textAlign: "center", fontSize: 11, color: "#6b7280" }}>
                                        This is a computer-generated receipt and does not require a physical signature.
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
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