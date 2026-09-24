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
        delay: 3500,
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

export default function Properties1() {
    return (
        <>
            <div className="properties-section-area sp2" style={{ backgroundImage: "url(assets/img/all-images/bg/bg1.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="property-heading heading1 text-center space-margin60">
                                <h5>Featured Properties</h5>
                                <div className="space20" />
                                <h2 className="text-anime-style-3">Our Featured Properties</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="property-feature-slider">
                                <div className="col-lg-12 m-auto">
                                    <div className="tabs-btn-area space-margin60" data-aos="fade-up" data-aos-duration={1000}>
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
                                    <div className="tab-content" id="pills-tabContent" data-aos="fade-up" data-aos-duration={1000}>
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
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
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Luxury Suite Villa</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x12
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x16
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <Swiper {...swiperFade} className="swiper swiper-fade">
                                                                <div className="swiper-wrapper">
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img4.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img2.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img6.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                </div>
                                                                <div className="swiper-pagination" />
                                                            </Swiper>
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Three Room Apartment</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x20
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x30
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <Swiper {...swiperFade} className="swiper swiper-fade">
                                                                <div className="swiper-wrapper">
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img5.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img3.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                    <SwiperSlide>
                                                                        <img src="/assets/img/all-images/properties/property-img2.png" alt="housebox" />
                                                                    </SwiperSlide>
                                                                </div>
                                                                <div className="swiper-pagination" />
                                                            </Swiper>
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Gorgeous Home for Sale</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x23
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x34
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img1.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Apartment Complex</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x20
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x30
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img2.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Luxury Suite Villa</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x12
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x16
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img3.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Diamond Apartment</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x23
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x34
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img4.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Three Room Apartment</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x20
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x30
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img5.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Suburb Home for Rent </Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x12
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x16
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img6.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Gorgeous Home for Sale</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x23
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x34
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img1.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Apartment Complex</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x20
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x30
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img2.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Luxury Suite Villa</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x12
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x16
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img3.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Diamond Apartment</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x23
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x34
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img4.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Three Room Apartment</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x20
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x30
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img5.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Suburb Home for Rent </Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x12
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x16
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img6.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Gorgeous Home for Sale</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x23
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x34
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact1-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img1.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Apartment Complex</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x20
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x30
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img2.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Luxury Suite Villa</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x12
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x16
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img3.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Diamond Apartment</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x23
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x34
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img4.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Three Room Apartment</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x20
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x30
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img5.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Suburb Home for Rent </Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x12
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x16
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img6.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Gorgeous Home for Sale</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x23
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x34
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact2-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img1.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Apartment Complex</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x20
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x30
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img2.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Luxury Suite Villa</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x12
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x16
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img3.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Diamond Apartment</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x23
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x34
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img4.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Three Room Apartment</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x20
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x30
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img5.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Suburb Home for Rent </Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x12
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x16
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img6.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Gorgeous Home for Sale</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x23
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x34
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact3" role="tabpanel" aria-labelledby="pills-contact3-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img1.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Apartment Complex</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x20
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x30
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img2.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Luxury Suite Villa</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x12
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x16
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img3.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Diamond Apartment</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x23
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x34
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img4.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Three Room Apartment</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x20
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x30
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img5.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Rent</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Suburb Home for Rent </Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x12
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x16
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="property-boxarea">
                                                        <div className="img1 image-anime">
                                                            <img src="/assets/img/all-images/properties/property-img6.png" alt="housebox" />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <Link href="/property-details-v1">Featured</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/property-details-v1">For Sale</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <Link href="/property-details-v1">Gorgeous Home for Sale</Link>
                                                            <div className="space18" />
                                                            <p>Los Angeles City, CA, USA</p>
                                                            <div className="space24" />
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                                        x23
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                                        x34
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                                        1200 sq
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="btn-area">
                                                                <Link href="#" className="nm-btn">
                                                                    $820,000
                                                                </Link>
                                                                <Link href="#" className="heart">
                                                                    <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" /> <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
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
        </>
    );
}
