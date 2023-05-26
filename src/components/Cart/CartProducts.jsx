import React from "react";
import FormatPrice from "../../helper/FormatPrice";
const CartProducts = ({ cartItem }) => {
  const { title, discountedPrice, imageUrl } = cartItem;
  return (
    <div className=" container mx-auto max-w-lg my-6  border-b-2 pb-6">
      <div className="grid grid-cols-3 gap-11">
        <img src={imageUrl} alt={title} className="h-40 w-36 rounded-lg " />
        <div className="flex justify-around">
          <h1>{title}</h1>
        </div>
        <FormatPrice price={discountedPrice} />
      </div>
    </div>
  );
};

export default CartProducts;
