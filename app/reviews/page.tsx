import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Reviews() {
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
                                            Reviews
                                        </Link>
                                        <div className="space24" />
                                        <h1>Reviews</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== DASHBOARD AREA STARTS =======*/}
                    <div className="dashboard-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="heading1">
                                        <h2>All Reviews</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4" />
                                <div className="col-lg-4">
                                    <div className="reviews">
                                        <div className="filter-group me-3">
                                            <select>
                                                <option>Show:(12)</option>
                                                <option>Show:(30)</option>
                                                <option>Show:(50)</option>
                                            </select>
                                        </div>
                                        <div className="filter-group">
                                            <select>
                                                <option>Sort by (Default)</option>
                                                <option>Oldest</option>
                                                <option>Newest</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="space30" />
                                    <div className="dashboard-info-sider-deatils">
                                        <div className="dashboard-info-sider">
                                            <div className="message-boxarea">
                                                <div className="img1">
                                                    <img src="/assets/img/all-images/others/dash-img5.png" alt="housebox" />
                                                </div>
                                                <div className="conatent-area">
                                                    <div className="content">
                                                        <Link href="#">Henry Nicolas</Link>
                                                        <p>3 Days Ago</p>
                                                    </div>
                                                    <div className="space14" />
                                                    <p>We're excited to help you find the perfect neighborhood and home for your family Let us know how.</p>
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="message-boxarea">
                                                <div className="space32" />
                                                <div className="img1">
                                                    <img src="/assets/img/all-images/others/dash-img6.png" alt="housebox" />
                                                </div>
                                                <div className="conatent-area">
                                                    <div className="content">
                                                        <Link href="#">Kane Williamson</Link>
                                                        <p>3 Days Ago</p>
                                                    </div>
                                                    <div className="space14" />
                                                    <p>Thank you for reaching out! We’re here to guiding you every step of the way in finding the idea home.</p>
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="message-boxarea">
                                                <div className="space32" />
                                                <div className="img1">
                                                    <img src="/assets/img/all-images/others/dash-img7.png" alt="housebox" />
                                                </div>
                                                <div className="conatent-area">
                                                    <div className="content">
                                                        <Link href="#">Marting Guptil</Link>
                                                        <p>3 Days Ago</p>
                                                    </div>
                                                    <div className="space14" />
                                                    <p>Finding the perfect place to call home is a journey worth taking, Explore our listings, resources.</p>
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="message-boxarea">
                                                <div className="space32" />
                                                <div className="img1">
                                                    <img src="/assets/img/all-images/others/dash-img8.png" alt="housebox" />
                                                </div>
                                                <div className="conatent-area">
                                                    <div className="content">
                                                        <Link href="#">Gleen Philips</Link>
                                                        <p>3 Days Ago</p>
                                                    </div>
                                                    <div className="space14" />
                                                    <p>We hope your home search is the going smoothly! If you have any question need more information.</p>
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="message-boxarea" style={{ borderBottom: "none", padding: 0 }}>
                                                <div className="space32" />
                                                <div className="img1">
                                                    <img src="/assets/img/all-images/others/dash-img9.png" alt="housebox" />
                                                </div>
                                                <div className="conatent-area">
                                                    <div className="content">
                                                        <Link href="#">Trent Boult</Link>
                                                        <p>3 Days Ago</p>
                                                    </div>
                                                    <div className="space14" />
                                                    <p>We hope your home search is the going smoothly! If you have any question need more information.</p>
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="pagination-area">
                                        <div className="space30" />
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination" style={{ justifyContent: "start" }}>
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
                    {/*===== DASHBOARD AREA ENDS =======*/}
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
