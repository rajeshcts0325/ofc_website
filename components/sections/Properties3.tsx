"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperFade = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};

export default function Properties3() {
    return (
        <>
            <div className="properties3-section-area sp2" style={{ backgroundImage: "url(assets/img/all-images/bg/bg3.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="property-heading heading2 space-margin60">
                                <div className="hedaing1">
                                    <h5 data-aos="fade-left" data-aos-duration={800}>
                                        Featured Properties
                                    </h5>
                                    <div className="space20" />
                                    <h2 className="text-anime-style-3">Our Featured Properties</h2>
                                </div>
                                <div className="btn-area1" data-aos="zoom-in-up" data-aos-duration={1000}>
                                    <Link href="/sidebar-grid" className="theme-btn4">
                                        See All Properties{" "}
                                        <span className="arrow1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                            </svg>
                                        </span>
                                        <span className="arrow2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="property-feature-slider">
                                <div className="col-lg-12 m-auto">
                                    <div className="tabs-btn-area space-margin60">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM8 15H16V17H8V15Z"></path>
                                                    </svg>
                                                    For Sale
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12.5812 2.68627C12.2335 2.43791 11.7664 2.43791 11.4187 2.68627L1.9187 9.47198L3.08118 11.0994L11.9999 4.7289L20.9187 11.0994L22.0812 9.47198L12.5812 2.68627ZM19.5812 12.6863L12.5812 7.68627C12.2335 7.43791 11.7664 7.43791 11.4187 7.68627L4.4187 12.6863C4.15591 12.874 3.99994 13.177 3.99994 13.5V20C3.99994 20.5523 4.44765 21 4.99994 21H18.9999C19.5522 21 19.9999 20.5523 19.9999 20V13.5C19.9999 13.177 19.844 12.874 19.5812 12.6863ZM5.99994 19V14.0146L11.9999 9.7289L17.9999 14.0146V19H5.99994Z"></path>
                                                    </svg>
                                                    Villas
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z"></path>
                                                    </svg>
                                                    Apartments
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact1-tab" data-bs-toggle="pill" data-bs-target="#pills-contact1" type="button" role="tab" aria-controls="pills-contact1" aria-selected="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12.6727 1.61162 20.7999 9H17.8267L12 3.70302 6 9.15757V19.0001H11V21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001 11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162ZM14 11H23V18H14V11ZM16 13V16H21V13H16ZM24 21H13V19H24V21Z"></path>
                                                    </svg>
                                                    Houses
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact2-tab" data-bs-toggle="pill" data-bs-target="#pills-contact2" type="button" role="tab" aria-controls="pills-contact2" aria-selected="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M22 21H2V19H3V4C3 3.44772 3.44772 3 4 3H18C18.5523 3 19 3.44772 19 4V9H21V19H22V21ZM17 19H19V11H13V19H15V13H17V19ZM17 9V5H5V19H11V9H17ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM7 7H9V9H7V7Z"></path>
                                                    </svg>
                                                    Condos
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact3-tab" data-bs-toggle="pill" data-bs-target="#pills-contact3" type="button" role="tab" aria-controls="pills-contact3" aria-selected="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M3 19V5.70046C3 5.27995 3.26307 4.90437 3.65826 4.76067L13.3291 1.24398C13.5886 1.14961 13.8755 1.28349 13.9699 1.54301C13.9898 1.59778 14 1.65561 14 1.71388V6.6667L20.3162 8.77211C20.7246 8.90822 21 9.29036 21 9.72079V19H23V21H1V19H3ZM5 19H12V3.85543L5 6.40089V19ZM19 19V10.4416L14 8.77488V19H19Z"></path>
                                                    </svg>
                                                    Retail
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <Swiper {...swiperFade} className="swiper swiper-fade">
                                                                <div className="swiper-wrapper">
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img2.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img1.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img3.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img4.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                </div>
                                                                <div className="swiper-pagination" />
                                                            </Swiper>
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img14.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Grand Horizon
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <Swiper {...swiperFade} className="swiper swiper-fade">
                                                                <div className="swiper-wrapper">
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img15.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img14.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img13.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                </div>
                                                                <div className="swiper-pagination" />
                                                            </Swiper>
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                Lakeside Heights
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img16.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Emerald Bay
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <Swiper {...swiperFade} className="swiper swiper-fade">
                                                                <div className="swiper-wrapper">
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img17.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img2.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img5.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                </div>
                                                                <div className="swiper-pagination" />
                                                            </Swiper>
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                Willow Creek Estates
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img18.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Skyline Haven
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img13.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                Sunset Ridge Villas
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img14.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Crystal Meadows
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img15.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                Riverside Grove
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img16.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Pinnacle Retreat
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img17.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                Oakwood Manor
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img18.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img13.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img14.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img15.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img16.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img17.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img18.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact1-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img13.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img14.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img15.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img16.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img17.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img18.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact2-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img13.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img14.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img15.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img16.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img17.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img18.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact3" role="tabpanel" aria-labelledby="pills-contact3-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img13.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img14.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img15.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img16.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img17.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-single-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img18.png" alt="housebox" />
                                                        </div>
                                                        <ul className="category-list">
                                                            <li>
                                                                <Link href="/property-details-v1">Featured</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/property-details-v1">For Rent</Link>
                                                            </li>
                                                        </ul>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1" className="head">
                                                                The Parkview Residence
                                                            </Link>
                                                            <div className="space16" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        12 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        08 <span className="line"> |</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon">
                                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        </span>{" "}
                                                                        1200 SQ
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="space24" />
                                                            <div className="btn-area">
                                                                <div className="nm-btn">
                                                                    <Link href="#">$820,000</Link>
                                                                </div>
                                                                <div className="love-share">
                                                                    <Link href="#" className="heart">
                                                                        <img src="/assets/img/icons/heart3.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart4.svg" alt="housebox" className="heart2" />
                                                                    </Link>
                                                                    <Link href="#" className="share">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                            <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path>
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
