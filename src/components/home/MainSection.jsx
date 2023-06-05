import React from "react";
import ModelPic from "../../pictures/modelsPic.jpg";
import { NavLink } from "react-router-dom";

const MainSection = () => {
  return (
    <>
      <div className="max-w-xl mx-auto text-fontcolor m-5">
        <p className=" font-pins container mx-auto text-center p-1 text-textColor ">
          For members : free shipping over 300nok any location in Norway.
        </p>
        <div>
          <img src={ModelPic} alt="Modelpicture" />
        </div>
        <div className="m-5 flex justify-center items-center">
          <NavLink
            to="/product"
            className=" block  select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary"
          >
            Shop now
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MainSection;
