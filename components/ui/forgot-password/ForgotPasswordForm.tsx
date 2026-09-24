"use client";

import { JSX, useState } from "react";
import toast from "react-hot-toast";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

import "@/styles/auth/password-reset.css";

export default function ForgotPasswordPage(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error("Email address is required");
            return;
        }

        try {
            setLoading(true);

            const loadingToast = toast.loading("Sending reset link...");

            const res = await fetch("/api/v1/auth/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            toast.dismiss(loadingToast);

            if (!res.ok) {
                toast.error(data.message || "Failed to send reset link");
                return;
            }

            toast.success(data.message || "Reset instructions sent");
            setSent(true);
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-reset-page">
            <div className="auth-reset-wrapper">
                <div className="auth-reset-left">
                    <div className="auth-reset-circle-one" />
                    <div className="auth-reset-circle-two" />

                    <div className="auth-reset-left-content">
                        <div>
                            <div className="auth-reset-star">✦</div>

                            <h1>Forgot Password?</h1>

                            <p>
                                No worries. Enter your registered email address and we will send
                                you a secure password reset link.
                            </p>
                        </div>

                        <div className="auth-reset-footer">
                            © 2026 OFC Tech India. All rights reserved.
                        </div>
                    </div>
                </div>

                <div className="auth-reset-right">
                    <div className="auth-reset-card">
                        <img src="/icons/logo.png" alt="Logo" className="auth-reset-logo" />

                        <div className="auth-reset-heading">
                            <h2>Reset your password</h2>

                            <p>
                                Enter your email address below. If the account exists, reset
                                instructions will be sent.
                            </p>
                        </div>

                        {sent ? (
                            <div className="auth-reset-success-box">
                                <h4>Check your email</h4>
                                <p>
                                    We have sent password reset instructions to your email address.
                                </p>

                                <Link href="/login" className="auth-reset-back-link">
                                    <ArrowLeft size={16} />
                                    Back to Login
                                </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="auth-reset-field">
                                    <Mail size={15} />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="auth-reset-submit"
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Send Reset Link"}
                                    <ArrowRight size={18} />
                                </button>

                                <div className="auth-reset-bottom-text">
                                    Remember your password?{" "}
                                    <Link href="/login">Back to Login</Link>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}