import axios from "axios";

const fetchProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data;
    return data.products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
export { fetchProducts };
