import React from "react";
import "../styles/navbar.css";

import Elementum from "../assets/Elementum.png";
import Line21 from "../assets/Line21.png";
import Line22 from "../assets/Line22.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={Elementum} alt="Elementum Logo" />
      </div>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Studio</li>
          <li>Services</li>
          <li>Contact</li>
          <li>FAQ's</li>
        </ul>
      </nav>

      <div className="navbar-lines">
        <img src={Line21} alt="" className="nav-line" />
        <img src={Line22} alt="" className="nav-line" />
      </div>
    </header>
  );
};

export default Navbar;