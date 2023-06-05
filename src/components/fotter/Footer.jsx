import React from "react";
import Logo from "../../pictures/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className=" text-fontcolor font-pins bg-yellow-100 max-w-2xl container mx-auto rounded-full shadow-md mb-6 my-6 ">
        <div className=" container mx-auto max-w-md flex justify-center items-center   ">
          <img src={Logo} alt="logo" className=" p-2" />
        </div>
        <div className="container mx-auto max-w-md flex justify-center items-center">
          <p> &copy; Rohit.K.A {year}</p>
        </div>
        <div className=" capitalize text-center py-2 ">
          <p className=" text-amber-950 ">
            Build with create react App,tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
