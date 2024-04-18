import React from "react";
import { Suspense, lazy } from "react";
import productsRouter from "./productsRouter";
import couponRouter from "./couponRouter";

const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading....</div>;
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const ProductsIndex = lazy(() => import("../pages/products/IndexPage"))
const CouponsIndex = lazy(()=> import("../pages/coupons/IndexPage"))


const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "products",
    element: <Suspense fallback={Loading}><ProductsIndex/></Suspense>,
    children: productsRouter()
  },{
  path:"coupons",
    element:<Suspense fallback={Loading}><CouponsIndex/></Suspense>,
    children: couponRouter()
  }
]);
export default root;
