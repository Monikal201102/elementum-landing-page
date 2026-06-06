import "../styles/testimonial.css";

import Ellipse263 from "../assets/Ellipse263.png";
import Ellipse264 from "../assets/Ellipse264.png";
import Ellipse265 from "../assets/Ellipse265.png";
import Ellipse266 from "../assets/Ellipse266.png";
import Ellipse267 from "../assets/Ellipse267.png";
import Ellipse268 from "../assets/Ellipse268.png";
import Ellipse269 from "../assets/Ellipse269.png";
import Ellipse270 from "../assets/Ellipse270.png";

import Rectangle657 from "../assets/Rectangle658.png";
import Rectangle663 from "../assets/Rectangle663.png";

import Vector5 from "../assets/Vector5.png";

import InvertedComma1 from "../assets/InvertedComma1.png";
import InvertedComma2 from "../assets/InvertedComma2.png";

function Testimonials() {
  return (
    <section className="testimonials">

      <img src={Ellipse263} alt="" className="t-img t-img1" />
      <img src={Ellipse266} alt="" className="t-img t-img2" />
      <img src={Ellipse268} alt="" className="t-img t-img3" />
      <img src={Ellipse267} alt="" className="t-img t-img4" />
      <img src={Ellipse264} alt="" className="t-img t-img5" />
      <img src={Ellipse270} alt="" className="t-img t-img6" />
      <img src={Ellipse265} alt="" className="t-img t-img7" />
      <img src={Ellipse269} alt="" className="t-img t-img8" />

      <div className="testimonial-heading">

        <h2>

          <span className="what-word">
            What
            <img
              src={Rectangle657}
              alt=""
              className="what-highlight"
            />
          </span>

          {" "}our customer says A

          <span className="about-word">
            {" "}bout Us
            <img
              src={Vector5}
              alt=""
              className="about-vector"
            />
          </span>

        </h2>

      </div>

      <div className="testimonial-card">

  <img
    src={Rectangle663}
    alt=""
    className="message-bg"
  />

  {/* RIGHT DOUBLE QUOTES */}

  <img
    src={InvertedComma2}
    alt=""
    className="quote-right-1"
  />

  <img
    src={InvertedComma2}
    alt=""
    className="quote-right-2"
  />

  <p>
    Elementum delivered the site within the timeline
    as they requested. In the end, the client found a
    50% increase in traffic within days since its launch.
    They also had an impressive ability to use technologies
    that the company hadn't used, which have also proved
    to be easy to use and reliable.
  </p>

  {/* LEFT DOUBLE QUOTES */}

  <img
    src={InvertedComma1}
    alt=""
    className="quote-left-1"
  />

  <img
    src={InvertedComma1}
    alt=""
    className="quote-left-2"
  />

</div>

    </section>
  );
}

export default Testimonials;