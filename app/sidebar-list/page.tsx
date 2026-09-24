"use client";
import PropertyFilter from "@/components/elements/property-filter";
import PropertyList from "@/components/elements/property-list";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
export default function SidebarList() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="hero-inner-section-area-sidebar">
                        <img src="/assets/img/all-images/hero/hero-img1.png" alt="housebox" className="hero-img1" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="hero-header-area text-center">
                                        <Link href="/">
                                            Home{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                            </svg>{" "}
                                            Listing{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                            </svg>{" "}
                                            Find Top Map List
                                        </Link>
                                        <div className="space24" />
                                        <h1>Find Sidebar List</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== PROPERTIES AREA STARTS =======*/}
                    <div className="property-inner-section-find sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="property-mapgrid-area">
                                        <div className="space32 d-none d-lg-block" />
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="theme-btn1  open-filter-form">
                                                    <p className="open-text">
                                                        Open filter Options
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
                                                        </svg>
                                                    </p>
                                                    <p className="close-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
                                                        </svg>
                                                        Close
                                                    </p>
                                                </div>
                                                <PropertyFilter />
                                                <div className="space30" />
                                                <div className="property-latest">
                                                    <h3>Latest Properties</h3>
                                                    <div className="space8" />
                                                    <div className="latest-proprty">
                                                        <div className="img1">
                                                            <img src="/assets/img/all-images/properties/property-img25.png" alt="housebox" />
                                                        </div>
                                                        <div className="content">
                                                            <Link href="/property-details-v1">Three Room Apartment</Link>
                                                            <div className="space16" />
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
                                                            <div className="space12" />
                                                            <h3>$950,000</h3>
                                                        </div>
                                                    </div>
                                                    <div className="latest-proprty">
                                                        <div className="img1">
                                                            <img src="/assets/img/all-images/properties/property-img26.png" alt="housebox" />
                                                        </div>
                                                        <div className="content">
                                                            <Link href="/property-details-v1">Subrub Home for Rent</Link>
                                                            <div className="space16" />
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
                                                            <div className="space12" />
                                                            <h3>$6,500</h3>
                                                        </div>
                                                    </div>
                                                    <div className="latest-proprty">
                                                        <div className="img1">
                                                            <img src="/assets/img/all-images/properties/property-img27.png" alt="housebox" />
                                                        </div>
                                                        <div className="content">
                                                            <Link href="/property-details-v1">Apartment Diamond</Link>
                                                            <div className="space16" />
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
                                                            <div className="space12" />
                                                            <h3>$950,000</h3>
                                                        </div>
                                                    </div>
                                                    <div className="latest-proprty">
                                                        <div className="img1">
                                                            <img src="/assets/img/all-images/properties/property-img28.png" alt="housebox" />
                                                        </div>
                                                        <div className="content">
                                                            <Link href="/property-details-v1">Apartment Complex</Link>
                                                            <div className="space16" />
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
                                                            <div className="space12" />
                                                            <h3>$950,000</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space30 d-lg-none d-block" />
                                            </div>
                                            <div className="col-lg-8">
                                                <PropertyList view="list" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== PROPERTIES AREA ENDS =======*/}
                    {/*===== CTA AREA STARTS =======*/}
                    <div className="cta1-section-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cta-bg-area" style={{ backgroundImage: "url(assets/img/all-images/bg/cta-bg1.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-5">
                                                <div className="cta-header">
                                                    <h2 className="text-anime-style-3">Step Into Your Dream Home with HouseBox</h2>
                                                    <div className="space16" />
                                                    <p data-aos="fade-left" data-aos-duration={1000}>
                                                        At HouseBox, we believe your next home is more than just a place – it’s where your future begins you’re buy.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-2" />
                                            <div className="col-lg-5" data-aos="zoom-in" data-aos-duration={1000}>
                                                <div className="btn-area1 text-center">
                                                    <Link href="/property-halfmap-grid" className="theme-btn1">
                                                        Find Your Dream Home{" "}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
