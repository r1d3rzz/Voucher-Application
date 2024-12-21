import React from "react";
import SingleVoucher from "./SingleVoucher";
import useCookie from "react-use-cookie";
import useSWR from "swr";

const VouchersList = () => {
  const [token] = useCookie("my_token");
  const fetcher = (...args) =>
    fetch(...args, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

  const { data, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers",
    fetcher
  );

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              # Voucher ID
            </th>
            <th scope="col" className="px-6 py-3">
              Customer Email
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Total Price
            </th>
            <th scope="col" className="px-6 py-3">
              Sale Date
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <th>Loading...</th>
            </tr>
          ) : (
            data?.data.map((voucher) => (
              <SingleVoucher key={voucher.id} voucher={voucher} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VouchersList;
