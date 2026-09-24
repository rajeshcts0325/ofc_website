import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import BlogSidebar from "@/components/elements/BlogSidebar";

export default function BlogDetail() {
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
                                            Blog Post Details
                                        </Link>
                                        <div className="space24" />
                                        <h1>Blog Post Details</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== BLOG AREA STARTS =======*/}
                    <div className="blog-inner-section sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <BlogSidebar />
                                </div>
                                <div className="col-lg-8">
                                    <div className="space40 d-lg-none d-block" />
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="blog-post-details-area heading1">
                                                <div className="img1">
                                                    <img src="/assets/img/all-images/blog/blog-img20.png" alt="housebox" />
                                                </div>
                                                <div className="space32" />
                                                <ul className="list-author">
                                                    <li>
                                                        <Link href="#">#BestTechSolution</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={21} viewBox="0 0 16 21" fill="none">
                                                                <path d="M7.08317 12.8894V18.3327H8.9165V12.8894C12.5339 13.3405 15.3332 16.4264 15.3332 20.166H0.666504C0.666504 16.4264 3.46572 13.3405 7.08317 12.8894ZM7.99984 11.916C4.96109 11.916 2.49984 9.45477 2.49984 6.41602C2.49984 3.37727 4.96109 0.916016 7.99984 0.916016C11.0386 0.916016 13.4998 3.37727 13.4998 6.41602C13.4998 9.45477 11.0386 11.916 7.99984 11.916Z" fill="#030E0F" />
                                                            </svg>{" "}
                                                            By Alex Roy <span> | </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                                <path d="M1.6665 9.16732H18.3332V16.6673C18.3332 17.1276 17.9601 17.5007 17.4998 17.5007H2.49984C2.0396 17.5007 1.6665 17.1276 1.6665 16.6673V9.16732ZM14.1665 2.50065H17.4998C17.9601 2.50065 18.3332 2.87375 18.3332 3.33398V7.50065H1.6665V3.33398C1.6665 2.87375 2.0396 2.50065 2.49984 2.50065H5.83317V0.833984H7.49984V2.50065H12.4998V0.833984H14.1665V2.50065Z" fill="#030E0F" />
                                                            </svg>{" "}
                                                            8 December 2024
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="space20" />
                                                <h2>How Choose the Perfect Home Neighborhood For Your Family</h2>
                                                <div className="space18" />
                                                <p>Our blog is your trusted companion for navigating the world of real estate and best home living. From expert market insights an investment strategies to creative home design tips, we provide everything you need to make confident informed decisions.</p>
                                                <div className="space16" />
                                                <p>Whether you're buying your first property, upgrading your space, or exploring the an latest trends, our article are designed to inspire and guide, discover practical advice.</p>
                                                <div className="space30" />
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="space30" />
                                                        <div className="img1">
                                                            <img src="/assets/img/all-images/blog/blog-img16.png" alt="housebox" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="space30" />
                                                        <div className="img1">
                                                            <img src="/assets/img/all-images/blog/blog-img14.png" alt="housebox" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space28" />
                                                <h3>Finding Your Family's Dream Neighborhood</h3>
                                                <div className="space18" />
                                                <p>Finding the perfect neighborhood for your family is about more than just a beautiful home—it’s about the quality of life that surrounds it. The right neighborhood offers the ideal mix of safety, convenience, and amenities that suit your family’s needs.</p>
                                                <div className="row">
                                                    <div className="space20" />
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="list-area">
                                                            <ul>
                                                                <li>
                                                                    <img src="/assets/img/icons/check1.svg" alt="housebox" /> Access To Amenities
                                                                </li>
                                                                <li>
                                                                    <img src="/assets/img/icons/check1.svg" alt="housebox" /> Healthcare Services
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="list-area">
                                                            <ul>
                                                                <li>
                                                                    <img src="/assets/img/icons/check1.svg" alt="housebox" /> Transportation A Commute
                                                                </li>
                                                                <li>
                                                                    <img src="/assets/img/icons/check1.svg" alt="housebox" /> Child-Friendly Environment
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="list-area">
                                                            <ul>
                                                                <li>
                                                                    <img src="/assets/img/icons/check1.svg" alt="housebox" /> A Pet-Friendly Areas
                                                                </li>
                                                                <li>
                                                                    <img src="/assets/img/icons/check1.svg" alt="housebox" /> Climate and Weather
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space60" />
                                                <div className="vide-images">
                                                    <div className="img1">
                                                        <img src="/assets/img/all-images/blog/blog-img21.png" alt="housebox" />
                                                    </div>
                                                    <VideoPopup />
                                                </div>
                                                <div className="space28" />
                                                <h3>What Look for in Community Before You Buy</h3>
                                                <div className="space18" />
                                                <p>Finding your dream home is an exciting milestone, but it’s equally important the find the right location. Start by evaluating the neighborhood’s safety, schools, and home community amenities. A great location means access to essential services grocery.</p>
                                                <div className="space32" />
                                                <div className="tags-social">
                                                    <div className="tags">
                                                        <ul>
                                                            <li>Tags:</li>
                                                            <li>
                                                                <Link href="#">#RealEstateTips</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" className="m-0">
                                                                    #DreamHome
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="social">
                                                        <ul>
                                                            <li>Social:</li>
                                                            <li>
                                                                <Link href="#">
                                                                    <i className="fa-brands fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">
                                                                    <i className="fa-brands fa-instagram" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#">
                                                                    <i className="fa-brands fa-linkedin-in" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" className="m-0">
                                                                    <i className="fa-brands fa-youtube" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="space60" />
                                                <h3>Comments (2)</h3>
                                                <div className="space30" />
                                                <div className="comments-boxarea">
                                                    <div className="comments-boxes">
                                                        <div className="comments-auhtor-box">
                                                            <div className="img3">
                                                                <img src="/assets/img/all-images/blog/blog-img17.png" alt="housebox" />
                                                            </div>
                                                            <div className="content">
                                                                <Link href="#" className="date">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" />
                                                                    </svg>{" "}
                                                                    8 December 2024
                                                                </Link>
                                                                <Link href="#" className="name">
                                                                    Alex Robertson
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <Link href="#" className="reply">
                                                            <i className="fa-solid fa-reply" /> Reply
                                                        </Link>
                                                    </div>
                                                    <div className="space16" />
                                                    <p>Thank you for exploring our properties! We value your feedback questions about our listings. Whether you're interested in scheduling a tour, learning more about our locations, or discovering the amenities we offer, this is the.</p>
                                                </div>
                                                <div className="space30" />
                                                <div className="comments-boxarea box2">
                                                    <div className="comments-boxes">
                                                        <div className="comments-auhtor-box">
                                                            <div className="img3">
                                                                <img src="/assets/img/all-images/blog/blog-img18.png" alt="housebox" />
                                                            </div>
                                                            <div className="content">
                                                                <Link href="#" className="date">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" />
                                                                    </svg>{" "}
                                                                    12 May 2024
                                                                </Link>
                                                                <Link href="#" className="name">
                                                                    Theo Hernandez
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <Link href="#" className="reply">
                                                            <i className="fa-solid fa-reply" /> Reply
                                                        </Link>
                                                    </div>
                                                    <div className="space16" />
                                                    <p>Thank you so much for your interest and thoughtful comment! We’re the thrilled to hear you’re considering our properties and would love to best assist you further. If you’re interested in a specific listing, we’d be happy.</p>
                                                </div>
                                                <div className="space60" />
                                                <h3>Leave A Reply Now</h3>
                                                <div className="space32" />
                                                <div className="contact-boxarea">
                                                    <h3>Send Us A Message</h3>
                                                    <div className="space8" />
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="input-area">
                                                                <input type="text" placeholder="Your Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="input-area">
                                                                <input type="email" placeholder="Email Address" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-area">
                                                                <textarea placeholder="Your Message" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="space4" />
                                                            <div className="input-area">
                                                                <button type="submit" className="theme-btn1">
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
                                                                </button>
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
                    <div className="blog-bottom-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading1 text-center space-margin60">
                                        <h2>Read More Recent Blogs</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="blog-single-boxarea">
                                        <div className="img1 image-anime">
                                            <img src="/assets/img/all-images/blog/blog-img12.png" alt="housebox" />
                                        </div>
                                        <div className="content-area">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M1.6665 9.16732H18.3332V16.6673C18.3332 17.1276 17.9601 17.5007 17.4998 17.5007H2.49984C2.0396 17.5007 1.6665 17.1276 1.6665 16.6673V9.16732ZM14.1665 2.50065H17.4998C17.9601 2.50065 18.3332 2.87375 18.3332 3.33398V7.50065H1.6665V3.33398C1.6665 2.87375 2.0396 2.50065 2.49984 2.50065H5.83317V0.833984H7.49984V2.50065H12.4998V0.833984H14.1665V2.50065Z" fill="#030E0F" />
                                                        </svg>{" "}
                                                        11 December 2024
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={21} viewBox="0 0 16 21" fill="none">
                                                            <path d="M7.08317 12.8894V18.3327H8.9165V12.8894C12.5339 13.3405 15.3332 16.4264 15.3332 20.166H0.666504C0.666504 16.4264 3.46572 13.3405 7.08317 12.8894ZM7.99984 11.916C4.96109 11.916 2.49984 9.45477 2.49984 6.41602C2.49984 3.37727 4.96109 0.916016 7.99984 0.916016C11.0386 0.916016 13.4998 3.37727 13.4998 6.41602C13.4998 9.45477 11.0386 11.916 7.99984 11.916Z" fill="#030E0F" />
                                                        </svg>{" "}
                                                        By Alex Roy
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="space14" />
                                            <Link href="#" className="head">
                                                Discover the Latest Trends Real Estate An Home Living Insights
                                            </Link>
                                            <div className="space20" />
                                            <Link href="#" className="readmore">
                                                learn more{" "}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="blog-single-boxarea">
                                        <div className="img1 image-anime">
                                            <img src="/assets/img/all-images/blog/blog-img13.png" alt="housebox" />
                                        </div>
                                        <div className="content-area">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M1.6665 9.16732H18.3332V16.6673C18.3332 17.1276 17.9601 17.5007 17.4998 17.5007H2.49984C2.0396 17.5007 1.6665 17.1276 1.6665 16.6673V9.16732ZM14.1665 2.50065H17.4998C17.9601 2.50065 18.3332 2.87375 18.3332 3.33398V7.50065H1.6665V3.33398C1.6665 2.87375 2.0396 2.50065 2.49984 2.50065H5.83317V0.833984H7.49984V2.50065H12.4998V0.833984H14.1665V2.50065Z" fill="#030E0F" />
                                                        </svg>{" "}
                                                        12 December 2024
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={21} viewBox="0 0 16 21" fill="none">
                                                            <path d="M7.08317 12.8894V18.3327H8.9165V12.8894C12.5339 13.3405 15.3332 16.4264 15.3332 20.166H0.666504C0.666504 16.4264 3.46572 13.3405 7.08317 12.8894ZM7.99984 11.916C4.96109 11.916 2.49984 9.45477 2.49984 6.41602C2.49984 3.37727 4.96109 0.916016 7.99984 0.916016C11.0386 0.916016 13.4998 3.37727 13.4998 6.41602C13.4998 9.45477 11.0386 11.916 7.99984 11.916Z" fill="#030E0F" />
                                                        </svg>{" "}
                                                        By Alex Roy
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="space14" />
                                            <Link href="#" className="head">
                                                Explore Property News Lifestyle Tips to Inspire Your Next Move
                                            </Link>
                                            <div className="space20" />
                                            <Link href="#" className="readmore">
                                                learn more{" "}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="blog-single-boxarea">
                                        <div className="img1 image-anime">
                                            <img src="/assets/img/all-images/blog/blog-img14.png" alt="housebox" />
                                        </div>
                                        <div className="content-area">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M1.6665 9.16732H18.3332V16.6673C18.3332 17.1276 17.9601 17.5007 17.4998 17.5007H2.49984C2.0396 17.5007 1.6665 17.1276 1.6665 16.6673V9.16732ZM14.1665 2.50065H17.4998C17.9601 2.50065 18.3332 2.87375 18.3332 3.33398V7.50065H1.6665V3.33398C1.6665 2.87375 2.0396 2.50065 2.49984 2.50065H5.83317V0.833984H7.49984V2.50065H12.4998V0.833984H14.1665V2.50065Z" fill="#030E0F" />
                                                        </svg>{" "}
                                                        13 December 2024
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={21} viewBox="0 0 16 21" fill="none">
                                                            <path d="M7.08317 12.8894V18.3327H8.9165V12.8894C12.5339 13.3405 15.3332 16.4264 15.3332 20.166H0.666504C0.666504 16.4264 3.46572 13.3405 7.08317 12.8894ZM7.99984 11.916C4.96109 11.916 2.49984 9.45477 2.49984 6.41602C2.49984 3.37727 4.96109 0.916016 7.99984 0.916016C11.0386 0.916016 13.4998 3.37727 13.4998 6.41602C13.4998 9.45477 11.0386 11.916 7.99984 11.916Z" fill="#030E0F" />
                                                        </svg>{" "}
                                                        By Alex Roy
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="space14" />
                                            <Link href="#" className="head">
                                                From Buying Guides The Market Trend-Your Real Estate Question{" "}
                                            </Link>
                                            <div className="space20" />
                                            <Link href="#" className="readmore">
                                                learn more{" "}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== BLOG AREA ENDS =======*/}
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
                                                    <Link href="/" className="theme-btn1">
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
