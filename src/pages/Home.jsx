import React from "react";
import MainSection from "../components/home/MainSection";
import ProductList from "../api/ProductList";
const Home = () => {
  return (
    <>
      <MainSection />
      <ProductList />
    </>
  );
};

export default Home;
