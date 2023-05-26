import React from "react";
import FormatPrice from "../../helper/FormatPrice";
import Review from "../../helper/Review";
import RatingsIcons from "../../helper/RatingsIcons";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

const SingleItem = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const { addToCart } = useContext(CartContext);
  console.log("this is from single page:", useContext(CartContext));

  function setDecrease() {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }
  function setIncrease() {
    if (amount < 1) {
    }
    setAmount(amount + 1);
  }
  const {
    id,
    imageUrl,
    title,
    price,
    description,
    rating,
    reviews,
    discountedPrice,
  } = product;
  const discount = () => {
    if (product.discountedPrice && product.price) {
      const discount = product.price - product.discountedPrice;
      const discountPercentage = Math.round((discount / product.price) * 100);
      return discountPercentage;
    }
    return 0;
  };
  return (
    <section className=" container mx-auto gap-6 font-pins py-3 text-fontcolor lg:flex lg:max-w-4xl md:max-w-xl md:flex">
      <div className="max-w-xl mx-auto p-10">
        {product.discountedPrice && (
          <p className="bg-red-500 text-white p-2 text-center rounded-full  w-2/5 ">
            - {discount()}% off
          </p>
        )}
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
        <div className=" container mx-auto border-b-2 py-6 mb-4 ">
          <div className=" flex justify-around ">
            <button onClick={setDecrease}>
              <FaMinus />
            </button>
            <div className="font-bold text-1xl text-primary"> {amount} </div>
            <button onClick={setIncrease}>
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="p-6 pt-0 my-4 ">
          <Link to="/cart">
            <button
              onClick={() => addToCart(product, id)}
              className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary "
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleItem;
