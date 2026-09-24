'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

				breakpoints:{
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    };
import Link from 'next/link'

export default function Others4() {
	return (
		<>

			<div className="others-selider-section" data-aos="fade-up" data-aos-duration={1000}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<Swiper {...swiperOptions} className="slider-section-boxarea owl-carousel">
								<SwiperSlide className="slider-boxarea">
									<div className="img1">
										<img src="/assets/img/all-images/others/others-img7.png" alt="housebox" />
									</div>
									<div className="conetnt-area">
										<div className="text">
											<Link href="/property-details-v1">Los Angeles</Link>
											<div className="space12" />
											<p>3 Properties</p>
										</div>
										<div className="arrow">
											<Link href="/property-details-v1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
												</path>
											</svg></Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="slider-boxarea">
									<div className="img1">
										<img src="/assets/img/all-images/others/others-img8.png" alt="housebox" />
									</div>
									<div className="conetnt-area">
										<div className="text">
											<Link href="/property-details-v1">Los Angeles</Link>
											<div className="space12" />
											<p>3 Properties</p>
										</div>
										<div className="arrow">
											<Link href="/property-details-v1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
												</path>
											</svg></Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="slider-boxarea">
									<div className="img1">
										<img src="/assets/img/all-images/others/others-img9.png" alt="housebox" />
									</div>
									<div className="conetnt-area">
										<div className="text">
											<Link href="/property-details-v1">Los Angeles</Link>
											<div className="space12" />
											<p>3 Properties</p>
										</div>
										<div className="arrow">
											<Link href="/property-details-v1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
												</path>
											</svg></Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="slider-boxarea">
									<div className="img1">
										<img src="/assets/img/all-images/others/others-img10.png" alt="housebox" />
									</div>
									<div className="conetnt-area">
										<div className="text">
											<Link href="/property-details-v1">Los Angeles</Link>
											<div className="space12" />
											<p>3 Properties</p>
										</div>
										<div className="arrow">
											<Link href="/property-details-v1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
												</path>
											</svg></Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="slider-boxarea">
									<div className="img1">
										<img src="/assets/img/all-images/others/others-img11.png" alt="housebox" />
									</div>
									<div className="conetnt-area">
										<div className="text">
											<Link href="/property-details-v1">Los Angeles</Link>
											<div className="space12" />
											<p>3 Properties</p>
										</div>
										<div className="arrow">
											<Link href="/property-details-v1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
												</path>
											</svg></Link>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="slider-boxarea">
									<div className="img1">
										<img src="/assets/img/all-images/others/others-img12.png" alt="housebox" />
									</div>
									<div className="conetnt-area">
										<div className="text">
											<Link href="/property-details-v1">Los Angeles</Link>
											<div className="space12" />
											<p>3 Properties</p>
										</div>
										<div className="arrow">
											<Link href="/property-details-v1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
												</path>
											</svg></Link>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
