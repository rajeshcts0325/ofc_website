'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperFade = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 0,
	slidesPerView: 1,
	freeMode: true,
	watchSlidesProgress: true,
	autoplay: {
		delay: 2500,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

export default function PropertyLocation2() {
	return (
		<>

			<div className="property2-location-section-area sp2">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="property-headeing heading1 space-margin60 text-center">
								<h5 data-aos="fade-left" data-aos-duration={800}>property location</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Explore Our Property Location</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration={800}>
							<div className="propety-single-boxarea">
								<div className="img1">
									<Swiper {...swiperFade} className="swiper swiper-fade" >
										<div className="swiper-wrapper">
											<SwiperSlide>
												<img src="/assets/img/all-images/property_location/property-img6.png" alt="housebox" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/img/all-images/property_location/property-img10.png" alt="housebox" />
											</SwiperSlide>
										</div>
										<div className="swiper-pagination" />
									</Swiper>
								</div>
								<h3>32</h3>
								<Link href="/property-details-v1">San Francisco</Link>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={900}>
							<div className="propety-single-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img7.png" alt="housebox" />
								</div>
								<h3>12</h3>
								<Link href="/property-details-v1">Los Angeles</Link>
							</div>
						</div>
						<div className="col-lg-5 col-md-6" data-aos="zoom-in-up" data-aos-duration={1000}>
							<div className="propety-single-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img8.png" alt="housebox" />
								</div>
								<h3>15</h3>
								<Link href="/property-details-v1">New York</Link>
							</div>
						</div>
						<div className="col-lg-5 col-md-6" data-aos="zoom-in-up" data-aos-duration={1100}>
							<div className="propety-single-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img9.png" alt="housebox" />
								</div>
								<h3>20</h3>
								<Link href="/property-details-v1">San Diego</Link>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1200}>
							<div className="propety-single-boxarea">
								<div className="img1">
									<Swiper {...swiperFade} className="swiper swiper-fade" >
										<div className="swiper-wrapper">
											<SwiperSlide>
												<img src="/assets/img/all-images/property_location/property-img10.png" alt="housebox" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/assets/img/all-images/property_location/property-img7.png" alt="housebox" />
											</SwiperSlide>
										</div>
										<div className="swiper-pagination" />
									</Swiper>
								</div>
								<h3>24</h3>
								<Link href="/property-details-v1">Dallas Texas</Link>
							</div>
						</div >
						<div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration={1300}>
							<div className="propety-single-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img11.png" alt="housebox" />
								</div>
								<h3>21</h3>
								<Link href="/property-details-v1">Houston City</Link>
							</div>
						</div>
					</div >
				</div >
			</div >
		</>
	)
}
