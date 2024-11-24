import React from "react";
import Container from "../../../components/Container";
import { useForm } from "react-hook-form";
import useCookie from "react-use-cookie";
import toast, { Toaster } from "react-hot-toast";
import useUserStore from "../../../store/useUserStore";

const UserChangeNameForm = () => {
  const [token] = useCookie("my_token");
  const [authUser, setAuthUser] = useCookie("auth_user");
  const { user, setUser } = useUserStore();
  const username = JSON.parse(authUser).name;
  const api = import.meta.env.VITE_API_URL + "/user-profile/change-name";
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
      setAuthUser(JSON.stringify(result.user));
      setUser(result.user);
    }
  };

  return (
    <Container
      className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-10`}
    >
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            User Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={username}
            {...register("name", { required: true })}
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
          {isSubmitting ? "Updating..." : "Update"}
        </button>
      </form>
    </Container>
  );
};

export default UserChangeNameForm;
