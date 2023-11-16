import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api";

const Product = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetchProducts();
        setproducts(response.data);
        console.log(response.data);
      } catch (error) {
        // Handle error if the fetch fails
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsData();
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
        // Adjust this structure to display product information as needed
      ))}
    </div>
  );
};

export default Product;
