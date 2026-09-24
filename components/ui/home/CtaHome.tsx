export default function CtaHome() {
  return (
    <>
      <div
        className="cta4-section-area"
        style={{
          backgroundImage: "url(assets/img/all-images/bg/bg4.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
           zIndex:"0",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cta-header heading2">
                <h2 className="text-anime-style-3" >
                  Connect With <br />Odisha’s
                  Trusted <span style={{fontStyle:'italic',color:"#cbcd30"}}>Construction</span> Network
                </h2>
                <div className="space16" />
                <p data-aos="fade-left" data-aos-duration={900}>
                  Join OF Contractor to explore construction materials,
                  equipment rentals, finance solutions, insurance support, and
                  verified B2B business connections — all in one powerful
                  platform.
                </p>
                <div className="space30" />
                <form data-aos="fade-left" data-aos-duration={1100}>
                  <input type="text" placeholder="Email Address" />
                  <button type="submit" className="theme-btn4" style={{backgroundColor:"#cbcd30"}}>
                    Join Now{" "}
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
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
          <img src="/assets/img/all-images/cta/1.png" alt="housebox" />
        </div>
      </div>
    </>
  );
}
