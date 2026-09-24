
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Pricing() {

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
										<Link href="/">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
										</svg> Listing <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
											</svg> Our Pricing Plan</Link>
										<div className="space24" />
										<h1>Our Pricing Plan</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== PRICING AREA STARTS =======*/}
					<div className="pricing-inner-section sp8">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading1 text-center space-margin60">
										<h5>Pricing Plan</h5>
										<div className="space20" />
										<h2>Choose Your Plan</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-8 m-auto">
									<div className="pricing-main-boxarea">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="price-area">
													<h5>Basic</h5>
													<div className="space24" />
													<h2>$99<span>/Per Listing</span></h2>
													<div className="space16" />
													<p>Perfect for homeowners looking to <br className="d-lg-block d-none" /> sell or rent their property.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/contact" className="theme-btn1">View Listing <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
															<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
														</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
															<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
														</svg></span></Link>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="price-listarea">
													<h3>Our Features</h3>
													<ul>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Property Listing on Housebox</li>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Professional Photography</li>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Access to Buyer &amp; Tenant Network</li>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Support via Email &amp; Phone</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="pricing-main-boxarea">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="price-area">
													<h5>Premium Plan</h5>
													<div className="space24" />
													<h2>$199<span>/Per Listing</span></h2>
													<div className="space16" />
													<p>Ideal for clients who want expert <br className="d-lg-block d-none" /> assistance throughout the process.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/contact" className="theme-btn1">View Listing <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
															<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
														</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
															<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
														</svg></span></Link>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="price-listarea">
													<h3>Our Features</h3>
													<ul>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Everything in Basic Plan</li>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Property Valuation Services</li>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Enhanced Property Marketing</li>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Dedicated Agent Support</li>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Featured Listing Maximum Exposure</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="pricing-main-boxarea">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="price-area">
													<h5>Ultimate Plan</h5>
													<div className="space24" />
													<h2>$99<span>/Per Listing</span></h2>
													<div className="space16" />
													<p>Designed for investors and <br className="d-lg-block d-none" /> property owners seeking end-to<br className="d-lg-block d-none" />-end solutions.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/contact" className="theme-btn1">View Listing <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
															<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
														</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
															<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
														</svg></span></Link>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="price-listarea">
													<h3>Our Features</h3>
													<ul>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Everything in Premium Plan</li>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Property Management Services</li>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Tenant Screening &amp; Lease</li>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> 24/7 Maintenance Coordination</li>
														<li><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
															<path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM8.0026 13L15.0737 5.92893L13.6595 4.51472L8.0026 10.1716L5.17421 7.3431L3.75999 8.7574L8.0026 13Z" fill="#073B3A" />
														</svg> Financial Reporting &amp; Insights</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== PRICING AREA ENDS =======*/}
					{/*===== WORKS AREA STARTS =======*/}
					<div className="faq-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading1 text-center space-margin60">
										<h5>FAQ's</h5>
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
									<div className="cta-bg-area" style={{ backgroundImage: 'url(assets/img/all-images/bg/cta-bg1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
										<div className="row align-items-center">
											<div className="col-lg-5">
												<div className="cta-header">
													<h2 className="text-anime-style-3">Step Into Your Dream Home with HouseBox</h2>
													<div className="space16" />
													<p data-aos="fade-left" data-aos-duration={1000}>At HouseBox, we believe your next home is more than just a place – it’s where your future begins you’re buy.</p>
												</div>
											</div>
											<div className="col-lg-2" />
											<div className="col-lg-5" data-aos="zoom-in" data-aos-duration={1000}>
												<div className="btn-area1 text-center">
													<Link href="/property-halfmap-grid" className="theme-btn1">Find Your Dream Home <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg></span></Link>
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
	)
}