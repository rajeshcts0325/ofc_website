
import Link from 'next/link'
import CounterUp from '../elements/CounterUp'

export default function About1() {
	return (
		<>
			<div className="about1-section-area sp1">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="about-images-area">
								<div className="img2 image-anime reveal">
									<img src="/assets/img/all-images/about/about-img2.png" alt="housebox" />
								</div>
								<div className="img1 image-anime reveal">
									<img src="/assets/img/all-images/about/about-img1.png" alt="housebox" />
								</div>
								<div className="author-img aniamtion-key-1">
									<h3>Our Happy Customer</h3>
									<div className="space18" />
									<img src="/assets/img/all-images/others/author-img1.png" alt="housebox" />
								</div>
							</div>
						</div>
						<div className="col-lg-1" />
						<div className="col-lg-5">
							<div className="about-heading heading1">
								<h5 data-aos="fade-left" data-aos-duration={800}>About housebox</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Embrace the Elegance Our Exclusive Property</h2>
								<div className="space18" />
								<p data-aos="fade-left" data-aos-duration={900}>At HouseBox, we’re redefining the way people
									find, sell, and invest in properties. Our mission is to simplify real a estate by provide
									innovative solutions, expert guidance.</p>
								<div className="space32" />
								<div className="counter-boxes" data-aos="fade-left" data-aos-duration={1000}>
									<div className="row">
										<div className="col-lg-4 col-md-4 col-6">
											<div className="counter-boxarea text-center">
												<h2><CounterUp className="counter">10</CounterUp>K</h2>
												<div className="space12" />
												<p>Homes Sold</p>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-6">
											<div className="counter-boxarea text-center">
												<h2><CounterUp className="counter">9</CounterUp>K</h2>
												<div className="space12" />
												<p>Happy Client</p>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-6">
											<div className="space20 d-md-none d-block" />
											<div className="counter-boxarea text-center">
												<h2><CounterUp className="counter">98</CounterUp>%</h2>
												<div className="space12" />
												<p>Satisfaction Rate</p>
											</div>
										</div>
									</div>
								</div>
								<div className="space32" />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
									<Link href="/property-halfmap-grid" className="theme-btn1">See All Properties <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
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
		</>
	)
}
