import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import CheckOutCard from "./CheckOutCard";

const CheckOutProduct = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <>
      {cart?.length > 0 ? (
        <div className=" mx-auto max-w-4xl ">
          {cart.map((CheckOutCardItem) => {
            return (
              <CheckOutCard
                key={CheckOutCardItem.id}
                CheckOutCardItem={CheckOutCardItem}
              />
            );
          })}
        </div>
      ) : (
        <div className="mx-auto text-center text-2xl my-16 mb-16 font-bold ">
          <h1>your cart is empty...</h1>
        </div>
      )}
      <div className=" text-center ml-2 uppercase flex justify-center items-center gap-5 ">
        Total:
        <span className="  text-xl ml-5 w-full flex gap-4 justify-center items-center">
          {parseFloat(total).toFixed(2)} Nok
        </span>
      </div>
    </>
  );
};

export default CheckOutProduct;
