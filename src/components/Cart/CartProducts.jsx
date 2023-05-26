import React from "react";
import FormatPrice from "../../helper/FormatPrice";
import { Link } from "react-router-dom";
const CartProducts = ({ cartItem }) => {
  const { id, title, discountedPrice, imageUrl } = cartItem;

  return (
    <div className=" container mx-auto max-w-lg my-6  border-b-2 pb-6">
      <div className="grid grid-cols-3 gap-11">
        <img src={imageUrl} alt={title} className=" max-w-[80px] rounded-lg " />
        <div className="flex justify-around">
          <h1 className="uppercase">{title}</h1>
        </div>
        <FormatPrice price={discountedPrice} />
      </div>
    </div>
  );
};

export default CartProducts;
