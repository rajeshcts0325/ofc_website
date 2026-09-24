'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

const PrevArrow = (props: any) => {
	const { className, onClick } = props;
	return (
		<div className="testimonial-prev-arrow slick-arrow" onClick={onClick}>
			<button><i className="fa-solid fa-angle-left" /></button>
		</div>
	);
};

const NextArrow = (props: any) => {
	const { className, onClick } = props;
	return (
		<div className="testimonial-next-arrow slick-arrow" onClick={onClick}>
			<button><i className="fa-solid fa-angle-right" /></button>
		</div>
	);
};

const settings = {
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1,
	pauseOnHover: false,
	dots: false,
	arrows: true,
	prevArrow: <PrevArrow />,
	nextArrow: <NextArrow />,
	pauseOnDotsHover: true,
	cssEase: 'linear',
	fade: true,
	draggable: true,
};

const slides = [
	{
		img: '/assets/img/all-images/hero/hero-img1.png',
		subtitle: 'Discover Your Ideal Property Today!',
		title: 'Find Your Perfect Home',
		btn1Text: 'Find Your Dream Home Now',
	},
	{
		img: '/assets/img/all-images/hero/hero-img2.png',
		subtitle: 'Discover Your Ideal Property Now!',
		title: 'Find Your Dream Home',
		btn1Text: 'Your Dream Home Starts Here',
	},
	{
		img: '/assets/img/all-images/hero/hero-img3.png',
		subtitle: 'Discover Your Ideal Property Today!',
		title: 'Find Your Luxury Home',
		btn1Text: 'Find Your Dream Home Now',
	},
];

export default function Hero1() {
	return (
		<>
			<Slider {...settings} className="hero-area-slider">
				{slides.map((slide, index) => (
					<div key={index} className="hero1-section-area">
						<img src={slide.img} alt="housebox" className="hero-img1" />
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="hero-header-area text-center">
										<h5>{slide.subtitle}</h5>
										<div className="space32" />
										<h1>{slide.title}</h1>
										<div className="space40" />
										<div className="btn-area1">
											<Link href="/property-details-v1" className="theme-btn1">
												{slide.btn1Text}{' '}
												<span className="arrow1">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg>
												</span>
												<span className="arrow2">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg>
												</span>
											</Link>
											<Link href="/property-halfmap-grid" className="theme-btn2">
												View Listings{' '}
												<span className="arrow1">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg>
												</span>
												<span className="arrow2">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg>
												</span>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</>
	);
}
