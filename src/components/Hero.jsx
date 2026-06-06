import "../styles/hero.css";

import Ellipse255 from "../assets/Ellipse255.png";
import Ellipse256 from "../assets/Ellipse256.png";
import Ellipse257 from "../assets/Ellipse257.png";
import Ellipse258 from "../assets/Ellipse258.png";
import Ellipse259 from "../assets/Ellipse259.png";
import Ellipse260 from "../assets/Ellipse260.png";
import Ellipse261 from "../assets/Ellipse261.png";
import Ellipse262 from "../assets/Ellipse262.png";

import Rectangle657 from "../assets/Rectangle657.png";
import Rectangle658 from "../assets/Rectangle658.png";

import Vector5 from "../assets/Vector5.png";

import Ellipse736 from "../assets/Ellipse736.png";
import Vector2510 from "../assets/Vector2510.png";
import Vector2511 from "../assets/Vector2511.png";

function Hero() {
  return (
    <section className="hero">

      <img src={Vector2510} alt="" className="curve-red" />
      <img src={Vector2511} alt="" className="curve-black" />

      <img src={Ellipse736} alt="" className="purple-shape" />

      <div className="hero-content">
        <h1 className="hero-title">
          <div className="hero-line">
            The t

            <span className="thinkers-word">
              {" "}hinkers
              <img
                src={Vector5}
                alt=""
                className="thinkers-vector"
              />
            </span>

            {" "}and
          </div>

          <div className="hero-line">
            doers were c

            <span className="changing-word">
              {" "}hanging
              <img
                src={Rectangle657}
                alt=""
                className="changing-highlight"
              />
            </span>
          </div>

          <div className="hero-line">
            the s

            <span className="status-word">
              {" "}tatus
              <img
                src={Rectangle658}
                alt=""
                className="status-highlight"
              />
            </span>

            {" "}Quo with
          </div>
        </h1>

        <p>
          We are a team of strategists, designers,
          communicators, researchers. Together,
          we believe that progress only happens
          when you refuse to play things safe.
        </p>

        <div className="people-row">
          <img src={Ellipse262} alt="" className="small" />
          <img src={Ellipse261} alt="" className="medium" />
          <img src={Ellipse255} alt="" className="large" />
          <img src={Ellipse256} alt="" className="medium" />
          <img src={Ellipse257} alt="" className="small" />
          <img src={Ellipse258} alt="" className="medium" />
          <img src={Ellipse259} alt="" className="large" />
          <img src={Ellipse260} alt="" className="medium" />
        </div>
      </div>
    </section>
  );
}

export default Hero;