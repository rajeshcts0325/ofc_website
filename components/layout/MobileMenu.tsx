"use client";
import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
  const [isAccordion, setIsAccordion] = useState(0);
  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  return (
    <>
      <div>
        <div className="mobile-header mobile-header1 d-block d-lg-none">
          <div className="container-fluid">
            <div className="col-12">
              <div className="mobile-header-elements">
                <div className="mobile-logo">
                  <Link href="/">
                    <img
                      src="/icons/logo.png"
                      alt="housebox"
                      style={{ width: "130px" }}
                    />
                  </Link>
                </div>
                <div className="mobile-right d-flex gap-1 align-items-center">
                  <Link className="circle-button user-icon" href="/my-profile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_4104_7939)">
                        <path
                          d="M7 0C4.96456 0 3.30859 1.65596 3.30859 3.69141C3.30859 5.72685 4.96456 7.38281 7 7.38281C9.03544 7.38281 10.6914 5.72685 10.6914 3.69141C10.6914 1.65596 9.03544 0 7 0Z"
                          fill="#073B3A"
                        />
                        <path
                          d="M11.5928 9.79439C10.5822 8.76824 9.24243 8.20312 7.82031 8.20312H6.17969C4.75759 8.20312 3.4178 8.76824 2.40718 9.79439C1.4015 10.8155 0.847656 12.1634 0.847656 13.5898C0.847656 13.8164 1.0313 14 1.25781 14H12.7422C12.9687 14 13.1523 13.8164 13.1523 13.5898C13.1523 12.1634 12.5985 10.8155 11.5928 9.79439Z"
                          fill="#073B3A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4104_7939">
                          <rect width={14} height={14} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <Link className="circle-button add-icon" href="/add-property">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_4104_7948)">
                        <path
                          d="M12.75 8.25H8.5C8.36194 8.25 8.25 8.36194 8.25 8.5V12.75C8.25 13.4403 7.69031 14 7 14C6.30969 14 5.75 13.4403 5.75 12.75V8.5C5.75 8.36194 5.63806 8.25 5.5 8.25H1.25C0.559692 8.25 0 7.69031 0 7C0 6.30969 0.559692 5.75 1.25 5.75H5.5C5.63806 5.75 5.75 5.63806 5.75 5.5V1.25C5.75 0.559691 6.30969 -1.66893e-06 7 -1.66893e-06C7.69031 -1.66893e-06 8.25 0.559691 8.25 1.25V5.5C8.25 5.63806 8.36194 5.75 8.5 5.75H12.75C13.4403 5.75 14 6.30969 14 7C14 7.69031 13.4403 8.25 12.75 8.25Z"
                          fill="#073B3A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4104_7948">
                          <rect
                            width={14}
                            height={14}
                            fill="white"
                            transform="matrix(1 0 0 -1 0 14)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <div className="mobile-nav-icon dots-menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 4H21V6H3V4ZM7 19H21V21H7V19ZM3 14H21V16H3V14ZM7 9H21V11H7V9Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-sidebar mobile-sidebar1">
          <div className="logosicon-area">
            <div className="logos">
              <img src="/icons/logo.png" alt="housebox" />
            </div>
            <div className="menu-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
              </svg>
            </div>
          </div>
          <div className="mobile-nav mobile-nav1">
            <ul className="mobile-nav-list nav-list1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Home </Link>
                <span
                  className={`submenu-button ${isAccordion == 1 ? "submenu-opened" : ""}`}
                  onClick={() => handleAccordion(1)}
                >
                  <em></em>
                </span>
                <ul
                  className="sub-menu"
                  style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}
                >
                  <li>
                    <Link href="/">Home One</Link>
                  </li>
                  <li>
                    <Link href="/index2">Home Two</Link>
                  </li>
                  <li>
                    <Link href="/index3">Home Three</Link>
                  </li>
                  <li>
                    <Link href="/index4">Home Four</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">Listing</Link>
                <span
                  className={`submenu-button ${isAccordion == 2 ? "submenu-opened" : ""}`}
                  onClick={() => handleAccordion(2)}
                >
                  <em></em>
                </span>
                <ul
                  className="sub-menu"
                  style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}
                >
                  <li>
                    <Link href="/property-halfmap-grid">
                      Property Half Grid
                    </Link>
                  </li>
                  <li>
                    <Link href="/property-halfmap-list">
                      Property Half Map List
                    </Link>
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
                <Link href="#">Properties</Link>
                <span
                  className={`submenu-button ${isAccordion == 3 ? "submenu-opened" : ""}`}
                  onClick={() => handleAccordion(3)}
                >
                  <em></em>
                </span>
                <ul
                  className="sub-menu"
                  style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}
                >
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
                <Link href="#">Blogs</Link>
                <span
                  className={`submenu-button ${isAccordion == 4 ? "submenu-opened" : ""}`}
                  onClick={() => handleAccordion(4)}
                >
                  <em></em>
                </span>
                <ul
                  className="sub-menu"
                  style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}
                >
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
              <li>
                <Link href="#">Pages</Link>
                <span
                  className={`submenu-button ${isAccordion == 5 ? "submenu-opened" : ""}`}
                  onClick={() => handleAccordion(5)}
                >
                  <em></em>
                </span>
                <ul
                  className="sub-menu"
                  style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}
                >
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
                </ul>
              </li>
              <li>
                <Link href="#">Dashboard</Link>
                <span
                  className={`submenu-button ${isAccordion == 6 ? "submenu-opened" : ""}`}
                  onClick={() => handleAccordion(6)}
                >
                  <em></em>
                </span>
                <ul
                  className="sub-menu"
                  style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}
                >
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
                    <Link href="/my-property">Add Property</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="allmobilesection">
              <Link href="/contact" className="theme-btn1">
                Contact Us{" "}
                <span className="arrow1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="currentColor"
                  >
                    <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                  </svg>
                </span>
                <span className="arrow2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="currentColor"
                  >
                    <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                  </svg>
                </span>
              </Link>
              <div className="single-footer">
                <h3>Contact Info</h3>
                <div className="footer1-contact-info">
                  <div className="contact-info-single">
                    <div className="contact-info-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <Link href="tel:9437046877">+91 94370 46877</Link>
                    </div>
                  </div>
                  <div className="contact-info-single">
                    <div className="contact-info-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <Link href="mailto:ofctechindia@gmail.com">
                        ofctechindia@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="single-footer">
                    <h3>Our Location</h3>
                    <div className="contact-info-single">
                      <div className="contact-info-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                        </svg>
                      </div>
                      <div className="contact-info-text">
                        <Link href="mailto:info@example.com">
                          House No. 11, Arya Bhoomi, Patia , Bhubaneswar –
                          751024
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="single-footer">
                    <h3>Social Links</h3>
                    <div className="social-links-mobile-menu">
                      <ul>
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
                          <Link href="#">
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
