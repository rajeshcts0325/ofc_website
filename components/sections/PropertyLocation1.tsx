'use client';
import Link from 'next/link';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect } from 'react';

const swiperOptions = {
	modules: [Autoplay, Pagination],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		320: { slidesPerView: 1, spaceBetween: 30 },
		575: { slidesPerView: 2, spaceBetween: 30 },
		767: { slidesPerView: 2, spaceBetween: 30 },
		991: { slidesPerView: 3, spaceBetween: 30 },
		1199: { slidesPerView: 5, spaceBetween: 30 },
		1350: { slidesPerView: 5, spaceBetween: 30 },
	},
};

// Data for slides
const slides = [
	{ img: '/assets/img/all-images/property_location/property-img1.png', count: 32, location: 'San Francisco' },
	{ img: '/assets/img/all-images/property_location/property-img2.png', count: 12, location: 'Los Angeles' },
	{ img: '/assets/img/all-images/property_location/property-img3.png', count: 15, location: 'New York' },
	{ img: '/assets/img/all-images/property_location/property-img4.png', count: 40, location: 'San Diego' },
	{ img: '/assets/img/all-images/property_location/property-img5.png', count: 19, location: 'Dallas Texas' },
	{ img: '/assets/img/all-images/property_location/property-img1.png', count: 32, location: 'San Francisco' },
	{ img: '/assets/img/all-images/property_location/property-img2.png', count: 12, location: 'Los Angeles' },
	{ img: '/assets/img/all-images/property_location/property-img3.png', count: 15, location: 'New York' },
	{ img: '/assets/img/all-images/property_location/property-img4.png', count: 40, location: 'San Diego' },
	{ img: '/assets/img/all-images/property_location/property-img5.png', count: 19, location: 'Dallas Texas' },
];

export default function PropertyLocation1() {
	const swiperRef = useRef<any>(null); // Ref to control Swiper

	// Functions to handle navigation
	const handlePrev = () => {
		// Check if Swiper instance exists before calling slidePrev
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev();
			console.log('Prev button clicked');
		} else {
			console.error('Swiper instance not available for Prev');
		}
	};

	const handleNext = () => {
		// Check if Swiper instance exists before calling slideNext
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext();
			console.log('Next button clicked');
		} else {
			console.error('Swiper instance not available for Next');
		}
	};

	// Log Swiper instance when initialized for debugging
	useEffect(() => {
		if (swiperRef.current && swiperRef.current.swiper) {
			console.log('Swiper initialized:', swiperRef.current.swiper);
		}
	}, []);

	return (
		<>
			<div className="property-location-section-area sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="property-headeing heading1 space-margin60 text-center">
								<h5>property location</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Explore Our Property Location</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12" data-aos="fade-up" data-aos-duration={1000}>
							<Swiper ref={swiperRef} {...swiperOptions} className="property-single-slider">
								{slides.map((slide, index) => (
									<SwiperSlide key={index} className="propety-single-boxarea">
										<div className="img1 image-anime">
											<img src={slide.img} alt="housebox" />
										</div>
										<h3>{slide.count}</h3>
										<Link href="/property-details-v1">{slide.location}</Link>
									</SwiperSlide>
								))}
							</Swiper>
							{/* Custom navigation buttons */}
							<div className="navigation-arrows">
								<div className="prev-arrow" onClick={handlePrev}>
									<i className="fa-solid fa-angle-left" />
								</div>
								<div className="next-arrow" onClick={handleNext}>
									<i className="fa-solid fa-angle-right" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}