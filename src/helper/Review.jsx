import React from "react";

const Review = ({ reviews }) => {
  return (
    <div>
      {reviews.map((items, index) => {
        return (
          <>
            <div key={index}>
              <p className="font-bold">
                Name
                {items.username}
              </p>

              <div className="py-2">
                <p>
                  comment:
                  {items.description}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Review;
