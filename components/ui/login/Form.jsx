"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Mail, LockKeyhole, ArrowRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // LOADING TOAST
      const loadingToast = toast.loading("Signing in...");

      const response = await fetch("/api/v1/auth/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        credentials: "include",

        body: JSON.stringify(form),
      });

      const data = await response.json();

      // REMOVE LOADING
      toast.dismiss(loadingToast);

      // SUCCESS
      if (data.success) {
        toast.success(data.message || "Login successful");

        console.log("LOGIN DATA:", data);

        // REDIRECT
        window.location.href = "/dashboard";
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.log(error);

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
          {/* SOFT CIRCLES */}
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
              {/* SMALL LOGO */}
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

              {/* TITLE */}
              <h1
                style={{
                  fontSize: "38px",
                  lineHeight: "68px",
                  fontWeight: "700",
                  marginBottom: "25px",
                }}
              >
                Welcome Back 👋
              </h1>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.82)",
                  maxWidth: "480px",
                  marginBottom: "0",
                }}
              >
                Manage your account, properties and business connections easily
                from one modern dashboard.
              </p>
            </div>

            {/* FOOTER */}
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
            {/* LOGO */}
            <img
              src="/icons/logo.png"
              alt="Logo"
              style={{
                height: "45px",
                objectFit: "contain",
                marginBottom: "50px",
              }}
            />

            {/* HEADING */}
            <div className="mb-4">
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#111",
                  marginBottom: "12px",
                }}
              >
                Sign In
              </h2>

              <p
                style={{
                  color: "#666",
                  fontSize: "13px",
                  lineHeight: "22px",
                  marginBottom: "0",
                }}
              >
                Access your dashboard and continue managing your properties and
                listings.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              {/* EMAIL */}
              <div className="mb-3 position-relative">
                <Mail
                  size={15}
                  style={{
                    position: "absolute",
                    left: "18px",
                    top: "20px",
                    color: "#888",
                  }}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  style={{
                    height: "50px",
                    borderRadius: "12px",
                    paddingLeft: "50px",
                    border: "1px solid #e5e7eb",
                    fontSize: "13px",
                    boxShadow: "none",
                  }}
                />
              </div>

              {/* PASSWORD */}
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
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  style={{
                    height: "50px",
                    borderRadius: "12px",
                    paddingLeft: "50px",
                    border: "1px solid #e5e7eb",
                    fontSize: "13px",
                    boxShadow: "none",
                  }}
                />
              </div>

              {/* FORGOT */}
              <div className="text-end mb-4">
                <a
                  href="/forgot-password"
                  style={{
                    textDecoration: "none",
                    color: "#0b7a75",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Forgot Password?
                </a>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-100 border-0 d-flex align-items-center justify-content-center gap-2"
                style={{
                  height: "45px",
                  borderRadius: "12px",
                  background: "#c7c72b",
                  color: "#111",
                  fontSize: "16px",
                  fontWeight: "700",
                  transition: "0.3s",
                }}
              >
                Login Now
                <ArrowRight size={18} />
              </button>

              {/* DIVIDER */}
              <div
                className="text-center position-relative my-4"
                style={{
                  color: "#999",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    background: "#fff",
                    padding: "0 15px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Or continue with
                </span>

                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: "100%",
                    height: "1px",
                    background: "#eee",
                    zIndex: 1,
                  }}
                />
              </div>

              {/* REGISTER */}
              <div className="text-center mt-4">
                <p
                  style={{
                    color: "#666",
                    fontSize: "15px",
                    marginBottom: "0",
                  }}
                >
                  Don’t have an account?{" "}
                  <a
                    href="/register"
                    style={{
                      color: "#0b7a75",
                      fontWeight: "700",
                      textDecoration: "none",
                    }}
                  >
                    Create Account
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

export default LoginForm;
