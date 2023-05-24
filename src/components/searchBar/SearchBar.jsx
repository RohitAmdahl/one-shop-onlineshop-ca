import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const { search, setSearch } = useState("");

  const handelSearch = (e) => {
    e.preventDefault();
    onSearch(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="max-w-md rounded overflow-hidden mx-auto p-1 font-pins text-fontcolor  ">
      <form className="w-full max-w-md">
        <div className="flex items-center  border-b-2 border-primary py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="text"
            value={search}
            onChange={handelSearch}
            placeholder="Search your product......"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
