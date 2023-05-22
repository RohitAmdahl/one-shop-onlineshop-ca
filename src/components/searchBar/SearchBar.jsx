import React from "react";

const SearchBar = () => {
  return (
    <div className="max-w-md rounded overflow-hidden mx-auto p-1">
      <form className="w-full max-w-md">
        <div className="flex items-center  border-b-4 border-blue-400 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
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
