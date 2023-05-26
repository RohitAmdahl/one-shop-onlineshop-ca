import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProducts from "../components/Cart/CartProducts";

const CartItems = () => {
  const { cart } = useContext(CartContext);
  console.log("cart", cart);
  return (
    <div>
      {cart.map((cartItem) => {
        console.log("item", cartItem);
        return <CartProducts key={cartItem.id} cartItem={cartItem} />;
      })}
    </div>
  );
};

export default CartItems;
