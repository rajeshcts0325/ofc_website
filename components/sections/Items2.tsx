"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
        <div className="testimonial-prev-arrow slick-arrow" onClick={onClick}>
            <button>
                <i className="fa-solid fa-angle-left" />
            </button>
        </div>
    );
};

const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
        <div className="testimonial-next-arrow slick-arrow" onClick={onClick}>
            <button>
                <i className="fa-solid fa-angle-right" />
            </button>
        </div>
    );
};

export default function Items2() {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: false,
        autoplaySpeed: 8000,
        loop: true,
        focusOnSelect: true,
        infinite: true,
    };
    return (
        <>
            <div className="items2-section-area sp1" style={{ backgroundImage: "url(assets/img/all-images/bg/bg2.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 m-auto">
                            <div className="item-header heading1 text-center space-margin60">
                                <h5>our best featured item</h5>
                                <div className="space20" />
                                <h2 className="text-anime-style-3">Our Featured Items</h2>
                            </div>
                        </div>
                    </div>
                    <div className="items-images-area">
                        <Slider {...settings} className="slider-content-area">
                            <div>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="img1 image-anime">
                                            <img src="/assets/img/all-images/items/item-img1.png" alt="housebox" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="items-content-area">
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
                                                <div className="space24" />
                                                <Link href="/property-details-v1">Rancho Vista Verde, Santos Barba</Link>
                                                <div className="space20" />
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                                                    </svg>{" "}
                                                    742 Terrace, Springfield, IL 62704, USA
                                                </p>
                                                <div className="space24" />
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                            x12 Beds
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                            x16 Baths
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                            1200 sq
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="space32" />
                                                <div className="btn-area">
                                                    <div className="name-area">
                                                        <div className="img">
                                                            <img src="/assets/img/all-images/properties/property-img8.png" alt="housebox" />
                                                        </div>
                                                        <div className="text">
                                                            <Link href="#">Alex Roberts</Link>
                                                        </div>
                                                    </div>
                                                    <div className="space20 d-md-none d-block" />
                                                    <div className="btn-area">
                                                        <Link href="#" className="heart">
                                                            <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" />
                                                            <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                        </Link>
                                                        <Link href="#" className="nm-btn">
                                                            $820,000
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="img1 image-anime">
                                            <img src="/assets/img/all-images/items/item-img1.png" alt="housebox" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="items-content-area">
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
                                                <div className="space24" />
                                                <Link href="/property-details-v1">Rancho Vista Verde, Santos Barba</Link>
                                                <div className="space20" />
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                                                    </svg>{" "}
                                                    742 Terrace, Springfield, IL 62704, USA
                                                </p>
                                                <div className="space24" />
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <img src="/assets/img/icons/bed1.svg" alt="housebox" />
                                                            x12 Beds
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <img src="/assets/img/icons/bath1.svg" alt="housebox" />
                                                            x16 Baths
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <img src="/assets/img/icons/sqare1.svg" alt="housebox" />
                                                            1200 sq
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="space32" />
                                                <div className="btn-area">
                                                    <div className="name-area">
                                                        <div className="img">
                                                            <img src="/assets/img/all-images/properties/property-img8.png" alt="housebox" />
                                                        </div>
                                                        <div className="text">
                                                            <Link href="#">Alex Roberts</Link>
                                                        </div>
                                                    </div>
                                                    <div className="space20 d-md-none d-block" />
                                                    <div className="btn-area">
                                                        <Link href="#" className="heart">
                                                            <img src="/assets/img/icons/heart1.svg" alt="housebox" className="heart1" />
                                                            <img src="/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                        </Link>
                                                        <Link href="#" className="nm-btn">
                                                            $820,000
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}
