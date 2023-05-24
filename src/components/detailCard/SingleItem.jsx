import React from "react";
import FormatPrice from "../../helper/FormatPrice";
import Review from "../../helper/Review";
import RatingsIcons from "../../helper/RatingsIcons";
import CartQuantity from "../Cart/CartQuantity";
const SingleItem = ({ product }) => {
  const { imageUrl, title, price, description, rating, reviews } = product;

  return (
    <>
      <section className=" container mx-auto gap-6 font-pins py-3 text-fontcolor lg:flex lg:max-w-2xl md:max-w-xl md:flex">
        <div className="max-w-xl mx-auto p-10">
          <img
            src={imageUrl}
            alt={title}
            className=" rounded-md w-full max-w-md py-5 m-2 md:max-w-sm lg:py-5 lg:max-w-md"
          />
        </div>
        <div className="flex flex-col p-3">
          <h1 className="w-full font-bold text-center border-b-2 py-5 lg:text-2xl md:text-1xl ">
            {title}
          </h1>
          <div className="">
            <div className="py-2 my-3">
              <div className="flex  justify-between py-2">
                <h2 className=" font-medium ">Price</h2>

                <div className="text-primary">
                  {<FormatPrice price={price} />}
                </div>
              </div>
              <div className="flex gap-5 justify-between py-2">
                <h2 className=" font-medium ">Rating</h2>
                <div>
                  <RatingsIcons rating={rating} />
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 border-b-2 py-2">
            <h2 className=" font-semibold ">Description</h2>

            <p>{description}</p>
          </div>
          <div className="flex flex-col">
            <h2 className=" font-bold "> People Review </h2>

            <Review key={reviews} reviews={reviews} />
          </div>
          <div>
            <CartQuantity />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
