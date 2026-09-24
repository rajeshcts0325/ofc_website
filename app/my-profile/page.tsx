
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function MyProfile() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>

				<div>
					<div className="hero-inner-section-area-sidebar">
						<img src="/assets/img/all-images/hero/hero-img1.png" alt="housebox" className="hero-img1" />
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="hero-header-area text-center">
										<Link href="/">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
										</svg> My Profile</Link>
										<div className="space24" />
										<h1>My Profile</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== DASHBOARD AREA STARTS =======*/}
					<div className="profile-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4">
									<div className="heading1">
										<h1>Update Profile</h1>
										<div className="space32" />
									</div>
								</div>
								<div className="col-lg-12">
									<div className="account-details-boxarea">
										<h2>Account Setting</h2>
										<div className="space32" />
										<h4>Settings</h4>
										<div className="space32" />
										<div className="accout-box">
											<h3>Agent Account</h3>
											<div className="space20" />
											<p className="pera">Your current account type is set to agent, if you want to remove your agent account, and return to normal account! Click Button</p>
											<div className="space20" />
											<div className="btn-area1">
												<Link href="/" className="theme-btn1">Remove Agent Account <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
													<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
												</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
													<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
												</svg></span></Link>
											</div>
										</div>
										<div className="space32" />
										<h4>User Avatar</h4>
										<div className="space24" />
										<div className="box-agent-avt">
											<div className="avatar">
												<img src="/assets/img/all-images/others/profile1.png" alt="avatar" loading="lazy" width={128} height={128} />
											</div>
											<div className="content uploadfile">
												<p>Upload a new avatar</p>
												<div className="space16" />
												<div className="box-ip">
													<input type="file" className="ip-file" />
												</div>
												<div className="space16" />
												<p>JPEG 100x100</p>
											</div>
										</div>
										<div className="space40" />
										<h4>Agent Poster</h4>
										<div className="space24" />
										<div className="box-agent-avt">
											<div className="img-poster">
												<img src="/assets/img/all-images/others/profile2.png" alt="avatar" loading="lazy" />
											</div>
											<div className="content uploadfile">
												<p>Upload a new poster</p>
												<div className="space16" />
												<div className="box-ip">
													<input type="file" className="ip-file" />
												</div>
												<div className="space16" />
												<span>JPEG 100x100</span>
											</div>
										</div>
									</div>
									<div className="space48" />
									<div className="personal-info-area">
										<h2>Personal Information</h2>
										<div className="space28" />
										<div className="input-area">
											<h5>Full Name*</h5>
											<div className="space16" />
											<input type="text" placeholder="Full Name" />
										</div>
										<div className="space28" />
										<div className="input-area">
											<h5>Description</h5>
											<div className="space16" />
											<textarea defaultValue={"Choosing the right neighborhood is a crucial step in finding the perfect home for your family. It’s not just about the house itself but the environment that surrounds it. A great neighborhood offers safety, convenience, and access to essential amenities like schools, parks, and healthcare. It should reflect your family’s lifestyle, providing opportunities for growth, connection, and comfort. "} />
										</div>
										<div className="row">
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Your Company*</h5>
													<div className="space16" />
													<input type="text" placeholder="Your Company*" />
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Position*</h5>
													<div className="space16" />
													<input type="text" placeholder="Position*" />
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Office Number*</h5>
													<div className="space16" />
													<input type="number" placeholder="Office Number*" />
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Office Address</h5>
													<div className="space16" />
													<input type="number" placeholder="Office Address" />
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Job*</h5>
													<div className="space16" />
													<input type="text" placeholder="Agent*" />
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Email Address*</h5>
													<div className="space16" />
													<input type="email" placeholder="housebox@gmail.com" />
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Phone Number*</h5>
													<div className="space16" />
													<input type="number" placeholder="Phone Number*" />
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Office Address</h5>
													<div className="space16" />
													<input type="text" placeholder="Office Address" />
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Facebook*</h5>
													<div className="space16" />
													<input type="text" placeholder="##" />
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Instagram*</h5>
													<div className="space16" />
													<input type="text" placeholder="##" />
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Twitter*</h5>
													<div className="space16" />
													<input type="text" placeholder="##" />
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="space28" />
												<div className="input-area">
													<h5>Linkedin*</h5>
													<div className="space16" />
													<input type="text" placeholder="##" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="space32" />
												<div className="btn-area1">
													<Link href="/" className="theme-btn1">Save And Update <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg></span></Link>
												</div>
											</div>
										</div>
									</div>
									<div className="space48" />
									<div className="password-info-area">
										<h2>Change Password</h2>
										<div className="space26" />
										<div className="box">
											<div className="row">
												<div className="col-lg-4 col-md-6">
													<div className="box-fieldset">
														<label>Old Password:<span>*</span></label>
														<div className="box-password">
															<input type="password" className="form-contact style-1 password-field" placeholder="Password" />
															<span className="show-pass">
																<i className="fa-regular fa-eye" />
																<i className="fa-regular fa-eye-slash" />
															</span>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6">
													<div className="box-fieldset">
														<label>New Password:<span>*</span></label>
														<div className="box-password">
															<input type="password" className="form-contact style-1 password-field2" placeholder="Password" />

															<span className="show-pass2">
																<i className="fa-regular fa-eye" />
																<i className="fa-regular fa-eye-slash" />
															</span>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6">
													<div className="box-fieldset">
														<label>Confirm Password:<span>*</span></label>
														<div className="box-password">
															<input type="password" className="form-contact style-1 password-field3" placeholder="Password" />
															<span className="show-pass3">
																<i className="fa-regular fa-eye" />
																<i className="fa-regular fa-eye-slash" />
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="space32" />
										<div className="btn-area1">
											<Link href="/" className="theme-btn1">Update Password <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
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
					{/*===== DASHBOARD AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="cta-bg-area" style={{ backgroundImage: 'url(assets/img/all-images/bg/cta-bg1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
										<div className="row align-items-center">
											<div className="col-lg-5">
												<div className="cta-header">
													<h2 className="text-anime-style-3">Step Into Your Dream Home with HouseBox</h2>
													<div className="space16" />
													<p data-aos="fade-left" data-aos-duration={1000}>At HouseBox, we believe your next home is more than just a place – it’s where your future begins you’re buy.</p>
												</div>
											</div>
											<div className="col-lg-2" />
											<div className="col-lg-5" data-aos="zoom-in" data-aos-duration={1000}>
												<div className="btn-area1 text-center">
													<Link href="/property-halfmap-grid" className="theme-btn1">Find Your Dream Home <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
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
				</div>

			</Layout>
		</>
	)
}