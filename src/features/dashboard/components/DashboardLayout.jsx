import Header from "../../../components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import useCookie from "react-use-cookie";
import { useEffect } from "react";
import useUserStore from "../../../store/useUserStore";

const DashboardLayout = () => {
  const [token] = useCookie("my_token");
  const [authUser] = useCookie("auth_user");
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (token === "") {
      navigate("/login");
    } else {
      setUser(JSON.parse(authUser));
    }
  }, []);
  return (
    <div className="flex flex-col min-h-dvh bg-gray-300">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DashboardLayout;
