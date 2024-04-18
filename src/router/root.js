import React from "react";
import { Suspense, lazy } from "react";
import productsRouter from "./productsRouter";
import couponRouter from "./couponRouter";
import memberRouter from "./memberRouter";
import paymentRouter from "./paymentRouter"

const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading....</div>;
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const ProductsIndex = lazy(() => import("../pages/products/IndexPage"))
const CouponsIndex = lazy(()=> import("../pages/coupons/IndexPage"))
const TotalOrderIndex= lazy(() => import("../pages/payments/TotalOrderpage"))


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
  },
  {
    path: "member",
    children: memberRouter()
  },
  {
    path:"totalOrders",
    element:<Suspense fallback={Loading}><TotalOrderIndex/></Suspense>,
    children: paymentRouter()
  }
]);
export default root;
