import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlinerStar } from "react-icons/ai";

const RatingsIcons = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating > index + 1 ? (
          <FaStar />
        ) : rating > number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlinerStar />
        )}
      </span>
    );
  });
  return (
    <>
      <div>{ratingStar}</div>
    </>
  );
};

export default RatingsIcons;
