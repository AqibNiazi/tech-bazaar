import React from "react";
import AppRoutes from "./components/routes";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// import {ApiProvider} from "@reduxjs/toolkit/query/react"
// import { productApi } from "./store/apiSlice";
const App = () => {
  const queryClient = new QueryClient();
  const persistor=persistStore(store)
  return (
    <Provider store={store}>
      {/* <ApiProvider api={productApi}> */}

      <QueryClientProvider client={queryClient}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <AppRoutes />
        </PersistGate>
      </QueryClientProvider>
      {/* </ApiProvider> */}
    </Provider>
  );
};

export default App;
