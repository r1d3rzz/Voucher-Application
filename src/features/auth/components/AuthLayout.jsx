import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-gray-50 dark:bg-gray-900">
      <Outlet />
      <Toaster />
    </div>
  );
};

export default AuthLayout;
