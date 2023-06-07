import React from "react";
import Logo from "../../pictures/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="  container mx-auto max-w-md   text-fontcolor font-pins bg-yellow-100  rounded-full shadow-md mb-6 my-6 ">
        <div className="mb-2 p-2">
          <div className=" container mx-auto max-w-md flex justify-center items-center mb-2   ">
            <img src={Logo} alt="logo" className=" p-2" />
          </div>
          <div className="container mx-auto max-w-md flex justify-center items-center">
            <p> &copy; Rohit.K.A {year}</p>
          </div>
          <div className=" capitalize text-center p-4 ">
            <p className=" text-amber-950 mb-3 ">
              Build with create react App,tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
