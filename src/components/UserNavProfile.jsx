import Avvvatars from "avvvatars-react";
import { Link } from "react-router-dom";
import useUserStore from "../store/useUserStore";

const UserNavProfile = () => {
  let {
    user: { name, email, profile_image },
  } = useUserStore();

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
        {profile_image !== null ? (
          <img
            className="w-8 h-8 rounded-full"
            src={profile_image}
            alt="user photo"
          />
        ) : (
          <Avvvatars value={email} />
        )}
      </button>
      {/* Dropdown menu */}
      <div
        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            {name}
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {email}
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link
              to={"/profile"}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserNavProfile;
