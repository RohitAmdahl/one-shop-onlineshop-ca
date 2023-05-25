import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProducts from "../components/Cart/CartProducts";

const CartItems = () => {
  const { cart } = useContext(CartContext);
  console.log(useContext(CartContext));
  console.log(cart);
  return (
    <div>
      {cart.map((item) => {
        console.log(item);
        return <CartProducts key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CartItems;
