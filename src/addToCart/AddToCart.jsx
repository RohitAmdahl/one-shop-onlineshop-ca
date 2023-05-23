import React, { useState } from "react";
import CartQuantity from "../components/Cart/CartQuantity";
const AddToCart = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    setAmount(amount + 1);
  };
  debugger;
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
