import Avvvatars from "avvvatars-react";
import useCookie from "react-use-cookie";
import LogoutBtn from "./LogoutBtn";

const UserNavProfile = () => {
  const [user] = useCookie("auth_user");
  const authUser = JSON.parse(user);
  return (
    <div className="flex items-center me-2">
      <button
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        {authUser.profile_image !== null ? (
          <img
            className="w-8 h-8 rounded-full"
            src={user.profile_image}
            alt="user photo"
          />
        ) : (
          <Avvvatars value={authUser.email} />
        )}
      </button>
      {/* Dropdown menu */}
      <div
        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            {authUser.name}
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {authUser.email}
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserNavProfile;
