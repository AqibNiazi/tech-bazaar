import React from "react";
import Product from "../product";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-color text-2xl font-bold">
        Welcome to Redux-Toolkit Store
      </h1>
      <h3>Products</h3>
      <Product />
    </div>
  );
};

export default Home;
