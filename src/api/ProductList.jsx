import { ProductContext } from "../context/ProductContext";
import React, { useContext, useState } from "react";
import Card from "../components/card/Card";
import SearchBar from "../components/searchBar/SearchBar";
const ProductList = () => {
  const { products } = useContext(ProductContext);

  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar onSearch={setSearch} />
      <div className=" container max-w-sm p-10   md:max-w-xl lg:max-w-4xl  mx-auto">
        {filteredProducts?.length > 0 ? (
          <div className="grid grid-cols-1 gap-10 mx-auto max-w-4xl md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8">
            {filteredProducts.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </div>
        ) : (
          <div className="mx-auto text-center text-4xl font-bold ">
            No Products found according to your search.
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
