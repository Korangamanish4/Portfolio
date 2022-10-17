import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Maneesh Koranga
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://github.com/korangamanish4" target="-blank">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/maneesh-koranga-176653113" target="-blank">
        <BsLinkedin />
      </a>
      <a href="https://facebook.com" target="-blank">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" target="-blank">
        <FiInstagram />
      </a>
      </div>
      <div className="footer__copyright">
<small>&copy; All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
