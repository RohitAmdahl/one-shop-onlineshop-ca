import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { RiDeleteBin2Line } from "react-icons/ri";

const ClearCart = () => {
  const { total, clearCart } = useContext(CartContext);

  return (
    <div className="flex justify-center items-center">
      <div className=" flex justify-center items-center flex-wrap gap-10 max-w-lg container mx-auto py-16">
        <div className=" flex justify-center w-full text-center gap-3 text-lg ">
          <div className=" text-center ml-2 uppercase flex justify-center items-center gap-5 ">
            Total:
            <span className=" text-xl ml-5 w-full flex gap-4 justify-center items-center">
              {parseFloat(total).toFixed(2)} Nok
              <RiDeleteBin2Line
                onClick={clearCart}
                className="text-red-600 w-10 h-12 bg-yellow-200 p-1 border items-center text-2xl cursor-pointer  "
              />
            </span>
          </div>
        </div>

        <div className="border-b-2 w-full flex justify-center item-center ">
          <Link
            className="block w-64 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 hover:bg-yellow-300 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary m-3 shadow-lg "
            to="/checkout"
          >
            Checkout
          </Link>
        </div>
        <div className="border-b-2 w-full flex justify-center item-center ">
          <Link
            to="/product"
            className="block w-64 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 hover:bg-yellow-300 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary m-3 shadow-lg "
          >
            Continue Shopping...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClearCart;
