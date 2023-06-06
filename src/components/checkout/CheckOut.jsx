import React from "react";
import { Link } from "react-router-dom";
const CheckOut = () => {
  return (
    <div className=" container w-full mx-auto my-10 p-10 font-pins">
      <h1 className="text-xl text-center text-green-700">
        CheckOut Successfull
      </h1>
      <p className="text-center py-5">
        we are happy to have you asour custumer
      </p>
      <p className="text-center py-12 ">
        your next purchase, we are giving you 25% discount to our any products
      </p>
      <div className="border-b-2 my-5 py-5 w-full flex justify-center item-center ">
        <Link
          to="/product"
          className="block w-64 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 hover:bg-yellow-300 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary m-3 shadow-lg "
        >
          pay now...
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
