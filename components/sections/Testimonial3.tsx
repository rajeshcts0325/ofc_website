"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
};

export default function Testimonial3() {
    return (
        <>
            <div className="testimonial3-section-area sp1" style={{ backgroundImage: "url(assets/img/all-images/bg/bg3.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="heading2 text-center space-margin60">
                                <h5>our Happy Clients</h5>
                                <div className="space20" />
                                <h2 className="text-anime-style-3">Why They Love HouseBox</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="images">
                                <div className="img1 reveal">
                                    <img src="/assets/img/all-images/testimonial/testimonial-img8.png" alt="housebox" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-6">
                            <Swiper {...swiperOptions} className="testimonial-slider-box3 owl-carousel">
                                <SwiperSlide className="testimonial-boxarea">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                    </ul>
                                    <div className="space16" />
                                    <p>“Our website has completely transformed since design working with this team. They understood our vision the perfectly and brought it to life in a way that exceeded our expectations. The design is both beautiful and the.”</p>
                                    <div className="space32" />
                                    <div className="names-area">
                                        <div className="man-textarea">
                                            <div className="man">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img4.png" alt="housebox" />
                                            </div>
                                            <div className="text">
                                                <Link href="#">Sheldon Jackson</Link>
                                                <div className="space12" />
                                                <p>Owner FeatherDev</p>
                                            </div>
                                        </div>
                                        <img src="/assets/img/elements/elements6.png" alt="housebox" className="elements6" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-boxarea">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                    </ul>
                                    <div className="space16" />
                                    <p>"Selling our home felt like a huge challenge until we found [Your Real Estate Agency]. Their team guided us every step of the way, from staging the property to negotiating offers. Within days, our home was sold for more than we expected."</p>
                                    <div className="space32" />
                                    <div className="names-area">
                                        <div className="man-textarea">
                                            <div className="man">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img5.png" alt="housebox" />
                                            </div>
                                            <div className="text">
                                                <Link href="#">Sheldon Jackson</Link>
                                                <div className="space12" />
                                                <p>Owner FeatherDev</p>
                                            </div>
                                        </div>
                                        <img src="/assets/img/elements/elements6.png" alt="housebox" className="elements6" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-boxarea">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                    </ul>
                                    <div className="space16" />
                                    <p>"We were first-time buyers, and the process seemed daunting. [Your Agency] made everything so simple and stress-free. They listened to our needs, showed us perfect options, and helped us close on our dream home quickly. Highly recommend!"</p>
                                    <div className="space32" />
                                    <div className="names-area">
                                        <div className="man-textarea">
                                            <div className="man">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img6.png" alt="housebox" />
                                            </div>
                                            <div className="text">
                                                <Link href="#">Sheldon Jackson</Link>
                                                <div className="space12" />
                                                <p>Owner FeatherDev</p>
                                            </div>
                                        </div>
                                        <img src="/assets/img/elements/elements6.png" alt="housebox" className="elements6" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
