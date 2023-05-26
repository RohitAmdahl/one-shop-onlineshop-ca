import React, { useContext, useState } from "react";
import FormatPrice from "../../helper/FormatPrice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";
const CartProducts = ({ cartItem }) => {
  const { removeFromCart } = useContext(CartContext);

  const [amount, setAmount] = useState(1);
  function setDecrease() {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }
  function setIncrease() {
    if (amount < 1) {
    }
    setAmount(amount + 1);
  }
  const { id, title, discountedPrice, imageUrl } = cartItem;

  return (
    <>
      <div className=" container mx-auto max-w-2xl my-6  border-b-2 pb-6">
        <div className="flex gap-6 justify-around flex-wrap p-3 items-center ">
          <img
            src={imageUrl}
            alt={title}
            className=" max-w-[80px] rounded-lg "
          />
          <div className="flex flex-col ">
            <h1 className="uppercase pb-4">{title}</h1>
            <FormatPrice price={discountedPrice * amount} />
          </div>
          <div className="flex flex-col">
            <p className="text-center"> Quantity</p>
            <div className="flex gap-5 py-5 items-center ">
              <FaMinus onClick={setDecrease} />
              <div className="font-bold  text-1xl text-primary">{amount}</div>
              <FaPlus onClick={setIncrease} />
            </div>
          </div>
          <div>
            <RiDeleteBin2Line
              onClick={() => removeFromCart(id)}
              className="text-red-600 text-2xl cursor-pointer "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProducts;
