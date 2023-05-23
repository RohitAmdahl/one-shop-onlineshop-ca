import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const CartQuantity = ({ amount, setDecrease, setIncrease }) => {
  return (
    <>
      <div className="flex">
        <div>
          <button onClick={() => setDecrease()}>
            <FaMinus />
          </button>
          <div className="font-bold text-1xl"> {amount} </div>
          <button onClick={() => setIncrease()}>
            <FaPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartQuantity;
