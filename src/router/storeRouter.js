import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading....</div>;
const ProductsList = lazy(() => import("../pages/store/ListPage"));
const ProductRead = lazy(() => import("../pages/store/ReadPage"));
const ProductAdd = lazy(() => import("../pages/store/AddPage"));

const storeRouter = () => {
  return [
    {
      path: "list",
      element: <Suspense fallback={Loading}><ProductsList /></Suspense>
    },
    {
      path: "",
      element: <Navigate replace to="/store/list" />
    },
    {
      path: "add",
      element: <Suspense fallback={Loading}><ProductAdd /></Suspense>
    },
    {
      path: "read/:productId",
      element: <Suspense fallback={Loading}><ProductRead /></Suspense>
    }
  ];
};

export default storeRouter;