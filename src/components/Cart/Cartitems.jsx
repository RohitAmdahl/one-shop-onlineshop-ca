import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProducts from "./CartProducts";

const CartItems = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map((cartItem) => {
        return <CartProducts key={cartItem.id} cartItem={cartItem} />;
      })}
    </div>
  );
};

export default CartItems;
