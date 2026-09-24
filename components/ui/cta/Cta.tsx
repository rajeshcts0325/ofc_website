"use client";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

const Cta = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
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
          formType: "ENQUIRY",
          sourcePage: window.location.pathname,
          sourceWebsite: window.location.origin,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      toast.success("Enquiry submitted successfully");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setShowEnquiryPopup(false);
    } catch (error) {
      toast.error("Failed to submit enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="cta1-section-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="cta-bg-area"
                style={{
                  backgroundImage: "url(assets/img/all-images/bg/cta-bg1.png)",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  zIndex: "0",
                }}
              >
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="cta-header">
                      <h2
                        className="text-anime-style-3"
                        style={{ fontSize: "34px" }}
                      >
                        Ready to Take Your Business to the Next Level?
                      </h2>
                      <div className="space16" />
                      <p data-aos="fade-left" data-aos-duration={1000}>
                        Join thousands of businesses growing with OfContractor.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2" />
                  <div
                    className="col-lg-5"
                    data-aos="zoom-in"
                    data-aos-duration={1000}
                  >
                    <div className="btn-area1 text-center">
                      <Link
                        href="/sidebar-grid"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowEnquiryPopup(true);
                        }}
                        className="theme-btn1"
                        style={{ marginRight: "10px" }}
                      >
                        Join as a Supllier{" "}
                        <span className="arrow1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            fill="currentColor"
                          >
                            <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                          </svg>
                        </span>
                        <span className="arrow2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            fill="currentColor"
                          >
                            <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                          </svg>
                        </span>
                      </Link>
                      <Link
                        href="/sidebar-grid"
                        className="theme-btn1"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowEnquiryPopup(true);
                        }}
                      >
                        Join as a Contractor{" "}
                        <span className="arrow1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            fill="currentColor"
                          >
                            <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                          </svg>
                        </span>
                        <span className="arrow2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            fill="currentColor"
                          >
                            <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SIMPLE ENQUIRY POPUP */}
      {showEnquiryPopup && (
        <div
          onClick={() => setShowEnquiryPopup(false)}
          style={{
            position: "fixed",
            inset: "0",
            width: "100%",
            height: "100%",
            background: "rgba(15,23,42,0.7)",
            backdropFilter: "blur(5px)",
            zIndex: "999999",
            overflowY: "auto",
            padding: window.innerWidth < 768 ? "15px" : "30px",
            display: "flex",
            alignItems: window.innerWidth < 768 ? "flex-start" : "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "650px",
              background: "#ffffff",
              borderRadius: window.innerWidth < 768 ? "7px" : "7px",
              padding: window.innerWidth < 768 ? "22px 16px" : "35px",
              position: "relative",
              boxShadow: "0px 15px 60px rgba(0,0,0,0.12)",
              marginTop: window.innerWidth < 768 ? "0px" : "0px",
              marginBottom: window.innerWidth < 768 ? "40px" : "0px",
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowEnquiryPopup(false)}
              style={{
                position: "absolute",
                top: window.innerWidth < 768 ? "12px" : "18px",
                right: window.innerWidth < 768 ? "12px" : "18px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                background: "#f1f5f9",
                color: "#0f172a",
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* HEADING */}
            <div
              style={{
                textAlign: "center",
                marginBottom: window.innerWidth < 768 ? "22px" : "30px",
              }}
            >
              <h2
                style={{
                  fontSize: window.innerWidth < 768 ? "20px" : "35px",
                  lineHeight: window.innerWidth < 768 ? "38px" : "52px",
                  fontWeight: "700",
                  color: "#0f172a",
                  marginBottom: "10px",
                }}
              >
                Enquiry Form
              </h2>

              <p
                style={{
                  fontSize: window.innerWidth < 768 ? "12px" : "16px",
                  lineHeight: window.innerWidth < 768 ? "24px" : "28px",
                  color: "#64748b",
                  margin: "0",
                  padding: window.innerWidth < 768 ? "0 10px" : "0",
                }}
              >
                Fill out the form and our team will contact you shortly.
              </p>
            </div>

            {/* FORM */}
            <form className="row" onSubmit={handleSubmit}>
              {/* FIRST NAME */}
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    height: window.innerWidth < 768 ? "35px" : "52px",
                    border: "1px solid #dbe2ea",
                    borderRadius: "5px",
                    padding: "0 16px",
                    marginBottom: "18px",
                    fontSize: "15px",
                    outline: "none",
                    background: "#fff",
                  }}
                />
              </div>

              {/* LAST NAME */}
              <div className="col-md-6">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    height: window.innerWidth < 768 ? "35px" : "52px",
                    border: "1px solid #dbe2ea",
                    borderRadius: "5px",
                    padding: "0 16px",
                    marginBottom: "18px",
                    fontSize: "15px",
                    outline: "none",
                    background: "#fff",
                  }}
                />
              </div>

              {/* EMAIL */}
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    height: window.innerWidth < 768 ? "35px" : "52px",
                    border: "1px solid #dbe2ea",
                    borderRadius: "5px",
                    padding: "0 16px",
                    marginBottom: "18px",
                    fontSize: "15px",
                    outline: "none",
                    background: "#fff",
                  }}
                />
              </div>

              {/* PHONE */}
              <div className="col-md-6">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    height: window.innerWidth < 768 ? "35px" : "52px",
                    border: "1px solid #dbe2ea",
                    borderRadius: "5px",
                    padding: "0 16px",
                    marginBottom: "18px",
                    fontSize: "15px",
                    outline: "none",
                    background: "#fff",
                  }}
                />
              </div>

              {/* SUBJECT */}
              <div className="col-lg-12">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    height: window.innerWidth < 768 ? "35px" : "52px",
                    border: "1px solid #dbe2ea",
                    borderRadius: "5px",
                    padding: "0 16px",
                    marginBottom: "18px",
                    fontSize: "15px",
                    outline: "none",
                    background: "#fff",
                  }}
                />
              </div>

              {/* MESSAGE */}
              <div className="col-lg-12">
                <textarea
                  placeholder="Write Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    height: window.innerWidth < 768 ? "50px" : "90px",
                    border: "1px solid #dbe2ea",
                    borderRadius: "5px",
                    padding: "16px",
                    marginBottom: "22px",
                    fontSize: "15px",
                    outline: "none",
                    resize: "none",
                    background: "#fff",
                  }}
                />
              </div>

              {/* BUTTON */}
              <div className="col-lg-12">
                <button
                  type="submit"
                  disabled={loading}
                  className="theme-btn1"
                  style={{
                    width: "100%",
                    height: window.innerWidth < 768 ? "30px" : "54px",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: window.innerWidth < 768 ? "15px" : "16px",
                    fontWeight: "600",
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}

                  {!loading && (
                    <>
                      <span className="arrow1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={20}
                          height={20}
                          fill="currentColor"
                        >
                          <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                        </svg>
                      </span>

                      <span className="arrow2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={20}
                          height={20}
                          fill="currentColor"
                        >
                          <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                        </svg>
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Cta;
