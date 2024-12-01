import React, { useState } from "react";

const CalculateTotalSaleRecords = ({totalPrice}) => {
  const [tax, setTax] = useState(7);
  const totalTax = totalPrice * (tax / 100);
  const netTotal = totalPrice + totalTax;
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 duration-75">
        <th
          scope="row"
          colSpan={3}
          className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Total
        </th>
        <td className="px-6 py-4">$ {totalPrice.toFixed(2)}</td>
        <td className="px-6 py-4"></td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 duration-75">
        <th
          scope="row"
          colSpan={3}
          className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Tax <small className="small">( {tax}% )</small>
        </th>
        <td className="px-6 py-4">$ {totalTax.toFixed(2)}</td>
        <td className="px-6 py-4"></td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 duration-75">
        <th
          scope="row"
          colSpan={3}
          className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Net Total
        </th>
        <td className="px-6 py-4">$ {netTotal.toFixed(2)}</td>
        <td className="px-6 py-4"></td>
      </tr>
    </>
  );
};

export default CalculateTotalSaleRecords;
