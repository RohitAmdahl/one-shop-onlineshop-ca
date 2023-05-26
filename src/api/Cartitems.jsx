import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProducts from "../components/Cart/CartProducts";

const CartItems = () => {
  const { cart } = useContext(CartContext);
  console.log("cart", cart);
  return (
    <div>
      {cart.map((cardItem) => {
        console.log("item", cardItem);
        return <CartProducts key={cardItem.id} cardItem={cardItem} />;
      })}
    </div>
  );
};

export default CartItems;
