import React from "react";
import AppRoutes from "./components/routes";
import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <Provider store={store}>
      <Toaster />
      <AppRoutes />
    </Provider>
  );
};

export default App;
