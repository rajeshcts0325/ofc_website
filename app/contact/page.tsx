import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Contact() {
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
                                            Contact Us{" "}
                                        </Link>
                                        <div className="space24" />
                                        <h1>Contact Us </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== CONTACT AREA STARTS =======*/}
                    <div className="contact-inner-section sp1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="heading1">
                                        <h5>Contact Us</h5>
                                        <div className="space32" />
                                        <h2>Let’s Start the Conversation</h2>
                                        <div className="space24" />
                                        <p>At Housebox, we value communication and are here to assist with all your real estate needs. Whether you’re buying, selling, renting, or managing a property, our dedicated team is ready to provide guidance and support. Reach out to us via phone, email, or visit our office—we’re here to make your real estate journey as smooth and successful as possible. Let’s turn your property goals into reality!</p>
                                        <div className="space40" />
                                        <div className="number-address-area">
                                            <div className="phone-number">
                                                <div className="img1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                    <p>Phone Number</p>
                                                    <Link href="tel:123-456-7890">123-456-7890</Link>
                                                </div>
                                            </div>
                                            <div className="phone-number m-0">
                                                <div className="img1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                    <p>Email Address</p>
                                                    <Link href="mailto:Infoseoc@gmail.com">housebox@gmail.com</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space32" />
                                        <div className="number-address-area2">
                                            <div className="phone-number">
                                                <div className="img1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                    <Link href="#">
                                                        8708 Technology Forest Pl Suite <br className="d-lg-block d-none" /> 125 -G, The Woodlands, TX 773
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="phone-number">
                                                <Link href="https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu" className="map" target="_blank">
                                                    View Our Map
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="space40" />
                                        <div className="social">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-youtube" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1" />
                                <div className="col-lg-5">
                                    <div className="contact-form-area">
                                        <h4>Get In Touch</h4>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="input-area">
                                                    <input type="text" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-area">
                                                    <input type="text" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-area">
                                                    <input type="email" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-area">
                                                    <input type="number" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-area">
                                                    <textarea placeholder="Your Message" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-area">
                                                    <button type="submit" className="theme-btn1">
                                                        Send Now{" "}
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
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="location-section-area sp2" style={{ backgroundImage: "url(assets/img/all-images/bg/bg1.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 m-auto">
                                    <div className="heading1 text-center space-margin60">
                                        <h5>Location</h5>
                                        <div className="space20" />
                                        <h2>Our Location</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="location-boxes">
                                        <div className="img1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
                                            </svg>
                                        </div>
                                        <div className="space32" />
                                        <Link href="#">
                                            San Francisco <br className="d-lg-block d-none" />
                                            1446 Vorwuw Parkway
                                        </Link>
                                        <div className="space24" />
                                        <p>Phone Number</p>
                                        <Link href="tel:123-456-7890">123-456-7890</Link>
                                        <div className="space32" />
                                        <Link href="https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu" className="map" target="_blank">
                                            View Our Map
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="location-boxes">
                                        <div className="img1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
                                            </svg>
                                        </div>
                                        <div className="space32" />
                                        <Link href="#">
                                            Chicago <br className="d-lg-block d-none" />
                                            1849 Usavom View
                                        </Link>
                                        <div className="space24" />
                                        <p>Phone Number</p>
                                        <Link href="tel:123-456-7890">123-456-7890</Link>
                                        <div className="space32" />
                                        <Link href="https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu" className="map" target="_blank">
                                            View Our Map
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="location-boxes">
                                        <div className="img1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
                                            </svg>
                                        </div>
                                        <div className="space32" />
                                        <Link href="#">
                                            Boston <br className="d-lg-block d-none" />
                                            1660 Dodgig Place
                                        </Link>
                                        <div className="space24" />
                                        <p>Phone Number</p>
                                        <Link href="tel:123-456-7890">123-456-7890</Link>
                                        <div className="space32" />
                                        <Link href="https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu" className="map" target="_blank">
                                            View Our Map
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                    {/*===== CONTACT AREA ENDS =======*/}
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
