import "../styles/feature.css";

import Arrow4 from "../assets/Arrow4.png";
import Rectangle657 from "../assets/Rectangle658.png";
import Vector5 from "../assets/Vector5.png";

import Ellipse734 from "../assets/Ellipse734.png";
import Vector2517 from "../assets/Vector2517.png";

function FeatureSection({
  description,
  image,
  polygon,
  reverse = false,
}) {
  return (
    <section className="feature-section">

      {!reverse && (
        <>
          <img
            src={Ellipse734}
            alt=""
            className="ellipse734"
          />

          <img
            src={Vector2517}
            alt=""
            className="feature-curve"
          />
        </>
      )}

      <div
        className={`feature-container ${
          reverse ? "reverse" : ""
        }`}
      >
        {!reverse ? (
          <>
            <div className="feature-text">
              <div className="heading-wrapper">
                <h2 className="feature-title">
                  Tomorrow should be better than{" "}
                  <span className="highlight-word">
                    today
                    <img
                      src={Rectangle657}
                      alt=""
                      className="word-highlight"
                    />
                  </span>
                </h2>

                <img
                  src={Vector5}
                  alt=""
                  className="vector-top"
                />
              </div>

              <p>{description}</p>

              <a href="#!" className="read-more">
                Read more
                <img src={Arrow4} alt="" />
              </a>
            </div>

            <div className="feature-image">

              <img
                src={polygon}
                alt=""
                className="polygon-back polygon-right"
              />

              <img
                src={image}
                alt=""
                className="main-image"
              />

            </div>
          </>
        ) : (
          <>
            <div className="feature-image">

              <img
                src={polygon}
                alt=""
                className="polygon-back polygon-left"
              />

              <img
                src={image}
                alt=""
                className="main-image"
              />

              <img
                src={polygon}
                alt=""
                className="polygon-front"
              />

            </div>

            <div className="feature-text">
              <div className="heading-wrapper">
                <h2 className="feature-title">
                  <span className="highlight-word">
                    See
                    <img
                      src={Rectangle657}
                      alt=""
                      className="word-highlight"
                    />
                  </span>{" "}
                  how we can help you{" "}
                  <span className="progress-word">
                    progress
                  </span>
                </h2>

                <img
                  src={Vector5}
                  alt=""
                  className="vector-bottom"
                />
              </div>

              <p>{description}</p>

              <a href="#!" className="read-more">
                Read more
                <img src={Arrow4} alt="" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default FeatureSection;