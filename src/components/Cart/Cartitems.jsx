import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProducts from "./CartProducts";
// import { Link } from "react-router-dom";
import ClearCart from "./ClearCart";

const CartItems = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {/* {cart.map((cartItem) => {
        return <CartProducts key={cartItem.id} cartItem={cartItem} />;
      })} */}
      {cart?.length > 0 ? (
        <div className=" mx-auto max-w-4xl ">
          <ClearCart />
          {cart.map((cartItem) => {
            return <CartProducts key={cartItem.id} cartItem={cartItem} />;
          })}
        </div>
      ) : (
        <div className="mx-auto text-center text-4xl my-16 font-bold ">
          your cart is empty...
        </div>
      )}
    </>
  );
};

export default CartItems;
