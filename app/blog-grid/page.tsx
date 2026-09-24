"use client";
import Layout from "@/components/layout/Layout";

import Link from "next/link";

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
        <path d="M1.6665 9.16732H18.3332V16.6673C18.3332 17.1276 17.9601 17.5007 17.4998 17.5007H2.49984C2.0396 17.5007 1.6665 17.1276 1.6665 16.6673V9.16732ZM14.1665 2.50065H17.4998C17.9601 2.50065 18.3332 2.87375 18.3332 3.33398V7.50065H1.6665V3.33398C1.6665 2.87375 2.0396 2.50065 2.49984 2.50065H5.83317V0.833984H7.49984V2.50065H12.4998V0.833984H14.1665V2.50065Z" fill="#030E0F" />
    </svg>
);

const AuthorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={21} viewBox="0 0 16 21" fill="none">
        <path d="M7.08317 12.8894V18.3327H8.9165V12.8894C12.5339 13.3405 15.3332 16.4264 15.3332 20.166H0.666504C0.666504 16.4264 3.46572 13.3405 7.08317 12.8894ZM7.99984 11.916C4.96109 11.916 2.49984 9.45477 2.49984 6.41602C2.49984 3.37727 4.96109 0.916016 7.99984 0.916016C11.0386 0.916016 13.4998 3.37727 13.4998 6.41602C13.4998 9.45477 11.0386 11.916 7.99984 11.916Z" fill="#030E0F" />
    </svg>
);

const ReadMoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z" />
    </svg>
);

const BreadcrumbArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
);

const blogPosts = [
    {
        image: "/assets/img/all-images/blog/blog-img1.png",
        date: "8 December 2024",
        author: "Alex Roy",
        title: "5 Tips Find Your Dream Home Without An Stress Know Budget",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img2.png",
        date: "9 December 2024",
        author: "Alex Roy",
        title: "How Choose the Perfect Home Neighborhood For Your Family",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img3.png",
        date: "10 December 2024",
        author: "Alex Roy",
        title: "Common Homebuyer Mistakes And How To Home Avoid Them",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img12.png",
        date: "11 December 2024",
        author: "Alex Roy",
        title: "Discover the Latest Trends Real Estate An Home Living Insights",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img13.png",
        date: "12 December 2024",
        author: "Alex Roy",
        title: "Explore Property News Lifestyle Tips to Inspire Your Next Move",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img14.png",
        date: "13 December 2024",
        author: "Alex Roy",
        title: "From Buying Guides The Market Trend-Your Real Estate Question",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img15.png",
        date: "14 December 2024",
        author: "Alex Roy",
        title: "Making Real Estate Simple HouseThrough Knowledge and Stories",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img16.png",
        date: "15 December 2024",
        author: "Alex Roy",
        title: "Making Real Estate Simple HomeThrough Knowledge and Stories",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img19.png",
        date: "16 December 2024",
        author: "Alex Roy",
        title: "Discover Expert Tips Strategies for Every Step of Your Journey",
        link: "/property-details-v1",
    },
];

// Blog post component
const BlogPost = ({ image, date, author, title, link }: (typeof blogPosts)[0]) => (
    <div className="col-lg-4 col-md-6">
        <div className="blog-single-boxarea">
            <div className="img1 image-anime">
                <img src={image} alt="housebox" />
            </div>
            <div className="content-area">
                <ul>
                    <li>
                        <Link href="#">
                            <CalendarIcon /> {date}
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <AuthorIcon /> By {author}
                        </Link>
                    </li>
                </ul>
                <div className="space14" />
                <Link href={link} className="head">
                    {title}
                </Link>
                <div className="space20" />
                <Link href={link} className="readmore">
                    learn more <ReadMoreIcon />
                </Link>
            </div>
        </div>
    </div>
);

export default function BlogGrid() {
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

            {/* Blog Grid Section */}
            <div className="blog-grid-section-area sp1">
                <div className="container">
                    <div className="row">
                        {blogPosts.map((post, index) => (
                            <BlogPost key={index} {...post} />
                        ))}
                        <div className="col-lg-12">
                            <div className="space30" />
                            <div className="pagination-area">
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
