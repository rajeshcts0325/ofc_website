"use client";
import Slider from "react-slick";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";
import Cta from "../cta/Cta";
import Testimonial1 from "@/components/sections/Testimonial1";
export default function AboutPageUi() {
  const settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    fade: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    focusOnSelect: true,
    infinite: true,
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="hero-inner-section-area-sidebar">
            <img
              src="/assets/img/all-images/hero/hero-img1.png"
              alt="Of Contractors"
              className="hero-img1"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="hero-header-area text-center">
                    <Link href="/">
                      Home{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                      </svg>{" "}
                      About Us
                    </Link>
                    <div className="space24" />
                    <h1>About Us</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===== HERO AREA ENDS =======*/}

        {/*===== ABOUT AREA STARTS =======*/}
        <div className="about1-section-area sp1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-images-area">
                  {/* <div className="img2 image-anime reveal">
                      <img
                        src="/assets/img/all-images/about/1.jpg"
                        alt="Of Contractors"
                      />
                    </div> */}
                  <div className="img1 image-anime reveal">
                    <img
                      src="/assets/img/all-images/about/1.webp"
                      alt="Of Contractors"
                    />
                  </div>
                  {/* <div className="author-img aniamtion-key-1">
                      <h3>Our Happy Customer</h3>
                      <div className="space18" />
                      <img
                        src="/assets/img/all-images/others/author-img1.png"
                        alt="Of Contractors"
                      />
                    </div> */}
                </div>
              </div>
              <div className="col-lg-1" />
              <div className="col-lg-5">
                <div className="about-heading heading1">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                    About OfContractors
                  </h5>
                  <div className="space20" />
                  <h2 className="text-anime-style-3">
                    {" "}
                    Trusted Contractors for Every Business
                  </h2>
                  <div className="space18" />
                  <p
                    data-aos="fade-left"
                    data-aos-duration={900}
                    style={{ textAlign: "justify" }}
                  >
                    At OfContractors, we help businesses connect with reliable
                    contractors, skilled professionals, and trusted service
                    providers. Our platform simplifies project collaboration,
                    making it easier to find the right expertise, grow
                    business networks, and complete projects with confidence.
                  </p>
                  <div className="space32" />
                  <div
                    className="counter-boxes"
                    data-aos="fade-left"
                    data-aos-duration={1000}
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-6">
                        <div className="counter-boxarea text-center">
                          <h2>
                            <CounterUp className="counter">10</CounterUp>K
                          </h2>
                          <div className="space12" />
                          <p>Homes Sold</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-6">
                        <div className="counter-boxarea text-center">
                          <h2>
                            <CounterUp className="counter">9</CounterUp>K
                          </h2>
                          <div className="space12" />
                          <p>Happy Client</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-6">
                        <div className="space20 d-md-none d-block" />
                        <div className="counter-boxarea text-center">
                          <h2>
                            <CounterUp className="counter">98</CounterUp>%
                          </h2>
                          <div className="space12" />
                          <p>Satisfaction Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space32" />
                  <div
                    className="btn-area1"
                    data-aos="fade-left"
                    data-aos-duration={1100}
                  >
                    <Link
                      href="/services#construction-items"
                      className="theme-btn1"
                      style={{ marginRight: "10px" }}
                    >
                      All Listings{" "}
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
                    <Link href="/contact-us" className="theme-btn1">
                      Get In Touch{" "}
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
        {/*===== ABOUT AREA ENDS =======*/}
        {/*===== OTHERS AREA STARTS =======*/}
        <div
          className="mission-section-area sp1"
          style={{
            backgroundImage: "url(assets/img/all-images/bg/bg1.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto">
                <div className="heading1 text-center space-margin60">
                  <h5>Our Mission</h5>
                  <div className="space20" />
                  <h2>Our Mission &amp; Vision</h2>
                </div>
                <div className="space100 d-lg-block d-none" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div className="vission-mission-box">
                  <h3>Trusted Contractor Solutions</h3>

                  <div className="space24" />

                  <p>
                    OfContractors connects businesses with reliable
                    contractors, construction services, and equipment
                    providers for every project need.
                  </p>

                  <div className="space24" />

                  <h4>Our Mission</h4>

                  <div className="space16" />

                  <p>
                    To deliver trusted construction solutions and build strong
                    business partnerships.
                  </p>

                  <div className="space24" />

                  <h4>Our Vision</h4>

                  <div className="space16" />

                  <p>
                    To become a leading platform for contractors, construction
                    services, and industry support.
                  </p>

                  <div className="space32" />

                  <div className="btn-area1">
                    <Link href="/services" className="theme-btn1">
                      Explore Services{" "}
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
              <div className="col-lg-5">
                <div className="img1">
                  <img
                    src="/assets/img/all-images/about/4.webp"
                    alt="Of Contractors"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===== OTHERS AREA ENDS =======*/}

        {/*===== TEAM AREA STARTS =======*/}
        <div className="about1-section-area sp1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-images-area">
                  <div className="img1 image-anime reveal" style={{ paddingBottom: "20px" }}>
                    <img
                      src="/assets/img/all-images/about/ceo.jpeg"
                      alt="OfContractors Founders"
                      style={{
                        width: "500px",
                        maxWidth: "100%",
                        height: "550px",
                        borderRadius: "12px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-1" /> */}

              <div className="col-lg-5">
                <div className="about-heading heading1">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                    Founders of OfContractors
                  </h5>

                  <div className="space20" />

                  <h3>
                    A Message from Our CEO                  </h3>

                  <div className="space18" />

                  <p
                    data-aos="fade-left"
                    data-aos-duration={900}
                    style={{ textAlign: "justify" }}
                  >
                    "Our vision is to rewrite the blueprint of the construction industry.
                    By uniting elite building talent with an intelligent material supply chain, we are eliminating the friction, uncertainty, and fragmentation that have slowed progress for decades.

                  </p>

                  <div className="space18" />

                  <p
                    data-aos="fade-left"
                    data-aos-duration={950}
                    style={{ textAlign: "justify" }}
                  >
                    We are not just building a marketplace; we are engineering the foundational ecosystem that empowers contractors to scale and enables clients to build their future with absolute confidence."
                  </p>

                  <div className="space32" />

                  <div
                    data-aos="fade-left"
                    data-aos-duration={1050}
                    style={{
                      marginBottom: "20px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: "25px",
                        fontWeight: "700",
                        color: "#1f2038",
                        marginBottom: "5px",
                        lineHeight: "1.2",
                      }}
                    >
                      S. Kanhu Ranjan Prusty
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#666",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Chief Executive Officer
                    </p>
                  </div>

                  <div
                    className="btn-area1"
                    data-aos="fade-left"
                    data-aos-duration={1100}
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== TEAM AREA ENDS =======*/}

          {/*===== TESTIMONIAL AREA STARTS =======*/}
          <Testimonial1 />
          {/*===== TESTIMONIAL AREA ENDS =======*/}

          {/*===== ABOUT AREA STARTS =======*/}
          <div className="about2-section-area sp1">
            <div className="container">
              <div className="row align-items-start">
                {/* Left Side */}
                <div className="col-lg-6">
                  <div className="about-heading heading1">
                    <h5 data-aos="fade-left" data-aos-duration={800}>
                      FAQ'S
                    </h5>

                    <div className="space20" />

                    <h2 className="text-anime-style-3">
                      Frequently Asked Questions
                    </h2>

                    <div className="space18" />

                    <p data-aos="fade-left" data-aos-duration={900}>
                      Find answers to common questions about our contractor
                      services, construction materials, equipment rentals, and
                      project support solutions.
                    </p>

                    <div className="accordion" id="accordionLeft">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            What services does OfContractors provide?
                          </button>
                        </h2>

                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse "
                          data-bs-parent="#accordionLeft"
                        >
                          <div className="accordion-body">
                            <p>
                              We provide contractor services, construction
                              materials, equipment rentals, and project support
                              solutions.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Do you Ofer construction equipment rentals?
                          </button>
                        </h2>

                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionLeft"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes, we provide rental solutions for cranes,
                              mixers, excavators, and other construction
                              equipment.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Can I request construction materials online?
                          </button>
                        </h2>

                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionLeft"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes, you can explore materials, check
                              specifications, and submit inquiry requests
                              directly through our platform.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Side */}
                <div className="col-lg-6">
                  <div className="img1">
                    <img
                      src="/assets/img/all-images/about/6.webp"
                      alt="Of Contractors"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== ABOUT AREA ENDS =======*/}

          <div className="space100 d-lg-block d-none" />
          <div className="space50 d-lg-none d-block" />
          {/*===== CTA AREA STARTS =======*/}
          <Cta />
        </div>
      </Layout>
    </>
  );
}
