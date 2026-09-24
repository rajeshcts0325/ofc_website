"use client";
import Layout from "@/components/layout/Layout";
import BlogSidebar from "@/components/elements/BlogSidebar";
import Link from "next/link";

// Reusable SVG Components
// Breadcrumb arrow icon
const BreadcrumbArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
);

// Search icon for the search bar
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
    </svg>
);

// Calendar icon for dates
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11ZM17 3H21C21.5523 3 22 3.44772 22 4V9H2V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3Z" />
    </svg>
);

// Author icon
const AuthorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 14.0619V20H13V14.0619C16.9463 14.554 20 17.9204 20 22H4C4 17.9204 7.05369 14.554 11 14.0619ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z" />
    </svg>
);

// Read more arrow icon
const ReadMoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z" />
    </svg>
);

// Data for main blog posts
const mainBlogPosts = [
    {
        image: "/assets/img/all-images/blog/blog-img8.png",
        author: "Alex Roy",
        date: "8 December 2024",
        title: "Elevate Your Knowledge, Empower Your Decisions",
        description: "Searching for your dream home, or looking the enhance your living space, we provide expert advice an creative ideas tailored to your.",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img9.png",
        author: "Alex Roy",
        date: "8 December 2024",
        title: "Uncover Market Trends, Lifestyle Tips, And More",
        description: "Discover practical tips, and gain insights that empower you to make confident decisions. From buying and selling to lifestyle inspiration.",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img10.png",
        author: "Alex Roy",
        date: "8 December 2024",
        title: "Your Destination for Property Wisdom And Trends",
        description: "We cover everything from market trends and property investments to home décor and lifestyle tips. Whether you’re planning the buy.",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img8.png",
        author: "Alex Roy",
        date: "8 December 2024",
        title: "Elevate Your Knowledge, Empower Your Decisions",
        description: "Searching for your dream home, or looking the enhance your living space, we provide expert advice an creative ideas tailored to your.",
        link: "/property-details-v1",
        style: { paddingBottom: 0, border: "none" },
    },
];

// Component for rendering main blog posts
const BlogPost = ({ image, author, date, title, description, link, style }: (typeof mainBlogPosts)[0]) => (
    <div className="col-lg-12">
        <div className="blog-details-boxarea" style={style}>
            <div className="img1">
                <img src={image} alt="housebox" />
            </div>
            <div className="content-area">
                <ul className="d-flex gap-3 ps-0">
                    <li>
                        <Link href="#">
                            <AuthorIcon /> By {author}
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <CalendarIcon /> {date}
                        </Link>
                    </li>
                </ul>
                <div className="space24" />
                <Link href={link}>{title}</Link>
                <div className="space16" />
                <p>{description}</p>
                <div className="space24" />
                <Link href={link} className="readmore">
                    learn more <ReadMoreIcon />
                </Link>
            </div>
        </div>
        <div className="space48" />
    </div>
);

export default function Blog() {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            {/* Hero Section */}
            <div className="hero-inner-section-area-sidebar">
                <img src="/assets/img/all-images/hero/hero-img1.png" alt="housebox" className="hero-img1" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-header-area text-center">
                                <Link href="/">
                                    Home <BreadcrumbArrow /> Our Blog
                                </Link>
                                <div className="space24" />
                                <h1>Our Blog</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Section */}
            <div className="blog-inner-section sp1">
                <div className="container">
                    <div className="row">
                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>

                        {/* Main Blog Content */}
                        <div className="col-lg-8">
                            <div className="row">
                                {mainBlogPosts.map((post, index) => (
                                    <BlogPost key={index} {...post} />
                                ))}
                                {/* Pagination */}
                                <div className="col-lg-12">
                                    <div className="pagination-area">
                                        <div className="space60" />
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <Link className="page-link" href="#" aria-label="Previous">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link active" href="#">
                                                        1
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" href="#">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" href="#">
                                                        ....
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" href="#">
                                                        12
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" href="#" aria-label="Next">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta1-section-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="cta-bg-area"
                                style={{
                                    backgroundImage: "url(assets/img/all-images/bg/cta-bg1.png)",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            >
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
        </Layout>
    );
}
