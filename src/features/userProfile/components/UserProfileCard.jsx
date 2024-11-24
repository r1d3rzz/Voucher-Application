import Avvvatars from "avvvatars-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { HiCamera } from "react-icons/hi";
import { HiKey, HiPencil } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useCookie from "react-use-cookie";
import { lineSpinner } from "ldrs";
import useUserStore from "../../../store/useUserStore";

const UserProfileCard = () => {
  lineSpinner.register();
  let [isUploadingImage, setIsUploadingImage] = useState(false);
  const { setUser } = useUserStore();
  const userProfileAPI =
    import.meta.env.VITE_API_URL + "/user-profile/change-profile-image";

  const [user, setUserCookie] = useCookie("auth_user");
  const [token] = useCookie("my_token");
  const authUser = JSON.parse(user);
  const userProfileImage = useRef(null);
  const uploadNewProfileImage = async (e) => {
    setIsUploadingImage(true);
    const formDate = new FormData();
    formDate.append("profile_image", e.target.files[0]);
    const res = await fetch(userProfileAPI, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formDate,
    });
    const result = await res.json();
    if (res.status === 200) {
      setIsUploadingImage(false);
      toast.success(result.message);
      setUserCookie(JSON.stringify(result.user));
      setUser(result.user);
    } else {
      setIsUploadingImage(false);
      toast.error("Something went wrong.");
    }
  };
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center py-10">
        {authUser.profile_image !== null ? (
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={authUser.profile_image}
            alt={authUser.name}
          />
        ) : (
          <div className="mb-3">
            <Avvvatars size={80} value={authUser.email} style="character" />
          </div>
        )}
        <h5 className="mb-1 flex items-center gap-3 text-xl font-medium text-gray-900 dark:text-white">
          <div>{authUser?.name}</div>
          <Link to={"/change-name"}>
            <HiPencil size={13} />
          </Link>
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {authUser?.email}
        </span>
        <div className="flex mt-4 md:mt-6">
          <button
            onClick={() => userProfileImage.current.click()}
            className="inline-flex items-center size-10 flex justify-center items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isUploadingImage === false ? (
              <HiCamera />
            ) : (
              <l-line-spinner
                size="17"
                stroke="2"
                speed="1"
                color="white"
              ></l-line-spinner>
            )}
          </button>
          <input
            onChange={uploadNewProfileImage}
            type="file"
            className="hidden"
            ref={userProfileImage}
          />
          <Link
            to={"/change-password"}
            className="py-2 px-4 flex items-center gap-3 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <div>Change Password</div>
            <HiKey />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
