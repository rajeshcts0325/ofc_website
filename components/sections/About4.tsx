
import Link from 'next/link'
import CounterUp from '../elements/CounterUp'

export default function About4() {
	return (
		<>
			<div className="about4-section-area sp1">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="about-images-area">
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="img2 image-anime reveal">
											<img src="/assets/img/all-images/about/about-img7.png" alt="housebox" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="space100" />
										<div className="img1 image-anime reveal">
											<img src="/assets/img/all-images/about/about-img8.png" alt="housebox" />
										</div>
									</div>
								</div>
								<div className="author-img">
									<img src="/assets/img/elements/elements10.png" alt="housebox" className="elements10" />
									<div className="arrow-btnarea">
										<Link href="/about">
											<div className="content keyframe5">
												<h6 className="circle rotateme">
													<span style={{ transform: 'rotate(0deg)' }}>A</span>
													<span style={{ transform: 'rotate(17deg)' }}>S</span>
													<span style={{ transform: 'rotate(34deg)' }}>u</span>
													<span style={{ transform: 'rotate(51deg)' }}>c</span>
													<span style={{ transform: 'rotate(51deg)' }}>c</span>
													<span style={{ transform: 'rotate(68deg)' }}>e</span>
													<span style={{ transform: 'rotate(85deg)' }}>s</span>
													<span style={{ transform: 'rotate(102deg)' }}>s</span>
													<span style={{ transform: 'rotate(119deg)' }}>b</span>
													<span style={{ transform: 'rotate(136deg)' }}>r</span>
													<span style={{ transform: 'rotate(153deg)' }}>a</span>
													<span style={{ transform: 'rotate(170deg)' }}>n</span>
													<span style={{ transform: 'rotate(187deg)' }}>w</span>
													<span style={{ transform: 'rotate(204deg)' }}>i</span>
													<span style={{ transform: 'rotate(221deg)' }}>t</span>
													<span style={{ transform: 'rotate(238deg)' }}>h</span>
													<span style={{ transform: 'rotate(255deg)' }}>d</span>
													<span style={{ transform: 'rotate(272deg)' }}>e</span>
													<span style={{ transform: 'rotate(289deg)' }}>m</span>
													<span style={{ transform: 'rotate(306deg)' }}>o</span>
													<span style={{ transform: 'rotate(323deg)' }}>u</span>
													<span style={{ transform: 'rotate(340deg)' }}>i</span>
													<span style={{ transform: 'rotate(340deg)' }}>b</span>
													<span style={{ transform: 'rotate(340deg)' }}>u</span>
													<span style={{ transform: 'rotate(340deg)' }}>i</span>
													<span style={{ transform: 'rotate(340deg)' }}>l</span>
													<span style={{ transform: 'rotate(340deg)' }}>d</span>
												</h6>
											</div>
											<img src="/assets/img/icons/arrow1.svg" alt="housebox" className="arrow1" />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-1" />
						<div className="col-lg-5">
							<div className="about-heading heading3">
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
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
									<Link href="/sidebar-grid" className="theme-btn5">See All Properties <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
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
