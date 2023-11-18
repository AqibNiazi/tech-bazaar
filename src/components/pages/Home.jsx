import React from "react";
import Product from "../product";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-color text-2xl font-bold mt-2">
        Welcome to Redux-Toolkit Store
      </h1>
      <div className="">
        <h2 className="text-center text-xl font-bold text-color">Products</h2>

        <Product />
      </div>
    </div>
  );
};

export default Home;
