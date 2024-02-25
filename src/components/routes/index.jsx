import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layout";
import { Home, Cart, Products, Product } from "../pages";

const AppRoutes = () => {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Suspense fallback={<div>Home is Loading...</div>}> <Home /></Suspense>} />
          <Route path="/cart" element={<Suspense fallback={<div>Cart is Loading....</div>}><Cart /></Suspense> } />
          <Route path="/products" element={<Suspense fallback={<div>Products page is loading...</div>}><Products /></Suspense>} />
          <Route path="/products/:productId" element={<Suspense fallback={<div>Specific Product page is loading...</div>}><Product /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
};

export default AppRoutes;
