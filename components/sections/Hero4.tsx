
import Link from 'next/link'

export default function Hero4() {
	return (
		<>
			<div>
				<div className="hero4-section-area sp1" style={{ backgroundImage: 'url(assets/img/all-images/hero/hero4-img1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="hero-header">
									<h5 data-aos="fade-left" data-aos-duration={800}>Discover Your Ideal Property Today!</h5>
									<div className="space20" />
									<h1 className="text-anime-style-3">Turning Real Estate Dreams Into Reality</h1>
									<div className="space20" />
									<div className="btn-are1" data-aos="fade-left" data-aos-duration={1000}>
										<Link href="/sidebar-grid" className="theme-btn5">Find Your Dream Home Now <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
											<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
										</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
											<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
										</svg></span></Link>
									</div>
								</div>
							</div>
							<div className="col-lg-2" />
							<div className="col-lg-4">
								<div className="property-tab-section4">
									<div className="tab-section">
										<div className="tab-header">
											<button className="tab-btn active" data-tab="for-sale">For Sale</button>
											<button className="tab-btn" data-tab="for-rent">For Rent</button>
										</div>
										<div className="tab-content1" id="for-sale">
											<div className="dropdown-container">
												<select>
													<option>All Status</option>
													<option>For Rent</option>
													<option>For Sale</option>
												</select>
												<select>
													<option>All Labels</option>
													<option>New Offer</option>
													<option>Hot Offer</option>
												</select>
												<select>
													<option>All Types</option>
													<option>Apartment</option>
													<option>Bar</option>
													<option>Cafe</option>
												</select>
											</div>
											<div className="actions">
												<button className="filter-button show-form">
													Filters <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
														<path d="M6.17071 18C6.58254 16.8348 7.69378 16 9 16C10.3062 16 11.4175 16.8348 11.8293 18H22V20H11.8293C11.4175 21.1652 10.3062 22 9 22C7.69378 22 6.58254 21.1652 6.17071 20H2V18H6.17071ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H22V13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H2V11H12.1707ZM6.17071 4C6.58254 2.83481 7.69378 2 9 2C10.3062 2 11.4175 2.83481 11.8293 4H22V6H11.8293C11.4175 7.16519 10.3062 8 9 8C7.69378 8 6.58254 7.16519 6.17071 6H2V4H6.17071ZM9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5C8 5.55228 8.44772 6 9 6ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13ZM9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z">
														</path>
													</svg>
												</button>
												<Link href="/search-result">
													<button className="search-button " type="submit">
														Search <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
															<path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z">
															</path>
														</svg>
													</button>
												</Link>
											</div>
										</div>
										<div className="tab-content1" id="for-rent" style={{ display: 'none' }}>
											<div className="dropdown-container">
												<select>
													<option>All Status</option>
													<option>For Rent</option>
													<option>For Sale</option>
												</select>
												<select>
													<option>All Labels</option>
													<option>New Offer</option>
													<option>Hot Offer</option>
												</select>
												<select>
													<option>All Types</option>
													<option>Apartment</option>
													<option>Bar</option>
													<option>Cafe</option>
												</select>
											</div>
											<div className="actions">
												<button className="filter-button show-form">
													Filters <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
														<path d="M6.17071 18C6.58254 16.8348 7.69378 16 9 16C10.3062 16 11.4175 16.8348 11.8293 18H22V20H11.8293C11.4175 21.1652 10.3062 22 9 22C7.69378 22 6.58254 21.1652 6.17071 20H2V18H6.17071ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H22V13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H2V11H12.1707ZM6.17071 4C6.58254 2.83481 7.69378 2 9 2C10.3062 2 11.4175 2.83481 11.8293 4H22V6H11.8293C11.4175 7.16519 10.3062 8 9 8C7.69378 8 6.58254 7.16519 6.17071 6H2V4H6.17071ZM9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5C8 5.55228 8.44772 6 9 6ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13ZM9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z">
														</path>
													</svg>
												</button>
												<Link href="/search-result">
													<button className="search-button " type="submit">
														Search <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
															<path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z">
															</path>
														</svg>
													</button>
												</Link>
											</div>
										</div>
									</div>
									<div className="wd-search-form ">
										<div className=" group-select">
											<div className="box-select">
												<h5>Bathrooms</h5>
												<div className="nice-select" tabIndex={0}>
													<span className="current">Bathrooms</span>
													<ul className="list">
														<li data-value={1} className="option">1</li>
														<li data-value={2} className="option selected">2</li>
														<li data-value={3} className="option">3</li>
														<li data-value={4} className="option">4</li>
														<li data-value={5} className="option">5</li>
														<li data-value={6} className="option">6</li>
														<li data-value={7} className="option">7</li>
														<li data-value={8} className="option">8</li>
														<li data-value={9} className="option">9</li>
														<li data-value={10} className="option">10</li>
													</ul>
												</div>
											</div>
											<div className="box-select">
												<h5>Bedrooms</h5>
												<div className="nice-select" tabIndex={0}>
													<span className="current">Bedrooms</span>
													<ul className="list">
														<li data-value={1} className="option">1</li>
														<li data-value={2} className="option selected">2</li>
														<li data-value={3} className="option">3</li>
														<li data-value={4} className="option">4</li>
														<li data-value={5} className="option">5</li>
														<li data-value={6} className="option">6</li>
														<li data-value={7} className="option">7</li>
														<li data-value={8} className="option">8</li>
														<li data-value={9} className="option">9</li>
														<li data-value={10} className="option">10</li>
													</ul>
												</div>
											</div>
											<div className="box-select">
												<h5>States</h5>
												<div className="nice-select" tabIndex={0}>
													<span className="current">All States</span>
													<ul className="list">
														<li data-value={1} className="option">New York</li>
														<li data-value={2} className="option selected">California</li>
														<li data-value={3} className="option">Texas</li>
														<li data-value={4} className="option">Sydney</li>
													</ul>
												</div>
											</div>
											<div className="box-select">
												<h5>City</h5>
												<div className="nice-select" tabIndex={0}>
													<span className="current">All Cities</span>
													<ul className="list">
														<li data-value={1} className="option">Alice</li>
														<li data-value={2} className="option selected">Bridgaport</li>
														<li data-value={3} className="option">Dallas</li>
														<li data-value={4} className="option">Kingston</li>
														<li data-value={5} className="option">Los Angeles</li>
														<li data-value={6} className="option">New York</li>
													</ul>
												</div>
											</div>
										</div>
										<div className=" group-select">
											<div className="box-select">
												<h5>Garages</h5>
												<div className="nice-select" tabIndex={0}>
													<span className="current">Any Garages</span>
													<ul className="list">
														<li data-value={1} className="option">1</li>
														<li data-value={2} className="option selected">2</li>
														<li data-value={3} className="option">3</li>
														<li data-value={4} className="option">4</li>
														<li data-value={5} className="option">5</li>
														<li data-value={6} className="option">6</li>
														<li data-value={7} className="option">7</li>
														<li data-value={8} className="option">8</li>
														<li data-value={9} className="option">9</li>
														<li data-value={10} className="option">10</li>
													</ul>
												</div>
											</div>
											<div className="box-select">
												<h5>Rooms</h5>
												<div className="nice-select" tabIndex={0}>
													<span className="current">Any Rooms</span>
													<ul className="list">
														<li data-value={1} className="option">1</li>
														<li data-value={2} className="option selected">2</li>
														<li data-value={3} className="option">3</li>
														<li data-value={4} className="option">4</li>
														<li data-value={5} className="option">5</li>
														<li data-value={6} className="option">6</li>
														<li data-value={7} className="option">7</li>
														<li data-value={8} className="option">8</li>
														<li data-value={9} className="option">9</li>
														<li data-value={10} className="option">10</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="group-price">
											<div className="slider-item">
												<div className="slider-label">Price Range: <span id="price-output">$200 -
													$2,500,000</span></div>
												<div className="slider price-slider">
													<input type="range" id="price-range-min" className="range-min" min={200} max={2500000} step={100} />
													<input type="range" id="price-range-max" className="range-max" min={200} max={2500000} step={100} />
													<div className="slider-fill" />
												</div>
											</div>
											<div className="slider-item">
												<div className="slider-label">Size Range: <span id="size-output">146 SqFt - 448
													SqFt</span></div>
												<div className="slider size-slider">
													<input type="range" id="size-range-min" className="range-min" min={146} max={448} step={1} />
													<input type="range" id="size-range-max" className="range-max" min={146} max={448} step={1} />
													<div className="slider-fill" />
												</div>
											</div>
										</div>
										<div className="group-checkbox">
											<div className=" title text-4 fw-6">Others Features</div>
											<div className="space16" />
											<div className="group-amenities ">
												<fieldset className="checkbox-item style-1  ">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4">Air Conditioning</span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4"> Laundry</span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4">Refrigerator </span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4">Washer </span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1  ">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4"> Barbeque</span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4"> Lawn</span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4">Sauna </span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4">Wifi </span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1  ">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4">Dryer </span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4">Microwave</span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4"> Swimming Pool</span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4">Window Coverings</span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1  ">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4"> Gym</span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4">Outdoor Shower </span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4"> TV Cable</span>
													</label>
												</fieldset>
												<fieldset className="checkbox-item style-1   mt-12">
													<label>
														<input type="checkbox" />
														<span className="btn-checkbox" />
														<span className="text-4">Fireplace </span>
													</label>
												</fieldset>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*===== HERO AREA ENDS =======*/}
				<div className="space100 d-lg-block d-none" />
				<div className="space50 d-lg-none d-block" />
			</div>
		</>
	)
}
