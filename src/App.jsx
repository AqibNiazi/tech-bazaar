import React from "react";
import AppRoutes from "./components/routes";
import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <AppRoutes />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
