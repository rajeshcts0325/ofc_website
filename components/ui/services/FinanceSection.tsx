"use client";
import { useState } from "react";
import toast from "react-hot-toast";
export default function FinanceSection() {
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
          subject: "Finance Application",
          formType: "FINANCE",
          sourcePage: window.location.pathname,
          sourceWebsite: window.location.origin,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      toast.success("Finance application submitted");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit finance application");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="finance">
        <div className="contact-inner-section sp1">
          <div className="container">
            <div className="row align-items-start">
              {/* RIGHT FORM */}
              <div className="col-lg-5">
                <div className="contact-form-area">
                  <h4>Finance Application</h4>

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
              {/* LEFT CONTENT */}
              <div className="col-lg-7">
                <div className="heading1">
                  <h5>Financial Support</h5>

                  <div className="space24" />

                  <h2>Empowering Your Growth</h2>

                  <div className="space24" />

                  <p style={{ textAlign: "justify" }}>
                    Flexible financing solutions designed to support
                    contractors, developers, and infrastructure projects with
                    fast approvals and reliable funding.
                  </p>
                </div>

                <div className="space40" />

                {/* INSURANCE CARDS */}
                <div className="row">
                  {/* CARD 1 */}
                  <div className="col-md-6 cards-section-wrapper">
                    <div className="insurance-card-area">
                      <div className="icon">
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                      </div>

                      <div className="content">
                        <h4>Project Financing</h4>
                        <p>Flexible funding for large construction projects.</p>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="col-md-6 cards-section-wrapper">
                    <div className="insurance-card-area">
                      <div className="icon">
                        <i className="fa-solid fa-helmet-safety"></i>
                      </div>

                      <div className="content">
                        <h4>Contractor Financing</h4>
                        <p>Quick capital for labor and material expenses.</p>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="col-md-6 cards-section-wrapper">
                    <div className="insurance-card-area">
                      <div className="icon">
                        <i className="fa-solid fa-wallet"></i>
                      </div>

                      <div className="content">
                        <h4>Working Capital</h4>
                        <p>Maintain smooth cash flow for daily operations.</p>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4 */}
                  <div className="col-md-6 cards-section-wrapper">
                    <div className="insurance-card-area">
                      <div className="icon">
                        <i className="fa-solid fa-truck-monster"></i>
                      </div>

                      <div className="content">
                        <h4>Equipment Loan</h4>
                        <p>Easy financing for machinery and heavy equipment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
