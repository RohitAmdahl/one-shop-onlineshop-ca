import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import CheckOutCard from "./CheckOutCard";

const CheckOutProduct = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <>
      <div className=" bg-gray-200 rounded-xl  max-w-md container mx-auto text-center  uppercase flex justify-center items-center">
        Total:
        <span className="text-xl ml-5 p-2 text-center flex gap-4 justify-center items-center">
          {parseFloat(total).toFixed(2)} Nok
        </span>
      </div>
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
    </>
  );
};

export default CheckOutProduct;
