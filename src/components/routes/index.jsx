import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout";
import { Home, Cart, Products, Product } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // ✅ Your main layout
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Home is Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<div>Cart is Loading....</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<div>Products page is loading...</div>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "products/:productId",
        element: (
          <Suspense fallback={<div>Specific Product page is loading...</div>}>
            <Product />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
