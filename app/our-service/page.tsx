"use client";
import Slider from "react-slick";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function OurService() {
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
                                            Our Services
                                        </Link>
                                        <div className="space24" />
                                        <h1>Our Services</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== PROJECT AREA STARTS =======*/}
                    <div className="project1-section-area sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="project-heading heading1 space-margin60 text-center">
                                        <h5>3 step to buy sell property</h5>
                                        <div className="space20" />
                                        <h2 className="text-anime-style-3">See How Realton Can Help</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
                                    <div className="project-featured-box">
                                        <div className="img1">
                                            <img src="/assets/img/all-images/project/project-img1.png" alt="housebox" />
                                        </div>
                                        <div className="space40" />
                                        <Link href="/property-details-v1" className="head">
                                            Buying A Home
                                        </Link>
                                        <div className="space16" />
                                        <p>At Housebox, we know that buying a home is one life’s biggest milestones. Our experienced team is here to guide you through every step home.</p>
                                        <div className="space24" />
                                        <div className="btn-area1">
                                            <Link href="/contact" className="theme-btn1">
                                                Buy A Property{" "}
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
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
                                    <div className="project-featured-box">
                                        <div className="img1">
                                            <img src="/assets/img/all-images/project/project-img2.png" alt="housebox" />
                                        </div>
                                        <div className="space40" />
                                        <Link href="/property-details-v1" className="head">
                                            Sell A Home
                                        </Link>
                                        <div className="space16" />
                                        <p>Selling your home doesn’t have to be overwhelming. With Housebox, our dedicated experts will make process smooth, stress-free, and rewarding.</p>
                                        <div className="space24" />
                                        <div className="btn-area1">
                                            <Link href="/contact" className="theme-btn1">
                                                Buy A Property{" "}
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
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
                                    <div className="project-featured-box">
                                        <div className="img1">
                                            <img src="/assets/img/all-images/project/project-img3.png" alt="housebox" />
                                        </div>
                                        <div className="space40" />
                                        <Link href="/property-details-v1" className="head">
                                            Rent A Home
                                        </Link>
                                        <div className="space16" />
                                        <p>Finding the right rental property is easy with Housebox. Whether you’re seeking a cozy apartment spacious home, we offer a variety of options.</p>
                                        <div className="space24" />
                                        <div className="btn-area1">
                                            <Link href="/contact" className="theme-btn1">
                                                Buy A Property{" "}
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
                    {/*===== PROJECT AREA ENDS =======*/}
                    {/*===== TESTIMONIAL AREA STARTS =======*/}
                    <div className="testimonial1-section-area sp1" style={{ backgroundImage: "url(assets/img/all-images/bg/bg1.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="testimonial-header space-margin60 heading1">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>
                                            feedback/testimonial
                                        </h5>
                                        <div className="space20" />
                                        <h2 className="text-anime-style-3">A Legacy Of Happy Clients</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="testimonialmain-slider">
                                        <div className="row align-items-center">
                                            <div className="col-lg-5">
                                                <Slider {...settings2} className="images-area2 slider2">
                                                    <div className="img1 image-anime">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img1.png" alt="housebox" />
                                                    </div>
                                                    <div className="img1 image-anime">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img1.png" alt="housebox" />
                                                    </div>
                                                    <div className="img1 image-anime">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img1.png" alt="housebox" />
                                                    </div>
                                                    <div className="img1 image-anime">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img1.png" alt="housebox" />
                                                    </div>
                                                </Slider>
                                            </div>
                                            <div className="col-lg-7">
                                                <Slider {...settings1} className="testimonial-slider-area slider1">
                                                    <div className="testimonial-box">
                                                        <img src="/assets/img/icons/quoto-icon1.svg" alt="housebox" />
                                                        <div className="space16" />
                                                        <p>"When I decided to sell my home, I was overwhelmed with where to start. HouseBox stepped in with a clear plan, professional marketing, constant communicate. Within two weeks, my house was sold above asking.”</p>
                                                        <div className="space32" />
                                                        <div className="test-images">
                                                            <div className="auhtor-area">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/testimonial/testimonial-img2.png" alt="housebox" />
                                                                </div>
                                                                <div className="text">
                                                                    <Link href="#">Shakib Mahmud</Link>
                                                                    <div className="space10" />
                                                                    <p>Happy Client</p>
                                                                </div>
                                                            </div>
                                                            <img src="/assets/img/elements/brand1.png" alt="housebox" className="brand1" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-box">
                                                        <img src="/assets/img/icons/quoto-icon1.svg" alt="housebox" />
                                                        <div className="space16" />
                                                        <p>"Selling our home felt like a huge challenge until we found. Their team guided us every step of the way, from staging the property to negotiating offers. Within days, our home was sold for more than we expected."</p>
                                                        <div className="space32" />
                                                        <div className="test-images">
                                                            <div className="auhtor-area">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/testimonial/testimonial-img3.png" alt="housebox" />
                                                                </div>
                                                                <div className="text">
                                                                    <Link href="#">Xavi Alonso</Link>
                                                                    <div className="space10" />
                                                                    <p>Happy Client</p>
                                                                </div>
                                                            </div>
                                                            <img src="/assets/img/elements/brand1.png" alt="housebox" className="brand1" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-box">
                                                        <img src="/assets/img/icons/quoto-icon1.svg" alt="housebox" />
                                                        <div className="space16" />
                                                        <p>"We were first-time buyers, and the process seemed daunting. made everything so simple and stress-free. They listened to our needs, showed us perfect options"</p>
                                                        <div className="space32" />
                                                        <div className="test-images">
                                                            <div className="auhtor-area">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/testimonial/testimonial-img4.png" alt="housebox" />
                                                                </div>
                                                                <div className="text">
                                                                    <Link href="#">Granit Xhaka</Link>
                                                                    <div className="space10" />
                                                                    <p>Happy Client</p>
                                                                </div>
                                                            </div>
                                                            <img src="/assets/img/elements/brand1.png" alt="housebox" className="brand1" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-box">
                                                        <img src="/assets/img/icons/quoto-icon1.svg" alt="housebox" />
                                                        <div className="space16" />
                                                        <p>"I relocated for work and needed to sell my house quickly. [Your Real Estate Agency] delivered! They handled everything smoothly, and I could focus on my move without worry. I highly recommend their services."</p>
                                                        <div className="space32" />
                                                        <div className="test-images">
                                                            <div className="auhtor-area">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/testimonial/testimonial-img5.png" alt="housebox" />
                                                                </div>
                                                                <div className="text">
                                                                    <Link href="#">Alex Garcia</Link>
                                                                    <div className="space10" />
                                                                    <p>Happy Client</p>
                                                                </div>
                                                            </div>
                                                            <img src="/assets/img/elements/brand1.png" alt="housebox" className="brand1" />
                                                        </div>
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== TESTIMONIAL AREA ENDS =======*/}
                    {/*===== WORKS AREA STARTS =======*/}
                    <div className="faq-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading1 text-center space-margin60">
                                        <h5>FAQ,s</h5>
                                        <div className="space20" />
                                        <h2>Frequently Asked Question</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="faq-area">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        How do I start the process of buying a home with Housebox?
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        How does Housebox help with selling my property?
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Can I find rental properties on Housebox?
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        How do I know my property is priced correctly?
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        Does Housebox assist with home financing?
                                                    </button>
                                                </h2>
                                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        How can I schedule a property viewing?
                                                    </button>
                                                </h2>
                                                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                        Is there a fee for using Housebox services?
                                                    </button>
                                                </h2>
                                                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== WORKS AREA ENDS =======*/}
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
                                                    <Link href="/sidebar-grid" className="theme-btn1">
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
