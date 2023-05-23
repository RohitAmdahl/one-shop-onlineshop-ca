import React from "react";
import FormatPrice from "../../helper/FormatPrice";
import TbTruckDelivery from "react-icons/tb";
const SingleItem = ({ product }) => {
  const { id, imageUrl, title, price, description, rating, tags, reviews } =
    product;

  return (
    <>
      <section className=" container max-w-xl mx-auto flex gap-6 font-pins py-3 text-fontcolor lg:flex">
        <div className="max-w-lg mx-auto">
          <img
            src={imageUrl}
            alt={title}
            className=" rounded-md w-full max-w-lg py-5 m-2"
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

                <p className="text-primary">{<FormatPrice price={price} />}</p>
              </div>
              <div className="flex gap-5 justify-between py-2">
                <h2 className=" font-medium ">Rating</h2>
                <p> {rating} </p>
              </div>
              <div className="flex gap-5 justify-between">
                <h2 className=" font-medium ">Review</h2>
                {/* <p> {reviews} </p> */}
              </div>
            </div>
          </div>
          <div className="my-3">
            <h2 className=" font-semibold ">Description</h2>
            <div>
              <p>{description} </p>
            </div>
          </div>
          <div></div>
          <div className="p-6 pt-0 my-4 ">
            <button className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary ">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
