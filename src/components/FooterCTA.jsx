import "../styles/footercta.css";

import Rectangle665 from "../assets/Rectangle665.png";
import Rectangle666 from "../assets/Rectangle666.png";
import Ellipse736 from "../assets/Ellipse739.png";
import Vector2518 from "../assets/Vector2518.png";
import Vector2519 from "../assets/Vector2519.png";

function FooterCTA() {
  return (
    <section className="footer-cta">

      <img src={Rectangle665} alt="" className="footer-bg" />

      <div className="subscribe-section">

        <img
          src={Vector2518}
          alt=""
          className="subscribe-arrow1"
        />

        <img
          src={Vector2519}
          alt=""
          className="subscribe-arrow2"
        />

        <img
          src={Ellipse736}
          alt=""
          className="footer-purple"
        />

        <h2>
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p>
          To make your stay special and even more memorable
        </p>

        <button className="subscribe-btn">
          <img
            src={Rectangle666}
            alt=""
            className="btn-bg"
          />
          <span>Subscribe Now</span>
        </button>

      </div>

      <div className="footer-line"></div>

      <div className="footer-links">

        <div className="footer-column">
          <h4>Company</h4>

          <a href="/">Home</a>
          <a href="/">Studio</a>
          <a href="/">Service</a>
          <a href="/">Blog</a>
        </div>

        <div className="footer-column">
          <h4>Terms & Policies</h4>

          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Explore</a>
          <a href="/">Accessibility</a>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>

          <a href="/">Instagram</a>
          <a href="/">LinkedIn</a>
          <a href="/">Youtube</a>
          <a href="/">Twitter</a>
        </div>

        <div className="footer-column">
          <h4>Terms & Policies</h4>

          <p>1498w Fluton ste, STE 2D</p>
          <p>Chicago, IL 63867.</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </div>

      </div>

      <div className="copyright">
        ©2023 Elementum. All rights reserved
      </div>

    </section>
  );
}

export default FooterCTA;