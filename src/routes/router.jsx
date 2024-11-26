import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardRoutes from "./DashboardRoutes";
import userProfileRoutes from "./UserProfileRoutes";
import ProductRoutes from "./ProductRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [...DashboardRoutes, ...userProfileRoutes, ...ProductRoutes],
  },
  ...AuthRoutes,
]);

export default router;
