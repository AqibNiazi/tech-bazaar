import React from "react";
const Home = React.lazy(() => import("./Home"));
const Cart = React.lazy(() => import("./Cart"));
const Products = React.lazy(() => import("./Products"));
const Product = React.lazy(() => import("./Product"));
export { Home, Cart, Products, Product };
