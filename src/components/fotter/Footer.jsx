import React from "react";
import Logo from "../../pictures/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer-logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="name">
        <p> &copy; Rohit.K.A {year}</p>
      </div>
    </>
  );
};

export default Footer;
