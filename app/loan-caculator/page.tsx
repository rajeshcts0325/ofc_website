import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function LoanCalculator() {
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
                                            Tools{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                            </svg>{" "}
                                            Loan Caculator{" "}
                                        </Link>
                                        <div className="space24" />
                                        <h1>Loan Caculator</h1>
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
                                <div className="col-lg-10 mx-auto">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="contact-form-area">
                                                <h4>How much do I pay monthly?</h4>
                                                <div className="space16" />
                                                <p>Calculate approximately how much you pay monthly according to your loan amount, loan period and interest rate.</p>
                                                <hr />
                                                <div className="space24" />
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <p className="fs-14 fw-semibold">Interest rate</p>
                                                        <p className="fs-14 neutral-500">Enter a value between 1 and 12.5</p>
                                                        <div className="input-area">
                                                            <input className="mt-12" type="number" placeholder="7.99%" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-24">
                                                        <p className="fs-14 fw-semibold">Loan amount</p>
                                                        <p className="fs-14 neutral-500">Enter a value between 0 and 9999 USD</p>
                                                        <div className="input-area">
                                                            <input className="mt-12" type="number" placeholder="6000 USD" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-24">
                                                        <p className="fs-14 fw-semibold">Loan period (month)</p>
                                                        <p className="fs-14 neutral-500">Enter a value between 1 and 120</p>
                                                        <div className="input-area">
                                                            <input className="mt-12" type="number" placeholder="24 months" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-24">
                                                        <p className="fs-14 fw-semibold">Repayment month</p>
                                                        <p className="fs-14 neutral-500">Enter a value between 1 and 120</p>
                                                        <div className="input-area">
                                                            <input className="mt-12" type="number" placeholder="12 months" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-area">
                                                            <button type="submit" className="theme-btn1">
                                                                Caculate Now{" "}
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
                                        <div className="col-lg-6">
                                            <div className="contact-form-area mb-4">
                                                <h4>Summary</h4>
                                                <div className="space16" />
                                                <p className="neutral-500">Outstanding balance</p>
                                                <h5 className="fw-semibold">2,680 USD</h5>
                                                <div className="space16" />
                                                <p className="neutral-500">Monthly repayment amount</p>
                                                <h5 className="fw-semibold">40,348 USD</h5>
                                                <div className="space16" />
                                                <p className="neutral-500">Total interest payable</p>
                                                <h5 className="fw-semibold">870,203 USD</h5>
                                                <div className="space16" />
                                                <hr />
                                                <div className="space16" />
                                                <div className="d-flex align-items-center gap-4">
                                                    <Link href="/contact" className="theme-btn1">
                                                        Download PDF{" "}
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
                                                    <Link href="https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu" className="link-big" target="_blank">
                                                        Contact Us
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="contact-form-area mb-5">
                                                <h4>Legal Fees &amp; Stamp Duty</h4>
                                                <div className="space24" />
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Expense</th>
                                                                <th scope="col">Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Sale &amp; Purchase Agreement Costs</td>
                                                                <td>250 USD</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>Loan Documentation Costs</td>
                                                                <td>480 USD</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td>Downpayment</td>
                                                                <td>170 USD</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" />
                                                                <td>Total</td>
                                                                <td>
                                                                    <span className="fw-semibold">900 USD</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
