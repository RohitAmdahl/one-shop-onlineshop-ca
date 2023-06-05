import React from "react";
import ModelPic from "../../pictures/modelsPic.jpg";

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
      </div>
    </>
  );
};

export default MainSection;
