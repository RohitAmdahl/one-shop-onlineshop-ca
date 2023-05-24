import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ApiMap from "../../api/ApiMap";

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState("");
  console.log(text);
  const { products } = useContext(ProductContext);

  const filterProducts = products.filter((items) => {
    return items.title.trim().toLowerCase().includes(text);
  });

  // const handleSearch = (searchText) => {
  //   setText(searchText);
  // };

  // <ApiMap filterProducts={filterProducts} />;

  console.log(filterProducts);
  // const SearchBar = ({ onSearch }) => {
  //   const handleInputChange = (e) => {
  //     onSearch(e.target.value);
  //   };

  return (
    <div className="max-w-md rounded overflow-hidden mx-auto p-1 font-pins text-fontcolor  ">
      <form className="w-full max-w-md" onSubmit={SearchBar}>
        <div className="flex items-center  border-b-2 border-primary py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText()}
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
