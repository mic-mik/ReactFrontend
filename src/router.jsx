/* eslint-disable react-refresh/only-export-components */

import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { getProduit } from "./apis";
import NotFound from "./pages/NotFound/NotFound";

const Home = lazy(() => import("./pages/Home/Home"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const AdminAddProduitForm = lazy(() =>
  import("./pages/Admin/components/AdminAddProduitForm/AdminAddProduitForm")
);
const AdminEditProduitForm = lazy(() =>
  import("./pages/Admin/components/AdminEditProduitForm/AdminEditProduitForm")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "add",
            element: <AdminAddProduitForm />,
          },
          {
            path: "edit/:produitId",
            element: <AdminEditProduitForm />,
            loader: async ({ params: { produitId } }) => getProduit(produitId),
          },
        ],
      },
    ],
  },
]);

export default router;
