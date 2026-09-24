"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Mail, LockKeyhole, ArrowRight, User, Phone } from "lucide-react";

const RegisterForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "USER",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log("🔥 REGISTER FORM SUBMITTED");
    console.log("FORM DATA:", form);
    try {
      // LOADING
      const loadingToast = toast.loading("Creating account...");

      const response = await fetch("/api/v1/auth/register", {
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
        toast.success(data.message || "Registration successful");

        // REDIRECT
        window.location.href = "/dashboard";
      } else {
        toast.error(data.message || "Registration failed");
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
        background: "#f5f7f9",
      }}
    >
      <div
        className="row g-0 overflow-hidden"
        style={{
          borderRadius: "0px",
          background: "#fff",
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
          {/* CIRCLES */}
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
              {/* ICON */}
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
                Create Your Account 🚀
              </h1>

              {/* DESC */}
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.82)",
                  maxWidth: "480px",
                  marginBottom: "0",
                }}
              >
                Join our platform and start managing your properties, listings
                and business activities from one powerful dashboard.
              </p>
            </div>

            {/* FOOTER */}
            <div
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "14px",
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
                marginBottom: "40px",
              }}
            />

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              {/* FULL NAME */}
              <div className="mb-3 position-relative">
                <User
                  size={15}
                  style={{
                    position: "absolute",
                    left: "18px",
                    top: "20px",
                    color: "#888",
                  }}
                />

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="form-control"
                  required
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
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  required
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

              {/* PHONE */}
              <div className="mb-3 position-relative">
                <Phone
                  size={15}
                  style={{
                    position: "absolute",
                    left: "18px",
                    top: "20px",
                    color: "#888",
                  }}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="form-control"
                  required
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
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="form-control"
                  required
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
              {/* ROLE SELECTION */}
              <div className="mb-3">
                <div className="d-flex gap-3">
                  {/* SUPPLIER */}
                  <label
                    className="d-flex align-items-center gap-2"
                    style={{
                      border: "1px solid #e5e7eb",
                      padding: "12px 18px",
                      borderRadius: "12px",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="SUPPLIER"
                      checked={form.role === "SUPPLIER"}
                      onChange={handleChange}
                    />

                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "500",
                      }}
                    >
                      Supplier
                    </span>
                  </label>

                  {/* AGENCY */}
                  <label
                    className="d-flex align-items-center gap-2"
                    style={{
                      border: "1px solid #e5e7eb",
                      padding: "12px 18px",
                      borderRadius: "12px",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="AGENCY"
                      checked={form.role === "AGENCY"}
                      onChange={handleChange}
                    />

                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "500",
                      }}
                    >
                      Agency
                    </span>
                  </label>
                </div>
              </div>
              {/* BUTTON */}
              <button
                type="submit"
                className="w-100 border-0 d-flex align-items-center justify-content-center gap-2"
                style={{
                  height: "52px",
                  borderRadius: "12px",
                  background: "#c7c72b",
                  color: "#111",
                  fontSize: "15px",
                  fontWeight: "700",
                  transition: "0.3s",
                }}
              >
                Create Account
                <ArrowRight size={18} />
              </button>

              {/* LOGIN */}
              <div className="text-center mt-4">
                <p
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    marginBottom: "0",
                  }}
                >
                  Already have an account?{" "}
                  <a
                    href="/login"
                    style={{
                      color: "#0b7a75",
                      fontWeight: "700",
                      textDecoration: "none",
                    }}
                  >
                    Sign In
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

export default RegisterForm;
