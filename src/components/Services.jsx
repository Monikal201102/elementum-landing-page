import "../styles/services.css";

import Vector5 from "../assets/Vector5.png";
import Rectangle657 from "../assets/Rectangle658.png";
import Rectangle661 from "../assets/Rectangle661.png";

import Arrow4 from "../assets/Arrow4.png";
import Vector2516 from "../assets/Vector2516.png";

function Services() {
  return (
    <section className="services">

      <img
        src={Vector2516}
        alt=""
        className="services-curve"
      />

      <div className="services-heading">

        <h2>

          What we c

          <span className="can-word">
            {" "}an
            <img
              src={Rectangle657}
              alt=""
              className="can-highlight"
            />
          </span>

          {" "}offer you!

          <img
            src={Vector5}
            alt=""
            className="offer-vector"
          />

        </h2>

      </div>

      <div className="service-list">

        <div className="service-row">

          <div className="service-left">
            Office of multiple
            interest content
          </div>

          <div className="service-right">
            Collaborative & partnership
          </div>

          <img
            src={Arrow4}
            alt=""
            className="service-arrow"
          />

        </div>

        <div className="service-row">

          <div className="service-left">
            The hanger US Air force
            digital experimental
          </div>

          <div className="service-right">
            We talk about our weight
          </div>

          <img
            src={Arrow4}
            alt=""
            className="service-arrow"
          />

        </div>

        <div className="service-row">

          <div className="service-left">
            Delta faucet content,
            social, digital
          </div>

          <div className="service-right">

            Piloting digital c

            <span className="confidence-word">
              {" "}onfidence
              <img
                src={Rectangle661}
                alt=""
                className="confidence-highlight"
              />
            </span>

          </div>

          <img
            src={Arrow4}
            alt=""
            className="service-arrow"
          />

        </div>

      </div>

    </section>
  );
}

export default Services;