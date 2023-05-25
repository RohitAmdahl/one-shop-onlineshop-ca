import React from "react";

const CartProducts = ({ item }) => {
  console.log(item);
  return <div> {item.title} </div>;
};

export default CartProducts;
