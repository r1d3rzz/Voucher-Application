import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";

const AuthLayout = () => {
  const [token] = useCookie("my_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token !== "") {
      navigate("/");
    }
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-gray-50 dark:bg-gray-900">
      <Outlet />
      <Toaster />
    </div>
  );
};

export default AuthLayout;
