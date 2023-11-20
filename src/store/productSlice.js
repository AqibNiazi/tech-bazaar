import { createSlice } from "@reduxjs/toolkit";
const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    add(state, action) {
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update its quantity
        state[existingProductIndex].quantity += 1;
      } else {
        // If it's a new product, add it to the cart
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseProductQuantity(state, action) {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseProductQuantity(state, action) {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});
export const { add, remove, increaseProductQuantity, decreaseProductQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
