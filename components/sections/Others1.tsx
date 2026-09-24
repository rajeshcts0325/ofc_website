import Link from 'next/link'
import '@/styles/custom.css'


export default function Others1() {
  return (
    <>
      <div className="counter-section-area">
        <div className="container">

          <div className="counter-main-box">

            {/* Item 1 */}
            <div className="counter-single-box">
              <div className="icon">
                <i className="fas fa-boxes"></i>
              </div>

              <div className="text">
                <h3>1000+</h3>
                <p>Construction Products</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="counter-single-box">
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>

              <div className="text">
                <h3>500+</h3>
                <p>Verified Suppliers</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="counter-single-box">
              <div className="icon">
                <i className="fas fa-hard-hat"></i>
              </div>

              <div className="text">
                <h3>100+</h3>
                <p>Contractors Connected</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="counter-single-box">
              <div className="icon">
                <i className="fas fa-headset"></i>
              </div>

              <div className="text">
                <h3>24/7</h3>
                <p>Business Support</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
