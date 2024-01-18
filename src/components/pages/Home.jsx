import React from "react";
import Product from "../product";

const Home = () => {
  return (
    <div className=" text-color dark:text-white bg-white dark:bg-gray-900 h-full w-full">
      <h1 className="text-center  text-2xl font-bold pt-2">
        Welcome to Redux-Toolkit Store
      </h1>
        <h2 className="text-center text-xl font-bold">Products</h2>
        <Product />
    </div>
  );
};

export default Home;
