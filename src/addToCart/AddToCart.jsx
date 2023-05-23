import React, { useState } from "react";
import CartQuantity from "../components/Cart/CartQuantity";
const AddToCart = () => {
  //   const { id } = product;
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    //product will not less then one
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    // product will go plus
    amount < 1 ? setAmount(amount + 1) : setAmount(amount);
  };
  return (
    <>
      <CartQuantity
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
    </>
  );
};

export default AddToCart;
