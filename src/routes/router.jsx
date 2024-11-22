import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello</h1>,
  },
  ...AuthRoutes,
]);

export default router;
