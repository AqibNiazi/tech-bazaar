import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const STATUS = Object.freeze({
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
    // setProducts: (state, action) => {
    //   state.data = action.payload;
    // },
    // setStatus: (state, action) => {
    //   state.status = action.payload;
    // },
  },
  //I have create Extra Reducers for createAsyncThunk function to handle this type of functionality.
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Reduc-toolkit abstraction for Redux-Thunk
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = await response.data;
  return data;
});




// Method 1 simple
// In this method we create reducers for functionality and create redux thunk function like below for api calls and sideEffects.

//Redux Thunk for fetching products
// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       const data = await response.data;
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }
