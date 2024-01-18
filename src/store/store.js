import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

// Non-persisted reducers (productReducer)
const nonPersistedReducers = combineReducers({
  product: productReducer,
});

// Persisted reducers (cartReducer)
const persistedReducers = combineReducers({
  cart: cartReducer,
});

// Combine both non-persisted and persisted reducers
const rootReducer = (state, action) => {
  // Only apply non-persisted reducers to the non-persisted part of the state
  const nonPersistedState = nonPersistedReducers(state, action);

  // Apply persisted reducers to the entire state
  const persistedState = persistedReducers(state, action);

  return {
    ...nonPersistedState,
    ...persistedState,
  };
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
