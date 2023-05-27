import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { RiDeleteBin2Line } from "react-icons/ri";
import CartItems from "./Cartitems";

const ClearCart = () => {
  const { clearCart, total } = useContext(CartContext);
  const { id } = CartItems;
  return (
    <div className="flex justify-center items-center">
      <div className=" flex justify-center items-center flex-wrap gap-10 max-w-lg container mx-auto py-16">
        <div className=" flex w-full justify-between items-center gap-3 text-lg ">
          <div className="flex ml-2 uppercase">
            Total:
            <span className=" text-xl ml-5">
              {parseFloat(total).toFixed(2)} Nok
            </span>
          </div>

          <RiDeleteBin2Line
            onClick={() => clearCart(id)}
            className="text-red-600 bg-yellow-400 h-12 w-12 p-2 flex justify-center items-center  mx-8 text-2xl cursor-pointer "
          />
        </div>
        <Link
          className="block w-48  select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary m-3 "
          type="button"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default ClearCart;
