import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Cta from "../cta/Cta";
export default function ContactPageUi() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="hero-inner-section-area-sidebar">
            <img
              src="/assets/img/all-images/hero/hero-img1.png"
              alt="housebox"
              className="hero-img1"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="hero-header-area text-center">
                    <Link href="/">
                      Home{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                      </svg>{" "}
                      Contact Us{" "}
                    </Link>
                    <div className="space24" />
                    <h1>Contact Us </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== HERO AREA ENDS =======*/}
          {/*===== CONTACT AREA STARTS =======*/}
          <div className="contact-inner-section sp1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="heading1">
                    <h5>Contact Us</h5>
                    <div className="space32" />
                    <h2>Let’s Build Strong Business Connections</h2>
                    <div className="space24" />
                    <p style={{ textAlign: "justify" }}>
                      At OffContractors, we connect businesses with trusted
                      contractors and professional service providers. Partner
                      with us to find skilled experts, new opportunities, and
                      reliable project support.
                    </p>
                    <div className="space40" />
                    <div className="number-address-area">
                      <div className="phone-number">
                        <div className="img1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z" />
                          </svg>
                        </div>
                        <div className="content">
                          <p>Phone Number</p>
                          <Link href="tel:+91 94370 46877">+91 94370 46877</Link>
                        </div>
                      </div>
                      <div className="phone-number m-0">
                        <div className="img1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z" />
                          </svg>
                        </div>
                        <div className="content">
                          <p>Email Address</p>
                          <Link href="mailto:ofctechindia@gmail.com ">
                            ofctechindia@gmail.com
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="space32" />
                    <div className="number-address-area2">
                      <div className="phone-number">
                        <div className="img1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
                          </svg>
                        </div>
                        <div className="content">
                          <Link href="#">
                            Plot 11 8RXG+785 Arya Bhoomi, Nandankanan Road,{" "}
                            <br className="d-lg-block d-none" /> Phase-II, Kanan Vihar, Patia, Bhubaneswar, Odisha
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="space40" />
                    <div className="social">
                      <ul>
                        <li className="px-2">
                          <Link href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li className="px-2">
                          <Link href="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                        <li className="px-2">
                          <Link href="#">
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                        <li className="px-2">
                          <Link href="#">
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </li>
                        <li className="px-2">
                          <Link href="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="contact-form-area">
                    <h4>Get In Touch</h4>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="input-area">
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-area">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-area">
                          <input type="email" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-area">
                          <input type="number" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-area">
                          <textarea placeholder="Your Message" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-area">
                          <button type="submit" className="theme-btn1">
                            Send Now{" "}
                            <span className="arrow1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                fill="currentColor"
                              >
                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                              </svg>
                            </span>
                            <span className="arrow2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                fill="currentColor"
                              >
                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mapouter" style={{ marginBottom: "30px" }}>
            <div className="gmap_canvas">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13541.14127469395!2d85.80680605040774!3d20.347316803399185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909148bc48545%3A0x88975e943897e577!2s8RXG%2B785%20Arya%20Bhoomi%2C%20Nandankanan%20Rd%2C%20Phase-II%2C%20Kanan%20Vihar%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751031!5e1!3m2!1sen!2sin!4v1781593346269!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          {/*===== CONTACT AREA ENDS =======*/}


          <Cta />
        </div>
      </Layout>
    </>
  );
}
