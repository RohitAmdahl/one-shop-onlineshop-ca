import React from "react";
import ModelPic from "../../pictures/modelsPic.jpg";
import { NavLink } from "react-router-dom";
const MainSection = () => {
  return (
    <>
      <div className="max-w-xl mx-auto text-fontcolor">
        <p className=" font-pins container mx-auto text-center p-5 text-textColor ">
          For members : free shipping over 300nok any location in Norway.
        </p>
        <div>
          <img src={ModelPic} alt="Modelpicture" />
        </div>
        <div className="m-10 flex justify-center items-center">
          <NavLink
            to="/product"
            className=" font-pins bg-primary px-5 py-1 text-pink hover:bg-blue-600 hover:rounded-r-lg hover:text-white "
          >
            Shop now
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MainSection;
