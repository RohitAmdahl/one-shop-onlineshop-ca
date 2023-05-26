import React from "react";
// import CartProducts from "../components/Cart/CartProducts";
import CartItems from "../components/Cart/Cartitems";
import ClearCart from "../components/Cart/ClearCart";

const CartPage = () => {
  return (
    <div>
      <CartItems />
      <ClearCart />
    </div>
  );
};

export default CartPage;
