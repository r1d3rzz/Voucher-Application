import AuthLayout from "../features/auth/components/AuthLayout";
import LoginPage from "../features/auth/page/LoginPage";
import RegisterPage from "../features/auth/page/RegisterPage";

const AuthRoutes = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
];

export default AuthRoutes;
