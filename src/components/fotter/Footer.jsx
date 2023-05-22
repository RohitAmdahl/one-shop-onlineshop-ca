import React from "react";
import Logo from "../../pictures/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className=" container mx-auto max-w-md flex justify-center items-center ">
          <img src={Logo} alt="logo" className=" p-5" />
        </div>
        <div className="container mx-auto max-w-md flex justify-center items-center">
          <p> &copy; Rohit.K.A {year}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
