import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardRoutes from "./DashboardRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [...DashboardRoutes],
  },
  ...AuthRoutes,
]);

export default router;
