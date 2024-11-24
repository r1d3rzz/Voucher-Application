import React from "react";
import Container from "../../../components/Container";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import useCookie from "react-use-cookie";

const UserChangePasswordForm = () => {
  const api = import.meta.env.VITE_API_URL + "/user-profile/change-password";
  const [token] = useCookie("my_token");
  const [authUser, setAuthUser] = useCookie("auth_user");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    let res = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    let result = await res.json();

    if (res.status === 200) {
      toast.success(result.message);
      console.log(result);
      reset();
    }
  };
  return (
    <Container
      className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-10`}
    >
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label
            htmlFor="old_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Old Password
          </label>
          <input
            type="password"
            id="old_password"
            {...register("old_password", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
          <p className=""></p>
        </div>

        <div className="mb-3">
          <label
            htmlFor="new_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New Password
          </label>
          <input
            type="password"
            id="new_password"
            {...register("new_password", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
          <p className=""></p>
        </div>

        <div>
          <label
            htmlFor="new_password_confirmation"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="new_password_confirmation"
            {...register("new_password_confirmation", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
          <p className=""></p>
        </div>

        <button
          type="submit"
          className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {isSubmitting ? "Updating..." : "Update Password"}
        </button>
      </form>
    </Container>
  );
};

export default UserChangePasswordForm;
