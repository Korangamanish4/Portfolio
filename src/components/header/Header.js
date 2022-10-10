import React from "react";
import CTA from "./CTA";
import "./header.css";
import Me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Maneesh Koranga</h1>
        <h5 className="text-light">React Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="img" src={Me} alt='Me'/>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
