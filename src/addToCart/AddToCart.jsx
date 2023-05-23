import React, { useState } from "react";
import CartQuantity from "../components/Cart/CartQuantity";
const AddToCart = ({ product }) => {
  //   const { id } = product;
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < 1 ? setAmount(amount + 1) : setAmount();
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
