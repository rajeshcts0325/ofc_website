"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { LockKeyhole, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const ResetPasswordPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const [form, setForm] = useState({
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!token) {
            toast.error("Invalid reset link");
            return;
        }

        try {
            const loadingToast = toast.loading("Resetting password...");

            const response = await fetch("/api/v1/auth/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token,
                    password: form.password,
                    confirmPassword: form.confirmPassword,
                }),
            });

            const data = await response.json();

            toast.dismiss(loadingToast);

            if (data.success) {
                toast.success(data.message || "Password reset successfully");
                setSuccess(true);

                setTimeout(() => {
                    router.push("/login");
                }, 1200);
            } else {
                toast.error(data.message || "Password reset failed");
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div
            className="min-vh-100 d-flex align-items-center"
            style={{
                background: "#004a95",
            }}
        >
            <div
                className="row g-0 overflow-hidden"
                style={{
                    borderRadius: "5px",
                    background: "#a60000",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
                    width: "100%",
                }}
            >
                {/* LEFT SIDE */}
                <div
                    className="col-lg-6 d-none d-lg-flex position-relative"
                    style={{
                        background:
                            "linear-gradient(135deg, #004d4d 0%, #006666 50%, #0b7a75 100%)",
                        padding: "70px",
                        minHeight: "695px",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "700px",
                            height: "700px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "50%",
                            right: "-250px",
                            bottom: "-300px",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: "500px",
                            height: "500px",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: "50%",
                            right: "-120px",
                            bottom: "-180px",
                        }}
                    />

                    <div
                        className="position-relative text-white d-flex flex-column justify-content-between"
                        style={{ zIndex: 2 }}
                    >
                        <div>
                            <div
                                className="mb-5 d-flex align-items-center justify-content-center"
                                style={{
                                    width: "70px",
                                    height: "70px",
                                    borderRadius: "18px",
                                    background: "rgba(255,255,255,0.12)",
                                    backdropFilter: "blur(8px)",
                                    fontSize: "32px",
                                    fontWeight: "700",
                                }}
                            >
                                ✦
                            </div>

                            <h1
                                style={{
                                    fontSize: "38px",
                                    lineHeight: "68px",
                                    fontWeight: "700",
                                    marginBottom: "25px",
                                }}
                            >
                                Create New Password 🔐
                            </h1>

                            <p
                                style={{
                                    fontSize: "13px",
                                    lineHeight: "22px",
                                    color: "rgba(255,255,255,0.82)",
                                    maxWidth: "480px",
                                    marginBottom: "0",
                                }}
                            >
                                Set a strong password to keep your account secure and continue
                                managing your business dashboard safely.
                            </p>
                        </div>

                        <div
                            style={{
                                color: "rgba(255,255,255,0.65)",
                                fontSize: "15px",
                            }}
                        >
                            © 2026 OFC Tech India. All rights reserved.
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div
                    className="col-lg-6 d-flex align-items-center justify-content-center"
                    style={{
                        padding: "60px 50px",
                        background: "#fff",
                    }}
                >
                    <div style={{ width: "100%", maxWidth: "430px" }}>
                        <img
                            src="/icons/logo.png"
                            alt="Logo"
                            style={{
                                height: "45px",
                                objectFit: "contain",
                                marginBottom: "50px",
                            }}
                        />

                        <div className="mb-4">
                            <h2
                                style={{
                                    fontSize: "32px",
                                    fontWeight: "700",
                                    color: "#111",
                                    marginBottom: "12px",
                                }}
                            >
                                Reset Password
                            </h2>

                            <p
                                style={{
                                    color: "#666",
                                    fontSize: "13px",
                                    lineHeight: "22px",
                                    marginBottom: "0",
                                }}
                            >
                                Enter your new password below. Make sure it is strong and easy
                                for you to remember.
                            </p>
                        </div>

                        {!token && (
                            <div
                                style={{
                                    background: "#fff5f5",
                                    border: "1px solid #fecaca",
                                    padding: "16px",
                                    borderRadius: "12px",
                                    marginBottom: "20px",
                                }}
                            >
                                <strong
                                    style={{
                                        display: "block",
                                        marginBottom: "6px",
                                        color: "#dc2626",
                                    }}
                                >
                                    Invalid reset link
                                </strong>

                                <span
                                    style={{
                                        fontSize: "13px",
                                        color: "#991b1b",
                                    }}
                                >
                                    Please request a new password reset link.
                                </span>
                            </div>
                        )}

                        {success && (
                            <div
                                style={{
                                    background: "#f0fdf4",
                                    border: "1px solid #22c55e",
                                    padding: "16px",
                                    borderRadius: "12px",
                                    marginBottom: "20px",
                                }}
                            >
                                <strong
                                    style={{
                                        display: "block",
                                        marginBottom: "6px",
                                        color: "#166534",
                                    }}
                                >
                                    Password updated
                                </strong>

                                <span
                                    style={{
                                        fontSize: "13px",
                                        color: "#166534",
                                    }}
                                >
                                    Redirecting you to login...
                                </span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 position-relative">
                                <LockKeyhole
                                    size={15}
                                    style={{
                                        position: "absolute",
                                        left: "18px",
                                        top: "20px",
                                        color: "#888",
                                    }}
                                />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="New Password"
                                    className="form-control"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    disabled={!token || success}
                                    style={{
                                        height: "50px",
                                        borderRadius: "12px",
                                        paddingLeft: "50px",
                                        paddingRight: "50px",
                                        border: "1px solid #e5e7eb",
                                        fontSize: "13px",
                                        boxShadow: "none",
                                    }}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: "absolute",
                                        right: "16px",
                                        top: "14px",
                                        border: "none",
                                        background: "transparent",
                                        color: "#888",
                                        cursor: "pointer",
                                    }}
                                >
                                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                                </button>
                            </div>

                            <div className="mb-4 position-relative">
                                <LockKeyhole
                                    size={15}
                                    style={{
                                        position: "absolute",
                                        left: "18px",
                                        top: "20px",
                                        color: "#888",
                                    }}
                                />

                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className="form-control"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    disabled={!token || success}
                                    style={{
                                        height: "50px",
                                        borderRadius: "12px",
                                        paddingLeft: "50px",
                                        paddingRight: "50px",
                                        border: "1px solid #e5e7eb",
                                        fontSize: "13px",
                                        boxShadow: "none",
                                    }}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    style={{
                                        position: "absolute",
                                        right: "16px",
                                        top: "14px",
                                        border: "none",
                                        background: "transparent",
                                        color: "#888",
                                        cursor: "pointer",
                                    }}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={17} />
                                    ) : (
                                        <Eye size={17} />
                                    )}
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={!token || success}
                                className="w-100 border-0 d-flex align-items-center justify-content-center gap-2"
                                style={{
                                    height: "45px",
                                    borderRadius: "12px",
                                    background: "#c7c72b",
                                    color: "#111",
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    transition: "0.3s",
                                    opacity: !token || success ? 0.6 : 1,
                                    cursor: !token || success ? "not-allowed" : "pointer",
                                }}
                            >
                                Reset Password
                                <ArrowRight size={18} />
                            </button>

                            <div className="text-center mt-4">
                                <p
                                    style={{
                                        color: "#666",
                                        fontSize: "15px",
                                        marginBottom: "0",
                                    }}
                                >
                                    Remember your password?{" "}
                                    <a
                                        href="/login"
                                        style={{
                                            color: "#0b7a75",
                                            fontWeight: "700",
                                            textDecoration: "none",
                                        }}
                                    >
                                        Back to Login
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;