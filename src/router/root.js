import React from "react";
import { Suspense, lazy } from "react";
import productsRouter from "./productsRouter";
import couponRouter from "./couponRouter";
import memberRouter from "./memberRouter";
import cartRouter from "./cartRouter";
import storeRouter from "./storeRouter";


const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading....</div>;
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const ProductsIndex = lazy(() => import("../pages/products/IndexPage"))
const CouponsIndex = lazy(()=> import("../pages/coupons/IndexPage"))
const CartsIndex = lazy(()=> import("../pages/cart/CartIndexPage"))
const StoreIndex = lazy(()=> import("../pages/store/StoreIndexPage"))

const root = createBrowserRouter([
  {
    path: "",
    element: <Suspense fallback={Loading}><ProductsIndex/></Suspense>,
    children: productsRouter()
  },
  {
    path: "products",
    element: <Suspense fallback={Loading}><ProductsIndex/></Suspense>,
    children: productsRouter()
  },
  {
  path:"coupons",
    element:<Suspense fallback={Loading}><CouponsIndex/></Suspense>,
    children: couponRouter()
  },
  {
    path:"carts",
      element:<Suspense fallback={Loading}><CartsIndex/></Suspense>,
      children: cartRouter()
    },
  {
    path:"store",
    element:<Suspense fallback={Loading}><StoreIndex/></Suspense>,
    children: storeRouter()
  },  
  {
    path: "member",
    children: memberRouter()
  }
]);
export default root;
