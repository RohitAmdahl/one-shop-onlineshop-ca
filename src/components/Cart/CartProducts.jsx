import React, { useContext } from "react";
import FormatPrice from "../../helper/FormatPrice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";
const CartProducts = ({ cartItem }) => {
  const { removeFromCart, setIncrease, setDecrease } = useContext(CartContext);

  const { id, title, discountedPrice, imageUrl, amount } = cartItem;

  return (
    <>
      <div className=" container mx-auto max-w-4xl my-6  border-b-2 pb-6">
        <div className="flex flex-col gap-6  flex-wrap p-3 items-center  md:justify-around md:flex-row lg:justify-around lg:flex-row">
          <img
            src={imageUrl}
            alt={title}
            className=" max-w-[100px] rounded-lg "
          />
          <div className="flex flex-col ">
            <h1 className="uppercase pb-4">{title}</h1>
            <FormatPrice price={discountedPrice * amount} />
          </div>
          <div className="flex flex-col">
            <p className="text-center"> Quantity</p>
            <div className="flex gap-5 pt-4 items-center  ">
              <div className="p-2 border-2 bg-violet-100 shadow-xl ">
                <FaMinus
                  onClick={() => setDecrease(id)}
                  className="cursor-pointer w-5 h-full"
                />
              </div>
              <div className="font-bold text-2xl text-primary">{amount}</div>
              <div className="p-2 border bg-violet-100 shadow-xl ">
                <FaPlus
                  onClick={() => setIncrease(id)}
                  className="cursor-pointer w-5 h-full"
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
