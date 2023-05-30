import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProducts from "./CartProducts";

const CartItems = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {/* {cart.map((cartItem) => {
        return <CartProducts key={cartItem.id} cartItem={cartItem} />;
      })} */}
      {cart?.length > 0 ? (
        <div className=" mx-auto max-w-4xl ">
          {cart.map((cartItem) => {
            return <CartProducts key={cartItem.id} cartItem={cartItem} />;
          })}
        </div>
      ) : (
        <div className="mx-auto text-center text-4xl my-16 font-bold ">
          your cart is empty...
        </div>
      )}
    </div>
  );
};

export default CartItems;
