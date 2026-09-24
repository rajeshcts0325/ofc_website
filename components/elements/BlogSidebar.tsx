"use client";
import Link from "next/link";

// Reusable SVG Components (assumed to be imported or defined elsewhere)
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
    </svg>
);

const BreadcrumbArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
);

// Data for blog categories
const blogCategories = [
    { name: "Home Buying Tips", count: 12 },
    { name: "Home Selling Advice", count: 34 },
    { name: "Interior Design Décor", count: 12 },
    { name: "Lifestyle And Living", count: 34 },
    { name: "Property Investment", count: 16 },
    { name: "Neighborhood Guides", count: 12 },
];

// Data for featured posts
const featuredPosts = [
    {
        image: "/assets/img/all-images/blog/blog-img4.png",
        date: "8 December 2024",
        title: "5 Tips Find Your Dream Home Without An Stress Know Budget",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img5.png",
        date: "8 December 2024",
        title: "The Power of Content Marketing How to Drive...",
        link: "/property-details-v1",
    },
    {
        image: "/assets/img/all-images/blog/blog-img6.png",
        date: "8 December 2024",
        title: "The Power of Social Media Marketing: How to Build Your...",
        link: "/#",
    },
    {
        image: "/assets/img/all-images/blog/blog-img7.png",
        date: "8 December 2024",
        title: "Social Media Marketing Strategies Drive Engagement...",
        link: "/property-details-v1",
    },
];

// Component for rendering featured posts (assumed to be imported or defined here)
const FeaturedPost = ({ image, date, title, link }: (typeof featuredPosts)[0]) => (
    <div className="post-auhtor-area">
        <div className="img1">
            <img src={image} alt="housebox" />
        </div>
        <div className="content">
            <Link href="#" className="date">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11ZM17 3H21C21.5523 3 22 3.44772 22 4V9H2V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3Z" />
                </svg>{" "}
                {date}
            </Link>
            <Link href={link} className="head">
                {title}
            </Link>
        </div>
    </div>
);

// BlogSidebar Component
export default function BlogSidebar() {
    return (
        <div className="blog-siderbar">
            <div className="all-category">
                {/* Search Area */}
                <div className="search-area">
                    <h3>Search Blog</h3>
                    <div className="space24" />
                    <form>
                        <input type="text" placeholder="Search..." />
                        <button>
                            <SearchIcon />
                        </button>
                    </form>
                </div>
                <div className="space30" />

                {/* Blog Categories */}
                <div className="categories-area">
                    <h3>Blog Category</h3>
                    <ul className="ps-0">
                        {blogCategories.map((category, index) => (
                            <li key={index}>
                                <Link href="#">
                                    {category.name} ({category.count}) <BreadcrumbArrow />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space30" />

                {/* Featured Posts */}
                <div className="posts-area">
                    <h3>Featured Post</h3>
                    {featuredPosts.map((post, index) => (
                        <FeaturedPost key={index} {...post} />
                    ))}
                </div>
                <div className="space30" />

                {/* Popular Tags */}
                <div className="tags-area">
                    <h3>Popular Tags</h3>
                    <div className="space12" />
                    <div className="d-flex gap-1 flex-wrap">
                        <Link href="#">#RealEstateTips</Link>
                        <Link href="#">#SustainableLiving</Link>
                        <Link href="#">#NeighborhoodGuide</Link>
                        <Link href="#">#DreamHome</Link>
                        <Link href="#">#CommunityLiving</Link>
                        <Link href="#">#UrbanHomes</Link>
                        <Link href="#">#HomeOwnership</Link>
                        <Link href="#">#FutureHomes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
