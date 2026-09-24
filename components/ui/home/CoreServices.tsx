"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};
import Link from "next/link";

// Array Data
const servicesData = [
  {
    id: 1,
    image: "/assets/img/all-images/services/1.jpeg",
    title: "Construction Materials",
    properties: "3 Properties",
    link: "/services#construction-items",
  },
  {
    id: 2,
    image: "/assets/img/all-images/services/2.jpeg",
    title: "B2B Network",
    properties: "5 Properties",
    link: "#",
  },
  {
    id: 3,
    image: "/assets/img/all-images/services/3.jpeg",
    title: "Insurance Support",
    properties: "2 Properties",
    link: "/services#insurance",
  },
  {
    id: 4,
    image: "/assets/img/all-images/services/4.jpeg",
    title: "Finance Solutions",
    properties: "4 Properties",
    link: "/services#finance",
  },
  {
    id: 5,
    image: "/assets/img/all-images/services/5.jpeg",
    title: "Equipment Rental",
    properties: "6 Properties",
    link: "/services#equipment-rental",
  },
];

export default function CoreServices() {
  return (
    <>
      <div
        className="others-selider-section"
        data-aos="fade-up"
        data-aos-duration={1000}
        style={{
          backgroundImage: "url('/assets/img/all-images/bg/bg1.png')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "50px",
          paddingBottom: "100px",
          zIndex: "0",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="project-heading heading1 space-margin60 text-center">
                <h5>Services</h5>
                <div className="space20" />
                <h2 className="text-anime-style-3">Core Services Highlights</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                {...swiperOptions}
                className="slider-section-boxarea owl-carousel"
              >
                {servicesData.map((item) => (
                  <SwiperSlide className="slider-boxarea" key={item.id}>
                    <div className="img1">
                      <img src={item.image} alt="housebox" />
                    </div>
                    <div className="conetnt-area">
                      <div className="text">
                        <Link
                          href={`${item.link}`}
                          style={{ fontSize: "20px" }}
                        >
                          {item.title}
                        </Link>
                        <div className="space12" />
                        {/* <p>3 Properties</p> */}
                      </div>
                      <div className="arrow">
                        <Link
                          href={`${item.link}`}
                          style={{ backgroundColor: "#cbcd30" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
