import { ProductContext } from "../context/ProductContext";
import React, { useContext } from "react";
import Card from "../components/card/Card";

const ApiMap = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className=" container max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ApiMap;
