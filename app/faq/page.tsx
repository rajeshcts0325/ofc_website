
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Faq() {

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
											</svg> FAQ’S </Link>
										<div className="space24" />
										<h1>FAQ’S</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== WORKS AREA STARTS =======*/}
					<div className="faq-inner-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="heading1">
										<h2>Buying a Home</h2>
										<div className="space50" />
									</div>
									<div className="faq-area">
										<div className="accordion" id="accordionExample">
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														How do I start looking for a home on Housebox?
													</button>
												</h2>
												<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>No. We ensure complete transparency, outlining any applicable fees upfront.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														Can I get help with financing my home?
													</button>
												</h2>
												<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>No. We ensure complete transparency, outlining any applicable fees upfront.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														How do I schedule a property viewing?
													</button>
												</h2>
												<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>No. We ensure complete transparency, outlining any applicable fees upfront.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
														What happens after I find the home I want?
													</button>
												</h2>
												<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>No. We ensure complete transparency, outlining any applicable fees upfront.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
														Are there hidden fees when buying a home?
													</button>
												</h2>
												<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>No. We ensure complete transparency, outlining any applicable fees upfront.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="faq-inner-area">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="heading1">
										<h2>Selling a Home</h2>
										<div className="space50" />
									</div>
									<div className="faq-area">
										<div className="accordion" id="accordionExample2">
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
														How do I list my property on Housebox?
													</button>
												</h2>
												<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
													<div className="accordion-body">
														<p>Absolutely! Our remote selling services make it easy to manage your property sale from anywhere.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
														What are the benefits of selling with Housebox?
													</button>
												</h2>
												<div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
													<div className="accordion-body">
														<p>Absolutely! Our remote selling services make it easy to manage your property sale from anywhere.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
														Can I get a property valuation before listing?
													</button>
												</h2>
												<div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
													<div className="accordion-body">
														<p>Absolutely! Our remote selling services make it easy to manage your property sale from anywhere.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
														How long does it usually take to sell a home?
													</button>
												</h2>
												<div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
													<div className="accordion-body">
														<p>Absolutely! Our remote selling services make it easy to manage your property sale from anywhere.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
														Can I sell my property while living abroad?
													</button>
												</h2>
												<div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
													<div className="accordion-body">
														<p>Absolutely! Our remote selling services make it easy to manage your property sale from anywhere.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="faq-inner-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="heading1">
										<h2>Renting a Home</h2>
										<div className="space50" />
									</div>
									<div className="faq-area">
										<div className="accordion" id="accordionExample3">
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
														How do I find rental properties on Housebox?
													</button>
												</h2>
												<div id="collapse11" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
													<div className="accordion-body">
														<p>For managed properties, contact our support team, and we’ll coordinate repairs promptly.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
														What documents do I need to rent a home?
													</button>
												</h2>
												<div id="collapse12" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
													<div className="accordion-body">
														<p>For managed properties, contact our support team, and we’ll coordinate repairs promptly.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
														Can I rent a home for a short-term stay?
													</button>
												</h2>
												<div id="collapse13" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
													<div className="accordion-body">
														<p>For managed properties, contact our support team, and we’ll coordinate repairs promptly.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
														How do I apply for a rental property?
													</button>
												</h2>
												<div id="collapse14" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
													<div className="accordion-body">
														<p>For managed properties, contact our support team, and we’ll coordinate repairs promptly.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
														What if I need maintenance assistance during my lease?
													</button>
												</h2>
												<div id="collapse15" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
													<div className="accordion-body">
														<p>For managed properties, contact our support team, and we’ll coordinate repairs promptly.</p>
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