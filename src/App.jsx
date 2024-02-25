import React from "react";
import AppRoutes from "./components/routes";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const queryClient = new QueryClient();
  const persistor=persistStore(store)
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <AppRoutes />
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
