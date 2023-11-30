import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const data = await response.data;
    return data.products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
