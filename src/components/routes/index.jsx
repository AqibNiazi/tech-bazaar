import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layout";
import { Home, Cart, Products, Product } from "../pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
