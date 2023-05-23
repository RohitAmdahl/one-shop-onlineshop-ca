import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartQuantity = ({ product }) => {
  const [amount, setAmount] = useState(1);
  function setDecrease() {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }
  function setIncrease() {
    if (amount < 1) {
    }
    setAmount(amount + 1);
  }
  return (
    <>
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
          <button className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary ">
            Add to Cart
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartQuantity;
