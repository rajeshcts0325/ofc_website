
import Link from 'next/link'

export default function Cta2() {
	return (
		<>
			<div className="cta1-section-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="cta-bg-area" style={{ backgroundImage: 'url(assets/img/all-images/bg/cta-bg2.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
								<div className="row align-items-center">
									<div className="col-lg-5">
										<div className="cta-header">
											<h2 className="text-anime-style-3">Step Into Your Dream Home with HouseBox</h2>
											<div className="space16" />
											<p data-aos="fade-left" data-aos-duration={1000}>At HouseBox, we believe your next
												home is more than just a place – it’s where your future begins you’re buy.</p>
										</div>
									</div>
									<div className="col-lg-2" />
									<div className="col-lg-5">
										<div className="btn-area1 text-center">
											<Link href="/sidebar-grid" className="theme-btn3">Find Your Dream Home <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
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
		</>
	)
}
