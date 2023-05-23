import React from "react";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/CartPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
