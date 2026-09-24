import Link from "next/link";

export default function Blog() {
    return (
        <>
            <div className="blog2-section-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="heading1 text-center space-margin60">
                                <h5 data-aos="fade-left" data-aos-duration={800}>
                                    Latest Blog Posts
                                </h5>
                                <div className="space20" />
                                <h2 className="text-anime-style-3">Our Real Estate Updates</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="blog-single-boxarea">
                                <div className="img1 image-anime">
                                    <img src="/assets/img/all-images/blog/blog-img1.png" alt="housebox" />
                                </div>
                                <div className="content-area">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                    <path d="M1.6665 9.16732H18.3332V16.6673C18.3332 17.1276 17.9601 17.5007 17.4998 17.5007H2.49984C2.0396 17.5007 1.6665 17.1276 1.6665 16.6673V9.16732ZM14.1665 2.50065H17.4998C17.9601 2.50065 18.3332 2.87375 18.3332 3.33398V7.50065H1.6665V3.33398C1.6665 2.87375 2.0396 2.50065 2.49984 2.50065H5.83317V0.833984H7.49984V2.50065H12.4998V0.833984H14.1665V2.50065Z" fill="#030E0F" />
                                                </svg>{" "}
                                                8 December 2024
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
                                    <Link href="/blog-detail" className="head">
                                        5 Tips Find Your Dream Home Without An Stress Know Budget
                                    </Link>
                                    <div className="space20" />
                                    <Link href="/blog-detail" className="readmore">
                                        learn more{" "}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1000}>
                            <div className="blog-single-boxarea">
                                <div className="img1 image-anime">
                                    <img src="/assets/img/all-images/blog/blog-img2.png" alt="housebox" />
                                </div>
                                <div className="content-area">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                    <path d="M1.6665 9.16732H18.3332V16.6673C18.3332 17.1276 17.9601 17.5007 17.4998 17.5007H2.49984C2.0396 17.5007 1.6665 17.1276 1.6665 16.6673V9.16732ZM14.1665 2.50065H17.4998C17.9601 2.50065 18.3332 2.87375 18.3332 3.33398V7.50065H1.6665V3.33398C1.6665 2.87375 2.0396 2.50065 2.49984 2.50065H5.83317V0.833984H7.49984V2.50065H12.4998V0.833984H14.1665V2.50065Z" fill="#030E0F" />
                                                </svg>{" "}
                                                8 December 2024
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
                                    <Link href="/blog-detail" className="head">
                                        How Choose the Perfect Home Neighborhood For Your Family
                                    </Link>
                                    <div className="space20" />
                                    <Link href="/blog-detail" className="readmore">
                                        learn more{" "}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1200}>
                            <div className="blog-single-boxarea">
                                <div className="img1 image-anime">
                                    <img src="/assets/img/all-images/blog/blog-img3.png" alt="housebox" />
                                </div>
                                <div className="content-area">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                    <path d="M1.6665 9.16732H18.3332V16.6673C18.3332 17.1276 17.9601 17.5007 17.4998 17.5007H2.49984C2.0396 17.5007 1.6665 17.1276 1.6665 16.6673V9.16732ZM14.1665 2.50065H17.4998C17.9601 2.50065 18.3332 2.87375 18.3332 3.33398V7.50065H1.6665V3.33398C1.6665 2.87375 2.0396 2.50065 2.49984 2.50065H5.83317V0.833984H7.49984V2.50065H12.4998V0.833984H14.1665V2.50065Z" fill="#030E0F" />
                                                </svg>{" "}
                                                8 December 2024
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
                                    <Link href="/blog-detail" className="head">
                                        Common Homebuyer Mistakes And How To Home Avoid Them
                                    </Link>
                                    <div className="space20" />
                                    <Link href="/blog-detail" className="readmore">
                                        learn more{" "}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
