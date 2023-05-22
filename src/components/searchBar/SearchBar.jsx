import React from "react";

const SearchBar = () => {
  return (
    <div className="max-w-md rounded overflow-hidden mx-auto p-1">
      <form className="w-full max-w-md">
        <div className="flex items-center  border-b-4 border-lightBlue py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <button
            className="flex-shrink-0 bg-lightBlue text-lg text-pink py-1 px-2 rounded  hover:bg-lightBlue"
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
