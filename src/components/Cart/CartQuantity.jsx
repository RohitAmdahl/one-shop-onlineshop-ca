import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const CartQuantity = ({ amount, setDecrease, setIncrease }) => {
  return (
    <>
      <div className="flex">
        <div>
          <button onClick={() => setDecrease}>
            <FaMinus />
          </button>
          <p className="font-bold text-1xl"> {amount} </p>
          <button onClick={() => setIncrease}>
            <FaPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartQuantity;
