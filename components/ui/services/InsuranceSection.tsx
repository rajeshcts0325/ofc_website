"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function InsuranceSection() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/v1/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,

          subject: "Insurance Quote Request",

          formType: "INSURANCE",

          sourcePage: window.location.pathname,

          sourceWebsite: window.location.origin,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      toast.success("Insurance enquiry submitted");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit enquiry");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div
        id="insurance"
        style={{
          backgroundImage: "url('/assets/img/all-images/bg/bg1.png')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="contact-inner-section sp1">
          <div className="container">
            <div className="row align-items-start">
              {/* LEFT CONTENT */}
              <div className="col-lg-7">
                <div className="heading1">
                  <h5>Construction Insurance</h5>

                  <div className="space24" />

                  <h2>Construction Insurance Services</h2>

                  <div className="space24" />

                  <p style={{ textAlign: "justify" }}>
                    Protect your investments, workforce, and liabilities with
                    tailored insurance packages designed specifically for the
                    construction sector.
                  </p>
                </div>

                <div className="space40" />

                {/* INSURANCE CARDS */}
                <div className="row">
                  {/* CARD 1 */}
                  <div className="col-md-6 cards-section-wrapper">
                    <div className="insurance-card-area">
                      <div className="icon">
                        <i className="fa-solid fa-building-shield"></i>
                      </div>

                      <div className="content">
                        <h4>Project Insurance</h4>
                        <p>Covers damage to works, materials, and equipment.</p>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="col-md-6 cards-section-wrapper">
                    <div className="insurance-card-area">
                      <div className="icon">
                        <i className="fa-solid fa-user-shield"></i>
                      </div>

                      <div className="content">
                        <h4>Worker Insurance</h4>
                        <p>Medical and compensation for site workers.</p>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="col-md-6 cards-section-wrapper">
                    <div className="insurance-card-area">
                      <div className="icon">
                        <i className="fa-solid fa-scale-balanced"></i>
                      </div>

                      <div className="content">
                        <h4>Liability Coverage</h4>
                        <p>Third-party damage and legal protection.</p>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4 */}
                  <div className="col-md-6 cards-section-wrapper">
                    <div className="insurance-card-area">
                      <div className="icon">
                        <i className="fa-solid fa-truck-fast"></i>
                      </div>

                      <div className="content">
                        <h4>Transit Insurance</h4>
                        <p>Protection during material transport.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div className="col-lg-5">
                <div className="contact-form-area">
                  <h4>Request Insurance Quote</h4>

                  <form className="row" onSubmit={handleSubmit}>
                    <div className="col-lg-12">
                      <div className="input-area">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="input-area">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="input-area">
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="input-area">
                        <textarea
                          placeholder="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="input-area">
                        <button
                          type="submit"
                          disabled={loading}
                          className="theme-btn1"
                          style={{
                            opacity: loading ? 0.7 : 1,
                            cursor: loading ? "not-allowed" : "pointer",
                          }}
                        >
                          {loading ? "Submitting..." : "Send Now"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
