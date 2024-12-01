import React, { useState } from "react";
import { HiTrash } from "react-icons/hi2";
import EmptySaleList from "./EmptySaleList";
import SingleSaleRecord from "./SingleSaleRecord";
import CalculateTotalSaleRecords from "./CalculateTotalSaleRecords";

const SaleRecords = ({salesList, total}) => {
  const totalPrice = total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
  );
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
            <th scope="col" className="px-6 py-3">
              
            </th>
          </tr>
        </thead>
        <tbody>
          {salesList.length ? salesList.map((saleRecord,index) => (<SingleSaleRecord  saleRecord = {saleRecord} key={index}/>)) : <EmptySaleList />}
          <CalculateTotalSaleRecords totalPrice={totalPrice} />
        </tbody>
      </table>
    </div>
  );
};

export default SaleRecords;
