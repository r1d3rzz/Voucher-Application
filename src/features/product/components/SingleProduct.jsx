import React, { useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { bouncy } from "ldrs";
import useCookie from "react-use-cookie";
import toast from "react-hot-toast";
import { SWRConfig, useSWRConfig } from "swr";

const SingleProduct = ({
  product: { id, product_name, price, updated_at },
}) => {
  bouncy.register();
  const [token] = useCookie("my_token");
  const navigate = useNavigate();
  const [isDel, setDel] = useState(false);
  const { mutate } = useSWRConfig();
  const api = import.meta.env.VITE_API_URL + "/products/" + id;
  const editProduct = () => {
    navigate("/products/edit/" + id);
  };
  const convertDateAndTime = (datetime) => {
    const date = new Date(datetime);
    const localDate = date.toLocaleDateString();
    const localTime = date.toLocaleTimeString(date, {
      hour: "2-digit",
      minute: "2-digit",
    });
    return {
      createdDate: localDate,
      createdTime: localTime,
    };
  };

  let createdDate = convertDateAndTime(new Date(updated_at)).createdDate;
  let createdTime = convertDateAndTime(new Date(updated_at)).createdTime;

  const deleteProduct = async () => {
    setDel(true);
    let res = await fetch(api, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let result = await res.json();
    if (res.status === 200) {
      setDel(false);
      mutate(import.meta.env.VITE_API_URL + "/products");
      toast.success(result.message);
    }
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4"> {product_name}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">
        <div>{createdDate}</div>
        <small>{createdTime}</small>
      </td>
      <td className="px-6 py-4">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={editProduct}
            type="button"
            className="size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiPencil color="green" />
          </button>
          <button
            type="button"
            onClick={deleteProduct}
            className="size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {!isDel ? (
              <HiTrash color="red" />
            ) : (
              <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SingleProduct;
