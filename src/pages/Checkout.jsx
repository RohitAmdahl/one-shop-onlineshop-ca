import React from "react";
import CheckOut from "../components/checkout/CheckOut";

import CheckOutProduct from "../components/checkout/CheckOutProduct";

const Checkout = () => {
  return (
    <div className="grid grid-cols-2 gap-7 max-w-4xl mx-auto container">
      <CheckOut />
      <div>
        <CheckOutProduct />
      </div>
    </div>
  );
};

export default Checkout;
