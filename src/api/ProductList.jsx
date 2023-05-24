import { ProductContext } from "../context/ProductContext";
import React, { useContext, useState } from "react";
import Card from "../components/card/Card";
import SearchBar from "../components/searchBar/SearchBar";
const ProductList = () => {
  const { products } = useContext(ProductContext);
  const { search, setSearch } = useState("");
  const filterProducts = products.filter((product) => {
    return product.title.trim().toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <SearchBar onSearch={setSearch} />

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

export default ProductList;
