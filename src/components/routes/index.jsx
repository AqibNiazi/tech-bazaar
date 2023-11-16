import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
