import Link from "next/link";
export default function Header4({ scroll, isMobileMenu, handleMobileMenu }: any) {
    return (
        <>
            <header>
                <div className="header-area homepage4 header header-sticky d-none d-lg-block " id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/">
                                            <img src="/assets/img/logo/logo5.png" alt="housebox" />
                                        </Link>
                                    </div>
                                    <div className="main-menu">
                                        <ul>
                                            <li>
                                                <Link href="#" className="plus">
                                                    Home <i className="fa-solid fa-angle-down" />
                                                </Link>
                                                <div className="tp-submenu">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="all-images-menu">
                                                                <div className="images">
                                                                    <div className="homemenu-thumb">
                                                                        <div className="img1">
                                                                            <img src="/assets/img/all-images/demo/demo-img1.png" alt="housebox" />
                                                                        </div>
                                                                        <div className="homemenu-btn">
                                                                            <Link className="theme-btn5" href="/">
                                                                                View Demo
                                                                                <span className="arrow1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                                <span className="arrow2">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="homemenu-content">
                                                                            <Link href="/">Housebox - Homepage 01</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="images">
                                                                    <div className="homemenu-thumb">
                                                                        <div className="img1">
                                                                            <img src="/assets/img/all-images/demo/demo-img2.png" alt="housebox" />
                                                                        </div>
                                                                        <div className="homemenu-btn">
                                                                            <Link className="theme-btn5" href="/index2">
                                                                                {" "}
                                                                                View Demo
                                                                                <span className="arrow1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                                <span className="arrow2">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="homemenu-content">
                                                                            <Link href="/index2">Housebox - Homepage 02</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="images">
                                                                    <div className="homemenu-thumb">
                                                                        <div className="img1">
                                                                            <img src="/assets/img/all-images/demo/demo-img3.png" alt="housebox" />
                                                                        </div>
                                                                        <div className="homemenu-btn">
                                                                            <Link className="theme-btn5" href="/index3">
                                                                                View Demo
                                                                                <span className="arrow1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                                <span className="arrow2">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="homemenu-content">
                                                                            <Link href="/index3">Housebox - Homepage 03</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="images">
                                                                    <div className="homemenu-thumb">
                                                                        <div className="img1">
                                                                            <img src="/assets/img/all-images/demo/demo-img4.png" alt="housebox" />
                                                                        </div>
                                                                        <div className="homemenu-btn">
                                                                            <Link className="theme-btn5" href="/index4">
                                                                                View Demo
                                                                                <span className="arrow1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                                <span className="arrow2">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="homemenu-content">
                                                                            <Link href="/index4">Housebox - Homepage 04</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="#" className="plus">
                                                    Pages <i className="fa-solid fa-angle-down" />
                                                </Link>
                                                <ul className="dropdown-padding">
                                                    <li>
                                                        <Link href="/about-us">About Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/our-service">Our Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/pricing">Pricing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contact">Contact Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/faq">FAQ's</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/loan-caculator">Loan Calculator</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="#" className="plus">
                                                    Listing <i className="fa-solid fa-angle-down" />
                                                </Link>
                                                <ul className="dropdown-padding">
                                                    <li>
                                                        <Link href="/property-halfmap-grid">Property Half Grid</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/property-halfmap-list">Property Half Map List</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/topmap-grid">Property Top Map Grid</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/topmap-list">Property Top Map List</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/sidebar-grid">Find Sidebar Grid</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/sidebar-list">Find Sidebar List</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/contact" className="plus">
                                                    Properties <i className="fa-solid fa-angle-down" />
                                                </Link>
                                                <ul className="dropdown-padding">
                                                    <li>
                                                        <Link href="/property-details-v1">Property Details 01</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/property-details-v2">Property Details 02</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/property-details-v3">Property Details 03</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/property-details-v4">Property Details 04</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="#" className="plus">
                                                    Dashboard <i className="fa-solid fa-angle-down" />
                                                </Link>
                                                <ul className="dropdown-padding">
                                                    <li>
                                                        <Link href="/dashboard">Dashboard</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/my-property">My Properties</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/message">Message</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/my-favorites">My Favourites</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/reviews">Reviews</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/my-profile">My Propfile</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/add-property">Add Property</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="#" className="plus">
                                                    Blogs <i className="fa-solid fa-angle-down" />
                                                </Link>
                                                <ul className="dropdown-padding">
                                                    <li>
                                                        <Link href="/blog">Blog Default</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-grid">Blog Grid</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-detail">Blog Post Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-area">
                                        <div className="search-icon header__search header-search-btn">
                                            <Link href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                        <Link href="/sidebar-grid" className="theme-btn5">
                                            View Listing{" "}
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
            </header>
        </>
    );
}
