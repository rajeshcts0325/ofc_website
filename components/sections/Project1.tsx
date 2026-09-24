"use client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Project1() {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    enquiryType: "",
    message: "",
  });

  const openEnquiryPopup = (type: string, subject: string) => {
    setFormData((prev) => ({
      ...prev,
      enquiryType: type,
    }));

    setShowEnquiryPopup(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
        enquiryType: "",
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
      <div className="project1-section-area sp2" style={{ zIndex: "0", }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="project-heading heading1 space-margin60 text-center">
                <h5>Contact Us</h5>
                <div className="space20" />
                <h2 className="text-anime-style-3">Get in touch with Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={800}
            >
              <div
                className="project-featured-box"
                style={{ borderRadius: "5px" }}
              >
                <div className="img1">
                  <img
                    src="/assets/img/all-images/home/contact/1.png"
                    alt="housebox"
                  />
                </div>
                <div className="space40" />
                <div className="btn-area">
                  <Link
                    href="/sidebar-grid"
                    style={{
                      fontSize: "16px",
                      padding: "8px 30px",
                      borderRadius: "5px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      openEnquiryPopup("general", "General Enquiries");
                    }}
                  >
                    General Enquiries
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={1000}
            >
              <div
                className="project-featured-box"
                style={{ borderRadius: "5px" }}
              >
                <div className="img1">
                  <img
                    src="/assets/img/all-images/home/contact/4.png"
                    alt="housebox"
                  />
                </div>
                <div className="space40" />
                <div className="btn-area">
                  <Link
                    href="/sidebar-grid"
                    style={{
                      fontSize: "16px",
                      padding: "8px 30px",
                      borderRadius: "5px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      openEnquiryPopup("supplier", "Supplier Enquiries");
                    }}
                  >
                    Supplier Enquiries
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={1200}
            >
              <div
                className="project-featured-box"
                style={{ borderRadius: "5px" }}
              >
                <div className="img1">
                  <img
                    src="/assets/img/all-images/home/contact/1.png"
                    alt="housebox"
                  />
                </div>
                <div className="space40" />
                <div className="btn-area">
                  <Link
                    href="/sidebar-grid"
                    style={{
                      fontSize: "16px",
                      padding: "8px 30px",
                      borderRadius: "5px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      openEnquiryPopup("partner", "Partner Enquiries");
                    }}
                  >
                    Partner Enquiries
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={1200}
            >
              <div
                className="project-featured-box"
                style={{ borderRadius: "5px" }}
              >
                <div className="img1">
                  <img
                    src="/assets/img/all-images/home/contact/2.png"
                    alt="housebox"
                  />
                </div>
                <div className="space40" />
                <div className="btn-area">
                  <Link
                    href="/sidebar-grid"
                    style={{
                      fontSize: "16px",
                      padding: "8px 30px",
                      borderRadius: "5px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      openEnquiryPopup("investor", "Investor Relations");
                    }}
                  >
                    Investor Relations
                  </Link>
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
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
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
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
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

              {/* SELECT */}
              <div className="col-lg-12">
                <select
                  value={formData.enquiryType}
                  name="enquiryType"
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
                    backgroundColor: "#fff",
                    color: "#64748b",
                    cursor: "pointer",
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='4 7 9 12 14 7'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 15px center",
                    paddingRight: "45px",
                  }}
                >
                  <option value="" disabled>
                    Select Enquiry Type
                  </option>
                  <option value="general">General Enquiries</option>
                  <option value="supplier">Supplier Enquiries</option>
                  <option value="partner">Partner Enquiries</option>
                  <option value="investor">Investor Enquiries</option>
                </select>
              </div>
              {/* SUBJECT */}
              <div className="col-lg-12">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
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
                    height: window.innerWidth < 768 ? "50px" : "70px",
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
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
