import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";

const LogoutBtn = () => {
  const [token, setToken] = useCookie("my_token");
  const navigate = useNavigate();
  const onSubmit = () => {
    toast.success("Logout Success");
    setToken("");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };
  return (
    <button
      onClick={onSubmit}
      type="button"
      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
