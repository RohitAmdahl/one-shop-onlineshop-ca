import React, { createContext, useState, useEffect } from "react";
// create context
export const ProductContext = createContext();
// ProductProvider for app  always good to pass children and needs value if we do not pass then we will get error.
const url = `https://api.noroff.dev/api/v1/online-shop/`;
console.log(url);

const ProductProvider = ({ children }) => {
  //
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  //
  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(`${url}`);
        const data = await response.json();

        setProducts(data);
        //
        setIsLoading(false);
        //
      } catch (error) {
        setIsLoading(false);
        setIsError(false);
      }
    }
    getData();
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1>Loading products.....</h1>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// custom hook - for not ot import many times data, no need to write code amny times

export default ProductProvider;
