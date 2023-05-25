import React from "react";
import FormatPrice from "../../helper/FormatPrice";
import Review from "../../helper/Review";
import RatingsIcons from "../../helper/RatingsIcons";
import CartQuantity from "../Cart/CartQuantity";
import CalculateDiscount from "../../helper/Calculate";
const SingleItem = ({ product }) => {
  const {
    imageUrl,
    title,
    price,
    description,
    rating,
    reviews,
    discountedPrice,
  } = product;

  return (
    <section className=" container mx-auto gap-6 font-pins py-3 text-fontcolor lg:flex lg:max-w-4xl md:max-w-xl md:flex">
      <div className="max-w-xl mx-auto p-10">
        <img
          src={imageUrl}
          alt={title}
          className=" rounded-md w-full max-w-md py-5 m-2 md:max-w-md  lg:max-w-md p-10 md:p-2"
        />
      </div>
      <div className="flex flex-col p-3">
        <h1 className="w-full font-bold text-center border-b-2 py-5 lg:text-2xl md:text-1xl ">
          {title}
        </h1>

        <div className="py-2 my-3">
          <div className="flex  flex-col py-2">
            <h2 className=" font-medium ">Price</h2>

            <div className=" flex justify-between gap-8 font-sans text-base font-medium leading-relaxed antialiased text-primary ">
              {<FormatPrice price={discountedPrice} />}
              <del className=" font-sans text-sm font-normal leading-normal  antialiased py-1 text-red-600  ">
                {discountedPrice !== price && (
                  <p>
                    <FormatPrice price={price} />
                  </p>
                )}
              </del>
              <p>
                <CalculateDiscount />
              </p>
            </div>
          </div>
          <div className="flex gap-5 justify-between  py-2">
            <h2 className=" font-medium ">Rating</h2>
            <div className="flex">
              <RatingsIcons rating={rating} />
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
  );
};

export default SingleItem;
