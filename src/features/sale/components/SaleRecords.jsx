import React, { useState } from "react";
import { HiTrash } from "react-icons/hi2";
import EmptySaleList from "./EmptySaleList";
import SingleSaleRecord from "./SingleSaleRecord";
import useSaleStore from "../../../store/useSaleStore";
import CalculateTotalSaleRecords from "./CalculateTotalSaleRecords";

const SaleRecords = () => {
  const { salesList } = useSaleStore();
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <CalculateTotalSaleRecords />
          {salesList.length ? <SingleSaleRecord /> : <EmptySaleList />}
        </tbody>
      </table>
    </div>
  );
};

export default SaleRecords;
