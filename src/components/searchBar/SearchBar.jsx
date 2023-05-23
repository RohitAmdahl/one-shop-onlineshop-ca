import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const SearchBar = () => {
  const [text, setText] = useState("");

  const { products } = useContext(ProductContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const filterProducts = products.filter((items) => {
      return items.title.toLowerCase().includes(text);
    });
    console.log(filterProducts);
  };

  return (
    <div className="max-w-md rounded overflow-hidden mx-auto p-1 font-pins text-fontcolor  ">
      <form className="w-full max-w-md " onSubmit={onSubmit}>
        <div className="flex items-center  border-b-2 border-primary py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search..."
          />
          <button
            className="bg-primary px-5 py-1 text-pink hover:bg-blue-600 hover:rounded-r-lg hover:text-white"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
