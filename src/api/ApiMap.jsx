import { ProductContext } from "../context/ProductContext";
import React, { useContext, useState } from "react";
import Card from "../components/card/Card";

const ApiMap = () => {
  const [text, setText] = useState("");
  const { products } = useContext(ProductContext);
  const filterProducts = products.filter((items) => {
    return items.title.trim().toLowerCase().includes(text);
  });
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="max-w-md rounded overflow-hidden mx-auto p-1 font-pins text-fontcolor  ">
        <form className="w-full max-w-md" onSubmit={onSubmit}>
          <div className="flex items-center  border-b-2 border-primary py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
      <div className=" container max-w-sm p-10   md:max-w-xl lg:max-w-4xl  mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filterProducts.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ApiMap;
