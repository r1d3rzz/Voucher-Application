import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import useCookie from "react-use-cookie";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const ProductEditForm = () => {
  const { id } = useParams();
  const api = import.meta.env.VITE_API_URL + "/products/" + id;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [token] = useCookie("my_token");
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        ContentType: "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

  const { data, isLoading } = useSWR(api, fetcher);

  const onSubmit = async (data) => {
    let res = await fetch(api, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...data, updated_at: new Date().toISOString() }),
    });

    const result = await res.json();
    if (res.status === 200) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div
      className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-10`}
    >
      <Toaster />
      {!isLoading ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              htmlFor="product_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              id="product_name"
              defaultValue={data?.data?.product_name}
              {...register("product_name", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Price
            </label>
            <input
              type="number"
              id="price"
              defaultValue={Math.ceil(data?.data?.price)}
              {...register("price", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>

          <button
            type="submit"
            className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {isSubmitting ? "Updating..." : "Update Product"}
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductEditForm;
