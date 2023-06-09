import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProducts from "./CartProducts";
// import { Link } from "react-router-dom";
import ClearCart from "./ClearCart";

const CartItems = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart?.length > 0 ? (
        <div className=" mx-auto max-w-4xl ">
          {cart.map((cartItem) => {
            return <CartProducts key={cartItem.id} cartItem={cartItem} />;
          })}
          <div>
            <ClearCart />
          </div>
        </div>
      ) : (
        <div className="mx-auto text-center text-4xl my-16 mb-16 font-bold ">
          <h1>your cart is empty...</h1>
        </div>
      )}
    </>
  );
};

export default CartItems;
