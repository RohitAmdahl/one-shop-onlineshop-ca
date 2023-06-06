import React from "react";
import CheckOut from "../components/checkout/CheckOut";
import CartItems from "../components/Cart/Cartitems";

const Checkout = () => {
  return (
    <div className="grid grid-cols-2 gap-7 max-w-4xl mx-auto container">
      <CheckOut />
      <div className="  ">
        <CartItems />
      </div>
    </div>
  );
};

export default Checkout;
