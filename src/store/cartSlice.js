const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      //   In redux we can't directly mutate state
      //   return [...state, action.payload];
      //    In Redux-toolkit we can do that
      state.push(action.payload);
    },
    remove(state, action) {
      state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
