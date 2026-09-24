"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Link from "next/link";
import SwiperCore from "swiper";

// Define the component
export default function Testimonial4() {
    // Fix 1: Properly type the thumbsSwiper state
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    // Fix 2: Type the swiper options
    const mainSwiperOptions = {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        thumbs: {
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        },
        modules: [FreeMode, Navigation, Thumbs],
        className: "mySwiper2",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    };

    const thumbnailSwiperOptions = {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        modules: [FreeMode, Navigation, Thumbs],
        className: "mySwiper",
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    };
    return (
        <>
            <div>
                <div className="space100 d-lg-block d-none" />
                <div className="space50 d-lg-none d-block" />
                <section className="testimonials-2 sp1" style={{ backgroundImage: "url(assets/img/all-images/bg/bg5.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 m-auto text-center">
                                <div className="heading3  text-center">
                                    <h5>our testimonials</h5>
                                    <div className="space20" />
                                    <h2 className="text-anime-style-3">Feedback Our Investor</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-md-12">
                                <div className="map-testimonial">
                                    <img className="map" src="/assets/img/all-images/bg/map-bg.png" alt="housebox" />
                                    <Swiper {...mainSwiperOptions} className="swiper swiper-thumb2">
                                        <div className="swiper-wrapper list-img">
                                            <SwiperSlide>
                                                <div>
                                                    <img src="/assets/img/all-images/testimonial/testimonial-img9.png" alt="housebox" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div>
                                                    <img src="/assets/img/all-images/testimonial/testimonial-img10.png" alt="housebox" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div>
                                                    <img src="/assets/img/all-images/testimonial/testimonial-img11.png" alt="housebox" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div>
                                                    <img src="/assets/img/all-images/testimonial/testimonial-img12.png" alt="housebox" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div>
                                                    <img src="/assets/img/all-images/testimonial/testimonial-img13.png" alt="housebox" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div>
                                                    <img src="/assets/img/all-images/testimonial/testimonial-img14.png" alt="housebox" />
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12 left _relative">
                                <Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper} className="swiper swiper-testimonial-2">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="testimonials-box-2">
                                                <div className="content-area">
                                                    <ul>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                    </ul>
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="space16" />
                                                    <p className="text">"Thanks to [Your Agency], I found the ideal investment property. Their expertise, market insights, and personalized service set them apart. It’s clear they truly care about their clients' success."</p>
                                                    <div className="triangle">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={42} height={35} viewBox="0 0 42 35" fill="none">
                                                            <path d="M19.701 32.75C20.0943 33.4313 20.3617 33.8918 20.5977 34.1891C20.831 34.4829 20.9429 34.5 21 34.5C21.0571 34.5 21.169 34.4829 21.4023 34.1891C21.6383 33.8918 21.9057 33.4313 22.299 32.75L39.6195 2.75C40.0129 2.06871 40.278 1.60685 40.4175 1.2538C40.5553 0.904957 40.5141 0.79945 40.4856 0.75C40.457 0.700546 40.3862 0.61216 40.0152 0.557079C39.6397 0.501335 39.1072 0.5 38.3205 0.5H3.67949C2.8928 0.5 2.36027 0.501335 1.98478 0.557079C1.61377 0.61216 1.54298 0.700546 1.51443 0.75C1.48588 0.799454 1.44473 0.904957 1.58253 1.2538C1.722 1.60685 1.98711 2.06871 2.38045 2.75L19.701 32.75Z" fill="#FF6B00" stroke="#FF6B00" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="info">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img9.png" alt="housebox" />
                                                        <div className="content">
                                                            <h6 className="name">
                                                                <Link href="#">Sheldon Jackson</Link>
                                                            </h6>
                                                            <p className="position">Shop Store Owner</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonials-box-2">
                                                <div className="content-area">
                                                    <ul>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                    </ul>
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="space16" />
                                                    <p className="text">"I relocated for work and needed to sell my house quickly. [Your Real Estate Agency] delivered! They handled everything smoothly, and I could focus on my move without worry. I highly recommend their services."</p>
                                                    <div className="triangle">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={42} height={35} viewBox="0 0 42 35" fill="none">
                                                            <path d="M19.701 32.75C20.0943 33.4313 20.3617 33.8918 20.5977 34.1891C20.831 34.4829 20.9429 34.5 21 34.5C21.0571 34.5 21.169 34.4829 21.4023 34.1891C21.6383 33.8918 21.9057 33.4313 22.299 32.75L39.6195 2.75C40.0129 2.06871 40.278 1.60685 40.4175 1.2538C40.5553 0.904957 40.5141 0.79945 40.4856 0.75C40.457 0.700546 40.3862 0.61216 40.0152 0.557079C39.6397 0.501335 39.1072 0.5 38.3205 0.5H3.67949C2.8928 0.5 2.36027 0.501335 1.98478 0.557079C1.61377 0.61216 1.54298 0.700546 1.51443 0.75C1.48588 0.799454 1.44473 0.904957 1.58253 1.2538C1.722 1.60685 1.98711 2.06871 2.38045 2.75L19.701 32.75Z" fill="#FF6B00" stroke="#FF6B00" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="info">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img10.png" alt="housebox" />
                                                        <div className="content">
                                                            <h6 className="name">
                                                                <Link href="#">Alex Garcia</Link>
                                                            </h6>
                                                            <p className="position">Shop Store Owner</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonials-box-2">
                                                <div className="content-area">
                                                    <ul>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                    </ul>
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="space16" />
                                                    <p className="text">“From start to finish, the team was exceptional. There listened to our needs, provided expert guidance, and found us the perfect home. We couldn’t be happier on their serviceI got the best deal possible! Thanks”</p>
                                                    <div className="triangle">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={42} height={35} viewBox="0 0 42 35" fill="none">
                                                            <path d="M19.701 32.75C20.0943 33.4313 20.3617 33.8918 20.5977 34.1891C20.831 34.4829 20.9429 34.5 21 34.5C21.0571 34.5 21.169 34.4829 21.4023 34.1891C21.6383 33.8918 21.9057 33.4313 22.299 32.75L39.6195 2.75C40.0129 2.06871 40.278 1.60685 40.4175 1.2538C40.5553 0.904957 40.5141 0.79945 40.4856 0.75C40.457 0.700546 40.3862 0.61216 40.0152 0.557079C39.6397 0.501335 39.1072 0.5 38.3205 0.5H3.67949C2.8928 0.5 2.36027 0.501335 1.98478 0.557079C1.61377 0.61216 1.54298 0.700546 1.51443 0.75C1.48588 0.799454 1.44473 0.904957 1.58253 1.2538C1.722 1.60685 1.98711 2.06871 2.38045 2.75L19.701 32.75Z" fill="#FF6B00" stroke="#FF6B00" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="info">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img11.png" alt="housebox" />
                                                        <div className="content">
                                                            <h6 className="name">
                                                                <Link href="#">Hector Fort</Link>
                                                            </h6>
                                                            <p className="position">Shop Store Owner</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonials-box-2">
                                                <div className="content-area">
                                                    <ul>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                    </ul>
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="space16" />
                                                    <p className="text">“From start to finish, the team was exceptional. There listened to our needs, provided expert guidance, and found us the perfect home. We couldn’t be happier on their serviceI got the best deal possible! Thanks”</p>
                                                    <div className="triangle">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={42} height={35} viewBox="0 0 42 35" fill="none">
                                                            <path d="M19.701 32.75C20.0943 33.4313 20.3617 33.8918 20.5977 34.1891C20.831 34.4829 20.9429 34.5 21 34.5C21.0571 34.5 21.169 34.4829 21.4023 34.1891C21.6383 33.8918 21.9057 33.4313 22.299 32.75L39.6195 2.75C40.0129 2.06871 40.278 1.60685 40.4175 1.2538C40.5553 0.904957 40.5141 0.79945 40.4856 0.75C40.457 0.700546 40.3862 0.61216 40.0152 0.557079C39.6397 0.501335 39.1072 0.5 38.3205 0.5H3.67949C2.8928 0.5 2.36027 0.501335 1.98478 0.557079C1.61377 0.61216 1.54298 0.700546 1.51443 0.75C1.48588 0.799454 1.44473 0.904957 1.58253 1.2538C1.722 1.60685 1.98711 2.06871 2.38045 2.75L19.701 32.75Z" fill="#FF6B00" stroke="#FF6B00" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="info">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img12.png" alt="housebox" />
                                                        <div className="content">
                                                            <h6 className="name">
                                                                <Link href="#">Inaki Pena</Link>
                                                            </h6>
                                                            <p className="position">Shop Store Owner</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonials-box-2">
                                                <div className="content-area">
                                                    <ul>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                    </ul>
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="space16" />
                                                    <p className="text">“From start to finish, the team was exceptional. There listened to our needs, provided expert guidance, and found us the perfect home. We couldn’t be happier on their serviceI got the best deal possible! Thanks”</p>
                                                    <div className="triangle">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={42} height={35} viewBox="0 0 42 35" fill="none">
                                                            <path d="M19.701 32.75C20.0943 33.4313 20.3617 33.8918 20.5977 34.1891C20.831 34.4829 20.9429 34.5 21 34.5C21.0571 34.5 21.169 34.4829 21.4023 34.1891C21.6383 33.8918 21.9057 33.4313 22.299 32.75L39.6195 2.75C40.0129 2.06871 40.278 1.60685 40.4175 1.2538C40.5553 0.904957 40.5141 0.79945 40.4856 0.75C40.457 0.700546 40.3862 0.61216 40.0152 0.557079C39.6397 0.501335 39.1072 0.5 38.3205 0.5H3.67949C2.8928 0.5 2.36027 0.501335 1.98478 0.557079C1.61377 0.61216 1.54298 0.700546 1.51443 0.75C1.48588 0.799454 1.44473 0.904957 1.58253 1.2538C1.722 1.60685 1.98711 2.06871 2.38045 2.75L19.701 32.75Z" fill="#FF6B00" stroke="#FF6B00" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="info">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img13.png" alt="housebox" />
                                                        <div className="content">
                                                            <h6 className="name">
                                                                <Link href="#">Raphinha Dias</Link>
                                                            </h6>
                                                            <p className="position">Shop Store Owner</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonials-box-2">
                                                <div className="content-area">
                                                    <ul>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                            </svg>
                                                        </li>
                                                    </ul>
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="space16" />
                                                    <p className="text">“From start to finish, the team was exceptional. There listened to our needs, provided expert guidance, and found us the perfect home. We couldn’t be happier on their serviceI got the best deal possible! Thanks”</p>
                                                    <div className="triangle">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={42} height={35} viewBox="0 0 42 35" fill="none">
                                                            <path d="M19.701 32.75C20.0943 33.4313 20.3617 33.8918 20.5977 34.1891C20.831 34.4829 20.9429 34.5 21 34.5C21.0571 34.5 21.169 34.4829 21.4023 34.1891C21.6383 33.8918 21.9057 33.4313 22.299 32.75L39.6195 2.75C40.0129 2.06871 40.278 1.60685 40.4175 1.2538C40.5553 0.904957 40.5141 0.79945 40.4856 0.75C40.457 0.700546 40.3862 0.61216 40.0152 0.557079C39.6397 0.501335 39.1072 0.5 38.3205 0.5H3.67949C2.8928 0.5 2.36027 0.501335 1.98478 0.557079C1.61377 0.61216 1.54298 0.700546 1.51443 0.75C1.48588 0.799454 1.44473 0.904957 1.58253 1.2538C1.722 1.60685 1.98711 2.06871 2.38045 2.75L19.701 32.75Z" fill="#FF6B00" stroke="#FF6B00" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="info">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img14.png" alt="housebox" />
                                                        <div className="content">
                                                            <h6 className="name">
                                                                <Link href="#">Marc Casado</Link>
                                                            </h6>
                                                            <p className="position">Shop Store Owner</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                                <div className="pagination-buttons">
                                    <div className="swiper-button-next">
                                        <button>
                                            <i className="fa-solid fa-angle-left" />
                                        </button>
                                    </div>
                                    <div className="swiper-button-prev">
                                        <button>
                                            <i className="fa-solid fa-angle-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
