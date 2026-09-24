
import Link from 'next/link'

export default function Project2() {
	return (
		<>

			<div className="project4-section-area sp2">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="heading3 space-margin60 text-center">
								<h5 data-aos="fade-left" data-aos-duration={800}>Our Gallery</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Our Property Showcase</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={800}>
							<div className="gallery-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/gallery/gallery-img1.png" alt="housebox" />
								</div>
								<div className="btn-area1">
									<Link href="/property-details-v1"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
										</path>
									</svg></span></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={900}>
							<div className="gallery-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/gallery/gallery-img2.png" alt="housebox" />
								</div>
								<div className="btn-area1">
									<Link href="/property-details-v1"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
										</path>
									</svg></span></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1000}>
							<div className="gallery-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/gallery/gallery-img3.png" alt="housebox" />
								</div>
								<div className="btn-area1">
									<Link href="/property-details-v1"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
										</path>
									</svg></span></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-7 col-md-6" data-aos="zoom-in-up" data-aos-duration={1100}>
							<div className="gallery-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/gallery/gallery-img4.png" alt="housebox" />
								</div>
								<div className="btn-area1">
									<Link href="/property-details-v1"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
										</path>
									</svg></span></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5 col-md-6" data-aos="zoom-in-up" data-aos-duration={1200}>
							<div className="gallery-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/gallery/gallery-img5.png" alt="housebox" />
								</div>
								<div className="btn-area1">
									<Link href="/property-details-v1"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
										</path>
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
