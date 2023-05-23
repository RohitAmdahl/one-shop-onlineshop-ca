import React from "react";

const Review = ({ reviews }) => {
  return (
    <div>
      {reviews.map((items, index) => {
        return (
          <>
            <div key={index} className="flex flex-col">
              <p className="font-bold">{items.username}</p>

              <div className="py-2">
                <p>{items.description}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Review;
