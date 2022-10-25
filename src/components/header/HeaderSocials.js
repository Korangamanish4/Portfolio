import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/korangamanish4" target="-blank">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/maneesh-koranga-176653113" target="-blank">
        <BsLinkedin />
      </a>
      <a href="https://facebook.com/manish.koranga.75" target="-blank">
        <FaFacebookSquare />
      </a>
      <a href="https://instagram.com/mkjudoka" target="-blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
