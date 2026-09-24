

export default function PropertyLocation3() {
	return (
		<>

			<div className="property3-location-section-area sp1" style={{ backgroundImage: 'url(assets/img/all-images/bg/bg1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-7 m-auto">
							<div className="heading1 text-center space-margin60">
								<h5>property location</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Explore Our Property Location</h2>
							</div>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col-lg-4">
							<div className="location-accordion">
								<div className="accordion" id="accordionExample">
									<div className="accordion-item" data-aos="fade-left" data-aos-duration={800}>
										<h2 className="accordion-header">
											<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												First Floor
											</button>
										</h2>
										<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p>Kitchen appliances are essential tools that simplify and enhance our culinary
													experiences, transforming routine.</p>
											</div>
										</div>
									</div>
									<div className="space20" />
									<div className="accordion-item" data-aos="fade-left" data-aos-duration={900}>
										<h2 className="accordion-header">
											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												Second Floor
											</button>
										</h2>
										<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p>Kitchen appliances are essential tools that simplify and enhance our culinary
													experiences, transforming routine.</p>
											</div>
										</div>
									</div>
									<div className="space20" />
									<div className="accordion-item" data-aos="fade-left" data-aos-duration={1000}>
										<h2 className="accordion-header">
											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												Swimming Pool
											</button>
										</h2>
										<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p>Kitchen appliances are essential tools that simplify and enhance our culinary
													experiences, transforming routine.</p>
											</div>
										</div>
									</div>
									<div className="space20" />
									<div className="accordion-item" data-aos="fade-left" data-aos-duration={1100}>
										<h2 className="accordion-header">
											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												Kitchen Appliances
											</button>
										</h2>
										<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p>Kitchen appliances are essential tools that simplify and enhance our culinary
													experiences, transforming routine.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-8" data-aos="zoom-in-up" data-aos-duration={1000}>
							<div className="location-maps-area">
								<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
