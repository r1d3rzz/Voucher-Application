import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { waveform } from "ldrs";
import useCookie from "react-use-cookie";

const SaleForm = ({salesListHandler}) => {
  let [isAdding, setIsAdding] = useState(false);

  const [token] = useCookie("my_token");
  waveform.register();
  const api = import.meta.env.VITE_API_URL;
  const productFetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  const { data, isLoading } = useSWR(
    api + "/products?limit=100",
    productFetcher
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    setIsAdding(true);
    let res = await fetch(api+ "/products/" + data?.productId,{
      type: "GET",
      headers: {
        "Content-Type" : "application/json", 
        Authorization: `Bearer ${token}`
      }
    });

    let result = await res.json();
    let product = {
      product: {
        id: result.data.id,
        product_name: result.data.product_name,
        price: result.data.price,
        created_at: result.data.created_at,
      },
      quantity: parseInt(data?.qty),
      cost: parseFloat((result.data.price * data?.qty).toFixed(2)),
      created_at: new Date().toISOString(),
      product_id: result.data.id,
    }

    setIsAdding(false);
    salesListHandler(product);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-5 gap-3 mb-5">
        <div className="col-span-2">
          <div className="max-w-sm">
            <label
              htmlFor="product"
              className="block text-sm font-medium mb-2 dark:text-white"
            >
              Choose Product
            </label>
            <select
              id="product"
              {...register("productId", {
                required: true,
              })}
              className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            >
              {!isLoading &&
                data?.data.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.product_name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="col-span-2">
          <div className="max-w-sm">
            <label
              htmlFor="qty"
              className="block text-sm font-medium mb-2 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              {...register("qty", {
                required: true,
              })}
              id="qty"
              className="border-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            />
          </div>
        </div>
        <div className="col-span-1">
          <button className="py-3 px-4 h-full w-full justify-center flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:focus:bg-white/20 dark:focus:text-white">
            {!isAdding ? (
              <span>Add Product</span>
            ) : (
              <l-waveform size={35} stroke="3.5" speed={1} color="gray" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SaleForm;
