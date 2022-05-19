import { Suspense, lazy as Lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as url from "./CONSTANTS";
import Loading from "./Loading";

// Application Layout
const AdminLayout = Lazy(() => import("./Layouts/AdminLayout"));

// Admin Routes
const AdminDashboard = Lazy(() =>
  import("pages/AdminPages/Dashboard/AdminDashboard")
);

// Catch All
const NotFound = Lazy(() => import("./NotFound/NotFound"));

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Public Routes */}

          {/* Private Routes */}

          {/* Admin Routes */}
          <Route
            exact
            path={url.ADMIN}
            element={
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            }
          />

          {/* Catch All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterConfig;
