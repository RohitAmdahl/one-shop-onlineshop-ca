import React from "react";
import CheckOut from "../components/checkout/CheckOut";

import CheckOutProduct from "../components/checkout/CheckOutProduct";

const Checkout = () => {
  return (
    // <div className="lg:grid lg:grid-cols-2 lg:gap-14 max-w-4xl mx-auto container md:flex md:flex-wrap">
    //   <div className="flex flex-col">
    //   </div>
    // </div>
    <>
      <CheckOut />
      <CheckOutProduct />
    </>
  );
};

export default Checkout;
