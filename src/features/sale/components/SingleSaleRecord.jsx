import React from "react";
import useSaleStore from "../../../store/useSaleStore";
import { HiTrash } from "react-icons/hi2";
import useSaleTotalPrice from "../../../store/useSaleTotalPrice.js";

const SingleSaleRecord = ({
  saleRecord: {
    product: { id, price, product_name },
    quantity,
  },
}) => {
  const { changeQty, removeRecord } = useSaleStore();
  const {addTotal} = useSaleTotalPrice();
  const changeQtyHandler = (id, qty) => {
      addTotal(parseInt(qty !== -1 ? price : -price));
    changeQty(id, qty);
  };
  const removeRecordHandler = () => {
      removeRecord(id);
      addTotal(-price * quantity);
  }
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 duration-75">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            disabled={quantity === 1}
            onClick={() => changeQtyHandler(id, -1)}
            type="button"
            className={`${quantity === 1 && "opacity-40 cursor-not-allowed"} px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
          >
            -
          </button>
          <button
            disabled={true}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 border-t border-b border-gray-50 bg-slate-300 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white  dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {quantity}
          </button>
          <button
            onClick={() => changeQtyHandler(id, 1)}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            +
          </button>
        </div>
      </td>
      <td className="px-6 py-4">${price * quantity}</td>
      <td className="px-6 py-4">
      <button
            onClick={removeRecordHandler}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiTrash color="red" />
          </button>
      </td>
    </tr>
  );
};

export default SingleSaleRecord;
