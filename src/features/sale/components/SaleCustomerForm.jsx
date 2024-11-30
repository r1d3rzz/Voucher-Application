import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";

const SaleCustomerForm = ({ total }) => {
  const endPoint = import.meta.env.VITE_URL_API;
  const [token] = useCookie("token");
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const [invoiceNumber, setInvoiceNumber] = useState("");
  const generateVoucherNumber = () => {
    const currentDate = new Date()
      .toISOString()
      .slice(0, 10)
      .replaceAll("-", "");
    const randomNumber = String(Math.floor(Math.random() * 100000000)).padStart(
      8,
      "0"
    );
    return `inv-${currentDate}-${randomNumber}`;
  };

  const { handleSubmit, register, reset } = useForm();
  useEffect(() => {
    const invNumber = generateVoucherNumber();
    setInvoiceNumber(invNumber);
  }, []);

  const onSubmit = async (data) => {
    const voucherData = {};

    let res = await fetch(endPoint + "/vouchers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(voucherData),
    });

    if (res.status === 201) {
      reset();
      toast.success("Voucher Created Success.");
      if (data.isRedirect) navigate("/dashboard/vouchers");
    } else {
      let errorMessage = JSON.parse(await res.text());
      toast.error(errorMessage.message);
    }

    const invNumber = generateVoucherNumber();
    setInvoiceNumber(invNumber);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <div className="max-w-sm">
          <label
            htmlFor="voucher_id"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Voucher ID
          </label>
          <input
            defaultValue={invoiceNumber}
            type="text"
            id="voucher_id"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>

        <div className="max-w-sm">
          <label
            htmlFor="customerName"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            {...register("customer_name", { required: !true })}
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>

        <div className="max-w-sm">
          <label
            htmlFor="customer_email"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Customer Email
          </label>
          <input
            type="email"
            id="customer_email"
            {...register("customer_email", { required: !true })}
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>

        <div className="max-w-sm">
          <label
            htmlFor="saleDate"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Sale Date
          </label>
          <input
            type="date"
            id="saleDate"
            defaultValue={currentDate}
            {...register("sale_date", { required: !true })}
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>
      </div>

      <div className="flex flex-col items-end mt-auto">
        <div className="mb-5 last:mb-0 flex flex-col items-end mt-5">
          <div className="flex">
            <label
              htmlFor="all_correct"
              className="text-sm text-gray-500 me-3 dark:text-neutral-400"
            >
              Confirm Products.
            </label>
            <input
              type="checkbox"
              {...register("all_correct", { required: !true })}
              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="all_correct"
            />
          </div>

          <div className="flex">
            <label
              htmlFor="isRedirect"
              className="text-sm text-gray-500 me-3 dark:text-neutral-400"
            >
              Redirect for Voucher Detail.
            </label>
            <input
              type="checkbox"
              {...register("isRedirect", { required: false })}
              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="isRedirect"
            />
          </div>
        </div>
        <div>
          <button className="size-10 w-[150px] flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SaleCustomerForm;
