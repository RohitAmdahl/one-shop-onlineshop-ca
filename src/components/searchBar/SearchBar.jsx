import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const SearchBar = ({ product }) => {
  const [text, setText] = useState("");
  console.log(text);
  const { products } = useContext(ProductContext);

  const filterProducts = products.filter((items) => {
    return items.title.trim().toLowerCase().includes(text);
  });
  console.log(filterProducts);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
  );
};

export default SearchBar;
