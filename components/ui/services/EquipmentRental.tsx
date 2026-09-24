"use client";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect, useState } from "react";
import { BadgeCheck, BadgeX } from "lucide-react";


// Data for slides
const slides = [
  {
    img: "/assets/img/all-images/products/5.jpeg",
    status: "Available",
    location: "Jcb",
  },
  {
    img: "/assets/img/all-images/products/9.jpeg",
    status: "Not Available",
    location: "Crane",
  },
  {
    img: "/assets/img/all-images/products/10.jpeg",
    status: "Available",
    location: "Dumper Truck",
  },
  {
    img: "/assets/img/all-images/products/11.jpeg",
    status: "Available",
    location: "Excavator",
  },
  {
    img: "/assets/img/all-images/products/8.jpeg",
    status: "Not Available",
    location: "Crane",
  },
  {
    img: "/assets/img/all-images/products/7.jpeg",
    status: "Available",
    location: "Concrete Mixer",
  },
];

export default function EquipmentRental() {
  const swiperRef = useRef<any>(null); // Ref to control Swiper
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "52px",
    border: "1px solid #dbe2ea",
    borderRadius: "5px",
    padding: "0 16px",
    marginBottom: "18px",
    fontSize: "15px",
    outline: "none",
    background: "#fff",
    zIndex: 999
  };

  const openProductPopup = (productName: string) => {
    setSelectedProduct(productName);

    setFormData((prev) => ({
      ...prev,
      subject: `Equipment Rental Enquiry - ${productName}`,
      message: `I am interested in renting ${productName}. Please share availability, rental price, and terms.`,
    }));

    setIsModalShowing(true);
  };

  // Log Swiper instance when initialized for debugging
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      console.log("Swiper initialized:", swiperRef.current.swiper);
    }
  }, []);


  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/v1/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "EQUIPMENT_RENTAL",

          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: `Equipment Rental Enquiry - ${selectedProduct}`,
          message: formData.message,

          productName: selectedProduct,
        }),

      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert("Enquiry submitted successfully!");


      setIsModalShowing(false);
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Failed to submit enquiry");
      }
    } finally {
      setLoading(false);
    }



  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <>
      <div className="property-location-section-area sp1" id="equipment-rental">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="property-headeing heading1 space-margin60 text-center">
                <h5>Rental</h5>
                <div className="space20" />
                <h2 className="text-anime-style-3">Construction Equipment's</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              {/* FIRST SLIDER (Right -> Left) */}
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={4000}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 30 },
                  575: { slidesPerView: 2, spaceBetween: 30 },
                  767: { slidesPerView: 2, spaceBetween: 30 },
                  991: { slidesPerView: 3, spaceBetween: 30 },
                  1199: { slidesPerView: 5, spaceBetween: 30 },
                  1350: { slidesPerView: 5, spaceBetween: 30 },
                }}
                className="property-single-slider second-slider"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index} className="propety-single-boxarea">
                    <div className="img1 image-anime">
                      <img
                        src={slide.img}
                        alt="housebox"
                        style={{ height: "300px" }}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        background:
                          slide.status === "Available" ? "#16a34a" : "#dc2626",
                        color: "#fff",
                        padding: "4px 14px",
                        borderRadius: "5px",
                        fontSize: "10px",
                        fontWeight: "500",
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      }}
                    >
                      {slide.status === "Available" ? (
                        <BadgeCheck size={16} />
                      ) : (
                        <BadgeX size={16} />
                      )}

                      {slide.status}
                    </div>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        openProductPopup(slide.location);
                      }}
                      style={{
                        padding: "8px",
                        fontSize: "15px",
                      }}
                    >
                      {slide.location}
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* SPACE */}
              <div style={{ height: "30px" }} />

              {/* SECOND SLIDER (Left -> Right) */}
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: true, // IMPORTANT
                }}
                speed={4000}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 30 },
                  575: { slidesPerView: 2, spaceBetween: 30 },
                  767: { slidesPerView: 2, spaceBetween: 30 },
                  991: { slidesPerView: 3, spaceBetween: 30 },
                  1199: { slidesPerView: 5, spaceBetween: 30 },
                  1350: { slidesPerView: 5, spaceBetween: 30 },
                }}
                className="property-single-slider second-slider"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index} className="propety-single-boxarea">
                    <div className="img1 image-anime">
                      <img
                        src={slide.img}
                        alt="housebox"
                        style={{ height: "300px" }}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        background:
                          slide.status === "Available" ? "#16a34a" : "#dc2626",
                        color: "#fff",
                        padding: "4px 14px",
                        borderRadius: "5px",
                        fontSize: "10px",
                        fontWeight: "500",
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      }}
                    >
                      {slide.status === "Available" ? (
                        <BadgeCheck size={16} />
                      ) : (
                        <BadgeX size={16} />
                      )}

                      {slide.status}
                    </div>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        openProductPopup(slide.location);
                      }}
                      style={{
                        padding: "8px",
                        fontSize: "15px",
                      }}
                    >
                      {slide.location}
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {isModalShowing && (
          <div
            onClick={() => setIsModalShowing(false)}
            style={{
              position: "fixed",
              inset: 0,
              width: "100%",
              height: "100%",
              background: "rgba(15,23,42,0.7)",
              backdropFilter: "blur(5px)",
              zIndex: 999999,
              overflowY: "auto",
              padding: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "70px"
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "650px",
                background: "#ffffff",
                borderRadius: "7px",
                padding: "35px",
                position: "relative",
                boxShadow: "0px 15px 60px rgba(0,0,0,0.12)",
                zIndex: 1000000,
              }}
            >
              <button
                onClick={() => setIsModalShowing(false)}
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "none",
                  background: "#f1f5f9",
                  color: "#0f172a",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <h2
                  style={{
                    fontSize: "35px",
                    lineHeight: "52px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "10px",
                  }}
                >
                  Equipment Rental Enquiry
                </h2>

                <p style={{ color: "#64748b", margin: 0 }}>
                  Enquiry for: <strong>{selectedProduct}</strong>
                </p>
              </div>

              <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                <div className="col-lg-12">
                  <textarea
                    name="message"
                    placeholder="Write Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      height: "90px",
                      padding: "16px",
                      resize: "none",
                    }}
                  />
                </div>

                <div className="col-lg-12">
                  <button
                    type="submit"
                    disabled={loading}
                    className="theme-btn1"
                    style={{
                      width: "100%",
                      height: "54px",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: 600,
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? "Submitting..." : "Submit Rental Enquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
