import React, { useContext, useState } from "react";
import FormatPrice from "../../helper/FormatPrice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";
const CartProducts = ({ cartItem }) => {
  const { removeFromCart, setIncrease, setDecrease } = useContext(CartContext);

  // const [amount, setAmount] = useState(1);
  // function setDecrease() {
  //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // }
  // function setIncrease() {
  //   if (amount < 1) {
  //   }
  //   setAmount(amount + 1);
  // }
  const { id, title, discountedPrice, imageUrl, amount } = cartItem;

  return (
    <>
      <div className=" container mx-auto max-w-3xl my-6  border-b-2 pb-6">
        <div className="flex flex-col gap-6  flex-wrap p-3 items-center  md:justify-around lg:justify-around ">
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
            <div className="flex gap-5 pt-4 items-center ">
              <div>
                <FaMinus
                  onClick={() => setDecrease(id)}
                  className="cursor-pointer w-5   h-full bg-green-300"
                />
              </div>
              <div className="font-bold  text-1xl text-primary">{amount}</div>
              <div>
                <FaPlus
                  onClick={() => setIncrease(id)}
                  className="cursor-pointer w-5 h-full bg-green-300"
                />
              </div>
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
