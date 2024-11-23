import Header from "../../../components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import useCookie from "react-use-cookie";
import { useEffect } from "react";

const DashboardLayout = () => {
  const [token] = useCookie("my_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token === "") {
      navigate("/login");
    }
  });
  return (
    <div className="flex flex-col min-h-dvh bg-gray-300">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DashboardLayout;
