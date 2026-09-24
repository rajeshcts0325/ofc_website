
import Link from 'next/link'

export default function Work() {
	return (
		<>

			<div className="work3-section-area sp2">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="heading2 text-center space-margin60">
								<h5 data-aos="fade-left" data-aos-duration={800}>HOW WE WORK</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Start Your Home Search Here</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration={800}>
							<div className="work-single-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/work/work-img1.png" alt="housebox" />
								</div>
								<div className="space20" />
								<div className="content">
									<h3>1</h3>
									<div className="space18" />
									<Link href="/property-details-v1">On Discussion</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration={900}>
							<div className="work-single-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/work/work-img2.png" alt="housebox" />
								</div>
								<div className="space20" />
								<div className="content">
									<h3>2</h3>
									<div className="space18" />
									<Link href="/property-details-v1">Buy A New Home</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration={1000}>
							<div className="work-single-boxarea">
								<div className="img1">
									<img src="/assets/img/all-images/work/work-img3.png" alt="housebox" />
								</div>
								<div className="space20" />
								<div className="content">
									<h3>3</h3>
									<div className="space18" />
									<Link href="/property-details-v1">Rent A Home</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration={1200}>
							<div className="work-single-boxarea box2">
								<div className="img1">
									<img src="/assets/img/all-images/work/work-img4.png" alt="housebox" />
								</div>
								<div className="space20" />
								<div className="content">
									<h3>4</h3>
									<div className="space18" />
									<Link href="/property-details-v1">Sell A Home</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
