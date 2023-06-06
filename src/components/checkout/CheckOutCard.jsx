import React, { useContext } from "react";
import FormatPrice from "../../helper/FormatPrice";

import { CartContext } from "../../context/CartContext";

const CheckOutCard = ({ CheckOutCardItem }) => {
  const { id, title, discountedPrice, imageUrl, amount } = CheckOutCardItem;

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
              <div className="font-bold text-2xl text-primary">{amount}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutCard;
