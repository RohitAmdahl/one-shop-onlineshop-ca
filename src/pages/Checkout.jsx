import React from "react";
// import CheckOut from "../components/checkout/CheckOut";
// import CheckOutForm from "../components/form/CheckOutForm";

import CheckOutProduct from "../components/checkout/CheckOutProduct";

const Checkout = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-14 max-w-4xl mx-auto container md:flex md:flex-wrap">
      {/* <CheckOutForm /> */}
      <div className="flex flex-col">
        <CheckOutProduct />
      </div>
    </div>
  );
};

export default Checkout;
