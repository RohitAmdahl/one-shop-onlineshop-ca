import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const RatingsIcons = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index} rating={index} className="flex ">
        {rating > index + 1 ? (
          <FaStar className="text-yellow-500" />
        ) : rating > number ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <AiOutlineStar className="text-yellow-500" />
        )}
      </span>
    );
  });
  return (
    <>
      <div className="flex justify-center gap-2 items-center">{ratingStar}</div>
    </>
  );
};

export default RatingsIcons;
