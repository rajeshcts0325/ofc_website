"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Slider from "react-slick";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "@/styles/product-details.css";
import Cta from "../cta/Cta";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
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
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};
const swiperOptions2 = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
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
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export default function ProductDetails() {
  const settings1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
  };
  const settings2 = {
    slidesToShow: 4,
    slidesToScroll: 4,
    items: 15,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
  };
  const propertyImages = [
    "/assets/img/all-images/products/5.jpeg",
    "/assets/img/all-images/products/8.jpeg",
    "/assets/img/all-images/products/10.jpeg",
    "/assets/img/all-images/products/11.jpeg",
    "/assets/img/all-images/products/9.jpeg",
    "/assets/img/all-images/products/5.jpeg",
    "/assets/img/all-images/products/8.jpeg",
  ];
  const [selectedImage, setSelectedImage] = useState(propertyImages[0]);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="hero-inner-section-area-sidebar">
            <img
              src="/assets/img/all-images/hero/hero-img1.png"
              alt="housebox"
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
                        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                      </svg>{" "}
                      Listing{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                      </svg>{" "}
                      Product Deatils
                    </Link>
                    <div className="space24" />
                    <h1>Product Deatils</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== HERO AREA ENDS =======*/}

          {/*===== PROPERTIES AREA STARTS =======*/}
          <div className="properties-details4-area sp1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="details-siderbar">
                        <div className="content-area">
                          {/* PRODUCT IMAGE GALLERY */}
                          <div className="product-gallery">
                            {/* MAIN IMAGE */}
                            <div className="main-image">
                              <img src={selectedImage} alt="property" />
                            </div>

                            {/* THUMBNAILS */}
                            <div className="thumbnail-wrapper">
                              {propertyImages.map((img, index) => (
                                <div
                                  key={index}
                                  className={`thumbnail-box ${
                                    selectedImage === img ? "active-thumb" : ""
                                  }`}
                                  onClick={() => setSelectedImage(img)}
                                >
                                  <img src={img} alt="thumb" />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space24" />
                          <div className="content heading2">
                            <h2>Excavator</h2>
                            <ul>
                              <li>
                                <Link href="#">$8,500</Link>
                              </li>
                              <li>
                                <Link href="#">/For Sale</Link>
                              </li>
                            </ul>
                          </div>

                          <div className="list-area">
                            <div className="list">
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reprehenderit error
                                repellendus dolorem! Explicabo nobis sed omnis.
                                Architecto voluptatem ullam quae cum eaque
                                omnis.
                              </p>
                              <div className="space24" />
                              <ul>
                                <li>Features:</li>
                                <li>
                                  <Link href="#">
                                    <img
                                      src="/assets/img/icons/bed1.svg"
                                      alt="housebox"
                                    />
                                    x20 <span> | </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <img
                                      src="/assets/img/icons/bath1.svg"
                                      alt="housebox"
                                    />
                                    x30 <span> | </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <img
                                      src="/assets/img/icons/sqare1.svg"
                                      alt="housebox"
                                    />
                                    1200 sq
                                  </Link>
                                </li>
                              </ul>
                              <div className="space24" />
                              <ul>
                                <li>Location:</li>
                                <li>
                                  <Link href="#">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
                                    </svg>{" "}
                                    Los Angeles City, CA, USA
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <ul className="share">
                              <li>
                                <Link href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                  >
                                    <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" />
                                  </svg>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                  >
                                    <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                  </svg>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="space32" />

                        <div className="bg1">
                          <h3>Diamond Apartment Property Amenities</h3>
                          <div className="space12" />
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="list-box">
                                <div className="icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                  >
                                    <g clipPath="url(#clip0_2294_3357)">
                                      <path
                                        d="M13 31.0054H5C4.46957 31.0054 3.96086 30.7947 3.58579 30.4196C3.21071 30.0445 3 29.5358 3 29.0054V3.00537C3 2.47494 3.21071 1.96623 3.58579 1.59116C3.96086 1.21608 4.46957 1.00537 5 1.00537H19C19.5304 1.00537 20.0391 1.21608 20.4142 1.59116C20.7893 1.96623 21 2.47494 21 3.00537V10"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M7.49997 15.5053C7.40086 15.5053 7.30398 15.5348 7.22164 15.59C7.1393 15.6452 7.07523 15.7236 7.03754 15.8152C6.99986 15.9069 6.99028 16.0077 7.01001 16.1049C7.02973 16.202 7.07789 16.2911 7.14835 16.3608C7.21881 16.4305 7.3084 16.4777 7.40574 16.4964C7.50308 16.5151 7.60377 16.5044 7.69504 16.4657C7.7863 16.4271 7.86402 16.3621 7.91831 16.2792C7.97261 16.1963 8.00103 16.0991 7.99997 16C7.99997 15.8674 7.94729 15.7402 7.85352 15.6464C7.75976 15.5527 7.63258 15.5 7.49997 15.5"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M27 21.0054H19C17.8954 21.0054 17 21.9008 17 23.0054V29.0054C17 30.1099 17.8954 31.0054 19 31.0054H27C28.1046 31.0054 29 30.1099 29 29.0054V23.0054C29 21.9008 28.1046 21.0054 27 21.0054Z"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M19 21.0054V19.0054C19 17.9445 19.4214 16.9271 20.1716 16.1769C20.9217 15.4268 21.9391 15.0054 23 15.0054C24.0609 15.0054 25.0783 15.4268 25.8284 16.1769C26.5786 16.9271 27 17.9445 27 19.0054V21.0054"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M23 25.5054C22.9011 25.5054 22.8044 25.5347 22.7222 25.5896C22.64 25.6446 22.5759 25.7227 22.5381 25.814C22.5002 25.9054 22.4903 26.0059 22.5096 26.1029C22.5289 26.1999 22.5765 26.289 22.6464 26.3589C22.7164 26.4289 22.8055 26.4765 22.9025 26.4958C22.9994 26.5151 23.1 26.5052 23.1913 26.4673C23.2827 26.4295 23.3608 26.3654 23.4157 26.2832C23.4707 26.2009 23.5 26.1043 23.5 26.0054C23.5 25.8728 23.4473 25.7456 23.3536 25.6518C23.2598 25.558 23.1326 25.5054 23 25.5054Z"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_2294_3357">
                                        <rect
                                          width={32}
                                          height={32}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                                <div className="text">
                                  <p>Lock On Bedroom </p>
                                </div>
                              </div>
                              <div className="list-box">
                                <div className="icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                  >
                                    <g clipPath="url(#clip0_2294_3387)">
                                      <path
                                        d="M14.9995 22.9998L10.7329 18.5545C10.3595 18.1796 10.1136 17.6968 10.0298 17.1745C9.94609 16.6521 10.0288 16.1166 10.2662 15.6438C10.4447 15.2864 10.7057 14.9766 11.0275 14.7399C11.3493 14.5032 11.7228 14.3464 12.1172 14.2825C12.5115 14.2185 12.9155 14.2493 13.2956 14.3721C13.6757 14.495 14.0212 14.7065 14.3035 14.9892L14.9995 15.6852L15.6955 14.9892C15.9779 14.7065 16.3233 14.495 16.7035 14.3721C17.0836 14.2493 17.4875 14.2185 17.8819 14.2825C18.2762 14.3464 18.6497 14.5032 18.9715 14.7399C19.2934 14.9766 19.5543 15.2864 19.7329 15.6438C19.9696 16.1171 20.0514 16.653 19.9667 17.1754C19.882 17.6977 19.6351 18.1802 19.2609 18.5545L14.9995 22.9998Z"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M3 12V30"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M26.9961 19.9998H30.0001C30.2648 19.9998 30.5188 19.8948 30.7063 19.7078C30.8937 19.5209 30.9994 19.2672 31.0001 19.0025C31.0108 13.8945 31.0374 7.72512 28.9214 2.61712C28.8329 2.4033 28.673 2.22679 28.469 2.11767C28.2649 2.00855 28.0293 1.97358 27.8024 2.01872C27.5754 2.06386 27.3711 2.18632 27.2243 2.36522C27.0776 2.54412 26.9974 2.76838 26.9974 2.99979V29.9998"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M1 2V10C1 10.5304 1.21071 11.0391 1.58579 11.4142C1.96086 11.7893 2.46957 12 3 12C3.53043 12 4.03914 11.7893 4.41421 11.4142C4.78929 11.0391 5 10.5304 5 10V2"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M22 11.4202C21.1047 10.4594 20.0211 9.69318 18.8169 9.16927C17.6126 8.64537 16.3133 8.375 15 8.375C13.6867 8.375 12.3874 8.64537 11.1832 9.16927C9.97886 9.69318 8.89532 10.4594 8 11.4202"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8 24.5801C8.89532 25.5409 9.97886 26.3071 11.1832 26.831C12.3874 27.3549 13.6867 27.6253 15 27.6253C16.3133 27.6253 17.6126 27.3549 18.8169 26.831C20.0211 26.3071 21.1047 25.5409 22 24.5801"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_2294_3387">
                                        <rect
                                          width={32}
                                          height={32}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                                <div className="text">
                                  <p>Outdoor Dining Area</p>
                                </div>
                              </div>
                              <div className="list-box">
                                <div className="icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                  >
                                    <g clipPath="url(#clip0_2295_4098)">
                                      <path
                                        d="M27.1244 1H5.67441C3.5205 1 1.77441 2.79086 1.77441 5V11C1.77441 13.2091 3.5205 15 5.67441 15H27.1244C29.2783 15 31.0244 13.2091 31.0244 11V5C31.0244 2.79086 29.2783 1 27.1244 1Z"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M7.625 5H25.175"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M25.1748 11H7.6248C7.10763 11 6.61164 11.2107 6.24595 11.5858C5.88025 11.9609 5.6748 12.4696 5.6748 13V15H27.1248V13C27.1248 12.4696 26.9194 11.9609 26.5537 11.5858C26.188 11.2107 25.692 11 25.1748 11Z"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M7.6248 19C7.6248 19 5.6748 19 5.6748 22C5.6748 25 7.6248 25 7.6248 28C7.6248 31 5.6748 31 5.6748 31"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M27.1248 19C27.1248 19 25.1748 19 25.1748 22C25.1748 25 27.1248 25 27.1248 28C27.1248 31 25.1748 31 25.1748 31"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M16.3994 21V29"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M13.0225 23L19.7773 27"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M13.0225 27L19.7773 23"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_2295_4098">
                                        <rect
                                          width="31.2"
                                          height={32}
                                          fill="white"
                                          transform="translate(0.799805)"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                                <div className="text">
                                  <p>Air Conditioning</p>
                                </div>
                              </div>
                              <div className="list-box">
                                <div className="icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                  >
                                    <g clipPath="url(#clip0_2294_3400)">
                                      <path
                                        d="M2 15L4 24"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M2 31L4 24H8C8.53043 24 9.03914 24.2107 9.41421 24.5858C9.78929 24.9609 10 25.4696 10 26V31"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M30 15L28 24"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M30 31L28 24H24C23.4696 24 22.9609 24.2107 22.5858 24.5858C22.2107 24.9609 22 25.4696 22 26V31"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M16 9V31"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9 18H23"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M2.00078 9.0002C1.77682 8.99994 1.55944 8.9245 1.38346 8.78599C1.20748 8.64747 1.08309 8.4539 1.03022 8.23627C0.977349 8.01865 0.999062 7.78957 1.09188 7.58576C1.18469 7.38194 1.34324 7.21518 1.54211 7.1122L15.0208 1.25753C15.32 1.08933 15.6575 1.00098 16.0008 1.00098C16.344 1.00098 16.6815 1.08933 16.9808 1.25753L30.4594 7.1122C30.6583 7.21518 30.8169 7.38194 30.9097 7.58576C31.0025 7.78957 31.0242 8.01865 30.9713 8.23627C30.9185 8.4539 30.7941 8.64747 30.6181 8.78599C30.4421 8.9245 30.2247 8.99994 30.0008 9.0002H2.00078Z"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_2294_3400">
                                        <rect
                                          width={32}
                                          height={32}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                                <div className="text">
                                  <p>Patio Or Balcony</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="list-box">
                                <div className="icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                  >
                                    <g clipPath="url(#clip0_2294_3369)">
                                      <path
                                        d="M16 2.3373C14.4796 1.45952 12.755 0.997453 10.9994 0.997559C9.24383 0.997664 7.51922 1.45994 5.99896 2.33791C4.47869 3.21588 3.21635 4.4786 2.33884 5.99913C1.46133 7.51965 0.999577 9.2444 1 11"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M21 11C21.0017 9.62353 20.7184 8.26161 20.168 7"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M11 30.9998C11.6717 30.9999 12.3417 30.9329 13 30.7998"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M1 17V21C0.999446 22.9463 1.56684 24.8504 2.63262 26.4789C3.6984 28.1074 5.21623 29.3895 7 30.168"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M17 17.0002V11.0002C17.0002 9.94688 16.7231 8.91207 16.1966 7.99979C15.6701 7.08751 14.9127 6.32992 14.0005 5.80317C13.0884 5.27642 12.0536 4.99908 11.0003 4.99902C9.94697 4.99897 8.9122 5.27621 8 5.80287"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M5 11V21C4.99971 21.96 5.2298 22.9061 5.67093 23.7588C6.11207 24.6115 6.75138 25.3459 7.53516 25.9003C8.31894 26.4547 9.22432 26.8129 10.1752 26.9449C11.1262 27.0768 12.0949 26.9787 13 26.6587"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9 21C9 21.5304 9.21071 22.0391 9.58579 22.4142C9.96086 22.7893 10.4696 23 11 23C11.5304 23 12.0391 22.7893 12.4142 22.4142C12.7893 22.0391 13 21.5304 13 21V11C13 10.4696 12.7893 9.96086 12.4142 9.58579C12.0391 9.21071 11.5304 9 11 9C10.4696 9 9.96086 9.21071 9.58579 9.58579C9.21071 9.96086 9 10.4696 9 11V15"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M29 21H21C19.8954 21 19 21.8954 19 23V29C19 30.1046 19.8954 31 21 31H29C30.1046 31 31 30.1046 31 29V23C31 21.8954 30.1046 21 29 21Z"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M25 15C23.9391 15 22.9217 15.4214 22.1716 16.1716C21.4214 16.9217 21 17.9391 21 19V21H29V19C29 17.9391 28.5786 16.9217 27.8284 16.1716C27.0783 15.4214 26.0609 15 25 15Z"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M25 25.5386C25.0989 25.5386 25.1956 25.5679 25.2778 25.6228C25.36 25.6778 25.4241 25.7559 25.4619 25.8472C25.4998 25.9386 25.5097 26.0391 25.4904 26.1361C25.4711 26.2331 25.4235 26.3222 25.3536 26.3921C25.2836 26.4621 25.1945 26.5097 25.0975 26.529C25.0006 26.5483 24.9 26.5384 24.8087 26.5005C24.7173 26.4627 24.6392 26.3986 24.5843 26.3164C24.5293 26.2341 24.5 26.1375 24.5 26.0386C24.5 25.906 24.5527 25.7788 24.6464 25.685C24.7402 25.5913 24.8674 25.5386 25 25.5386Z"
                                        stroke="#073B3A"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_2294_3369">
                                        <rect
                                          width={32}
                                          height={32}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                                <div className="text">
                                  <p>Private Entrance</p>
                                </div>
                              </div>
                              <div className="list-box">
                                <div className="icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                  >
                                    <path
                                      d="M16 16.7588C17.6569 16.7588 19 15.4156 19 13.7588C19 12.1019 17.6569 10.7588 16 10.7588C14.3431 10.7588 13 12.1019 13 13.7588C13 15.4156 14.3431 16.7588 16 16.7588Z"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16 16.7588V29.6708"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M25.7148 25.1864C27.3716 23.7784 28.7023 22.027 29.615 20.0536C30.5276 18.0802 31.0003 15.932 31.0003 13.7578C31.0003 11.5835 30.5276 9.43532 29.615 7.46192C28.7023 5.48852 27.3716 3.73713 25.7148 2.3291"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M21.8281 20.616C22.8223 19.7713 23.6209 18.7204 24.1685 17.5364C24.7162 16.3523 24.9999 15.0633 24.9999 13.7587C24.9999 12.4541 24.7162 11.1651 24.1685 9.98104C23.6209 8.79696 22.8223 7.74613 21.8281 6.90137"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M6.2855 25.1864C4.62879 23.7784 3.29801 22.027 2.38535 20.0536C1.4727 18.0802 1 15.932 1 13.7578C1 11.5835 1.4727 9.43532 2.38535 7.46192C3.29801 5.48852 4.62879 3.73713 6.2855 2.3291"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M10.1717 20.616C9.1776 19.7713 8.37901 18.7204 7.83134 17.5364C7.28367 16.3523 7 15.0633 7 13.7587C7 12.4541 7.28367 11.1651 7.83134 9.98104C8.37901 8.79696 9.1776 7.74613 10.1717 6.90137"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <div className="text">
                                  <p>Building Wifi Free</p>
                                </div>
                              </div>
                              <div className="list-box">
                                <div className="icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                  >
                                    <path
                                      d="M29 29H5V21H29C29.5304 21 30.0391 21.2107 30.4142 21.5858C30.7893 21.9609 31 22.4696 31 23V27C31 27.5304 30.7893 28.0391 30.4142 28.4142C30.0391 28.7893 29.5304 29 29 29Z"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M21 21V29"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M1 21V29"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M11 3C11 4.5913 10.3679 6.11742 9.24264 7.24264C8.11742 8.36786 6.5913 9 5 9C3.93913 9 2.92172 9.42143 2.17157 10.1716C1.42143 10.9217 1 11.9391 1 13"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M17 3C17 6.1826 15.7357 9.23485 13.4853 11.4853C11.2348 13.7357 8.1826 15 5 15"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <div className="text">
                                  <p>Smoke Alarm Setting</p>
                                </div>
                              </div>
                              <div className="list-box">
                                <div className="icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                  >
                                    <path
                                      d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16 2V6"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16 26V30"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M30 16H26"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M6 16H2"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M25.9003 6.10156L23.0723 8.92956"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M8.92956 23.0718L6.10156 25.8998"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M25.9003 25.8998L23.0723 23.0718"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M8.92956 8.92956L6.10156 6.10156"
                                      stroke="#073B3A"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <div className="text">
                                  <p>Sun Loungers</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space60" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="all-side-details">
                        <div className="details-siderbar2">
                          <h4>Contact Seller</h4>
                          <div className="space24" />
                          <div className="personal-info">
                            <div className="img1">
                              <img
                                src="/assets/img/all-images/blog/blog-img17.png"
                                alt="housebox"
                              />
                            </div>
                            <div className="content">
                              <Link href="#">Ruhul Amin Jr</Link>
                              <Link href="mailto:ruhulaminjr@.com">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
                                </svg>
                                ruhulaminjr@.com
                              </Link>
                              <Link href="tel:(234)345-4574">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                                </svg>
                                (234) 345-4574
                              </Link>
                            </div>
                          </div>
                          <div className="space10" />
                          <div className="input-area">
                            <input type="text" placeholder="Full Name" />
                          </div>
                          <div className="input-area">
                            <input type="number" placeholder="Phone Number" />
                          </div>
                          <div className="input-area">
                            <input type="email" placeholder="Email Address" />
                          </div>
                          <div className="input-area">
                            <textarea placeholder="Your Message" />
                          </div>
                          <div className="input-area">
                            <button type="submit" className="theme-btn1">
                              Find Properties{" "}
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
                            </button>
                          </div>
                        </div>
                        <div className="space30" />
                        <div className="sidebar1-area">
                          <h4>Map Location</h4>
                          <div className="space24" />
                          <div className="tab-content" id="pills-tabContent">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd"
                              width={370}
                              height={150}
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== PROPERTIES AREA ENDS =======*/}
          <Cta />
        </div>
      </Layout>
    </>
  );
}
