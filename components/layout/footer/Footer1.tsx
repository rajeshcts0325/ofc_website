import Link from "next/link";
export default function Footer1() {
  return (
    <>
      <div className="footer1-section-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-logoarea">
                <img src="/icons/logo.png" alt="housebox" />
                <div className="space24" />
                <p>
                  OffContractor connects trusted suppliers, contractors, and
                  construction businesses across Odisha.
                </p>
                <div className="space24" />
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-content">
                <h3>Quick Links</h3>
                <div className="space4" />
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services#insurance">Insurance Services</Link>
                  </li>
                  <li>
                    <Link href="/services#equipment-rental">Equipment Rental</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-content2">
                <h3>Contact Us</h3>
                <div className="space4" />
                <ul>
                  <li>
                    <Link href="tel:#919437046877">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                      </svg>
                      +91 94370 46877
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{
                          width: "20px",
                          height: "20px",
                          flexShrink: 0,
                          marginTop: "4px",
                        }}
                      >
                        <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                      </svg>

                      <span
                        style={{
                          lineHeight: "1.6",
                          wordBreak: "break-word",
                        }}
                      >
                        Kanan Vihar, Patia, Bhubaneswar, Odisha
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:ofctechindia@gmail.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                      </svg>{" "}
                      ofctechindia@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.OffContractors.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM16.0043 12.8777C15.6589 12.3533 15.4097 11.9746 14.4622 12.1248C12.6717 12.409 12.4732 12.7224 12.3877 13.2375L12.3636 13.3943L12.3393 13.5597C12.2416 14.2428 12.2453 14.5012 12.5589 14.8308C13.8241 16.1582 14.582 17.115 14.8116 17.6746C14.9237 17.9484 15.2119 18.7751 15.0136 19.5927C16.2372 19.1066 17.3156 18.3332 18.1653 17.3559C18.2755 16.9821 18.3551 16.5166 18.3551 15.9518V15.8472C18.3551 14.9247 18.3551 14.504 17.7031 14.1314C17.428 13.9751 17.2227 13.881 17.0582 13.8064C16.691 13.6394 16.4479 13.5297 16.1198 13.0499C16.0807 12.9928 16.0425 12.9358 16.0043 12.8777ZM12 3.83333C9.68259 3.83333 7.59062 4.79858 6.1042 6.34896C6.28116 6.47186 6.43537 6.64453 6.54129 6.88256C6.74529 7.34029 6.74529 7.8112 6.74529 8.22764C6.74488 8.55621 6.74442 8.8672 6.84992 9.09302C6.99443 9.40134 7.6164 9.53227 8.16548 9.64736C8.36166 9.68867 8.56395 9.73083 8.74797 9.78176C9.25405 9.92233 9.64554 10.3765 9.95938 10.7412C10.0896 10.8931 10.2819 11.1163 10.3783 11.1717C10.4286 11.1356 10.59 10.9608 10.6699 10.6735C10.7307 10.4547 10.7134 10.2597 10.6239 10.1543C10.0648 9.49445 10.0952 8.2232 10.268 7.75495C10.5402 7.01606 11.3905 7.07058 12.012 7.11097C12.2438 7.12589 12.4626 7.14023 12.6257 7.11976C13.2482 7.04166 13.4396 6.09538 13.575 5.91C13.8671 5.50981 14.7607 4.9071 15.3158 4.53454C14.3025 4.08382 13.1805 3.83333 12 3.83333Z"></path>
                      </svg>{" "}
                      OffContractors.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="instagram-posts">
                <h3>Our Location</h3>

                <div className="space8" />

                <div
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "2px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6770.579028635909!2d85.8250687761787!3d20.347125320810072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909148bc48545%3A0x88975e943897e577!2s8RXG%2B785%20Arya%20Bhoomi%2C%20Nandankanan%20Rd%2C%20Phase-II%2C%20Kanan%20Vihar%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751031!5e1!3m2!1sen!2sin!4v1782194956307!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{
                      border: 0,
                      display: "block",
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space60" />
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright text-center">
                <p>
                  ©Copyright {new Date().getFullYear()} -{" "}
                  <span style={{ color: "#073b3a", fontWeight: "bold" }}>
                    OfContractors
                  </span>
                  . All Right Reserved || Powered By{" "}
                  <Link
                    href="http://crushaderstech.com/"
                    target="_blank"
                    style={{
                      color: "#073b3a",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Crushaders Tech Solution
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
