"use client";
import Slider from "react-slick";

import Link from "next/link";

export default function Testimonial2() {
    const settings1 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
    };
    const settings2 = {
        slidesToShow: 4,
        slidesToScroll: 1,
        items: 15,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        infinite: false,
    };
    return (
        <>
            <div className="testimonial2-section-area sp1" style={{ backgroundImage: "url(assets/img/all-images/bg/bg1.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial-header space-margin60">
                                <div className="heading1">
                                    <h5>Trusted by Thousand people</h5>
                                    <div className="space20" />
                                    <h2 className="text-anime-style-3">Hear Our Happy Clients</h2>
                                </div>
                                <div className="btn-area1">
                                    <Link href="/" className="theme-btn3">
                                        View All Testimonials{" "}
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
                        <div className="col-lg-5">
                            <div className="img1 image-anime reveal">
                                <img src="/assets/img/all-images/testimonial/testimonial-img3.png" alt="housebox" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Slider {...settings1} className="slider-galeria">
                                <div className="testimonial-slider-content-area">
                                    <div className="testimonial-author-area">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="space16" />
                                        <img src="/assets/img/icons/quito2.svg" alt="housebox" className="quito2" />
                                        <img src="/assets/img/elements/elements3.png" alt="housebox" className="elements3" />
                                        <p>“From start to finish, the team was exceptional. There are listened to our needs, provided expert guidance, &amp; found us the perfect home. We couldn’t be happier on with their serviceI got the best deal possible! Thanks””</p>
                                    </div>
                                    <div className="space60" />
                                    <div className="testimonial-man-info-area">
                                        <div className="man-images-text">
                                            <div className="mans-img">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img4.png" alt="housebox" />
                                            </div>
                                            <div className="man-text">
                                                <Link href="#">Sheldon Jackson</Link>
                                                <div className="space12" />
                                                <p>Shop Store Owner</p>
                                            </div>
                                        </div>
                                        <img src="/assets/img/elements/elements4.png" alt="housebox" />
                                    </div>
                                </div>
                                <div className="testimonial-slider-content-area">
                                    <div className="testimonial-author-area">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="space16" />
                                        <img src="/assets/img/icons/quito2.svg" alt="housebox" className="quito2" />
                                        <img src="/assets/img/elements/elements3.png" alt="housebox" className="elements3" />
                                        <p>"Selling our home felt like a huge challenge until we found [Your Real Estate Agency]. Their team guided us every step of the way, from staging the property to negotiating offers. Within days, our home was sold for more than we expected."</p>
                                    </div>
                                    <div className="space60" />
                                    <div className="testimonial-man-info-area">
                                        <div className="man-images-text">
                                            <div className="mans-img">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img5.png" alt="housebox" />
                                            </div>
                                            <div className="man-text">
                                                <Link href="#">Sheldon Jackson</Link>
                                                <div className="space12" />
                                                <p>Shop Store Owner</p>
                                            </div>
                                        </div>
                                        <img src="/assets/img/elements/elements4.png" alt="housebox" />
                                    </div>
                                </div>
                                <div className="testimonial-slider-content-area">
                                    <div className="testimonial-author-area">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="space16" />
                                        <img src="/assets/img/icons/quito2.svg" alt="housebox" className="quito2" />
                                        <img src="/assets/img/elements/elements3.png" alt="housebox" className="elements3" />
                                        <p>"We were first-time buyers, and the process seemed daunting. [Your Agency] made everything so simple and stress-free. They listened to our needs, showed us perfect options, and helped us close on our dream home quickly."</p>
                                    </div>
                                    <div className="space60" />
                                    <div className="testimonial-man-info-area">
                                        <div className="man-images-text">
                                            <div className="mans-img">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img6.png" alt="housebox" />
                                            </div>
                                            <div className="man-text">
                                                <Link href="#">Sheldon Jackson</Link>
                                                <div className="space12" />
                                                <p>Shop Store Owner</p>
                                            </div>
                                        </div>
                                        <img src="/assets/img/elements/elements4.png" alt="housebox" />
                                    </div>
                                </div>
                                <div className="testimonial-slider-content-area">
                                    <div className="testimonial-author-area">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="space16" />
                                        <img src="/assets/img/icons/quito2.svg" alt="housebox" className="quito2" />
                                        <img src="/assets/img/elements/elements3.png" alt="housebox" className="elements3" />
                                        <p>"Thanks to [Your Agency], I found the ideal investment property. Their expertise, market insights, and personalized service set them apart. It’s clear they truly care about their clients' success."</p>
                                    </div>
                                    <div className="space60" />
                                    <div className="testimonial-man-info-area">
                                        <div className="man-images-text">
                                            <div className="mans-img">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img7.png" alt="housebox" />
                                            </div>
                                            <div className="man-text">
                                                <Link href="#">Sheldon Jackson</Link>
                                                <div className="space12" />
                                                <p>Shop Store Owner</p>
                                            </div>
                                        </div>
                                        <img src="/assets/img/elements/elements4.png" alt="housebox" />
                                    </div>
                                </div>
                                <div className="testimonial-slider-content-area">
                                    <div className="testimonial-author-area">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-solid fa-star" />
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="space16" />
                                        <img src="/assets/img/icons/quito2.svg" alt="housebox" className="quito2" />
                                        <img src="/assets/img/elements/elements3.png" alt="housebox" className="elements3" />
                                        <p>"The team at [Your Agency] transformed the way I looked at real estate. Their marketing was incredible—professional photos, virtual tours, and wide exposure. We had multiple offers within the first week!"</p>
                                    </div>
                                    <div className="space60" />
                                    <div className="testimonial-man-info-area">
                                        <div className="man-images-text">
                                            <div className="mans-img">
                                                <img src="/assets/img/all-images/testimonial/testimonial-img4.png" alt="housebox" />
                                            </div>
                                            <div className="man-text">
                                                <Link href="#">Sheldon Jackson</Link>
                                                <div className="space12" />
                                                <p>Shop Store Owner</p>
                                            </div>
                                        </div>
                                        <img src="/assets/img/elements/elements4.png" alt="housebox" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="col-lg-1">
                            <Slider {...settings2} className="slider-galeria-thumbs text-center d-lg-block d-none">
                                <div className="testimonial3-sliders-img">
                                    <img src="/assets/img/all-images/testimonial/testimonial-img4.png" alt="housebox" />
                                </div>
                                <div className="testimonial3-sliders-img">
                                    <img src="/assets/img/all-images/testimonial/testimonial-img5.png" alt="housebox" />
                                </div>
                                <div className="testimonial3-sliders-img">
                                    <img src="/assets/img/all-images/testimonial/testimonial-img6.png" alt="housebox" />
                                </div>
                                <div className="testimonial3-sliders-img">
                                    <img src="/assets/img/all-images/testimonial/testimonial-img7.png" alt="housebox" />
                                </div>
                                <div className="testimonial3-sliders-img">
                                    <img src="/assets/img/all-images/testimonial/testimonial-img4.png" alt="housebox" />
                                </div>
                                <div className="testimonial3-sliders-img">
                                    <img src="/assets/img/all-images/testimonial/testimonial-img5.png" alt="housebox" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
