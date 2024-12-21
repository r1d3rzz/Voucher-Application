import React from "react";
import { HiArrowTopRightOnSquare, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const SingleVoucher = ({
  voucher: {
    id,
    voucher_id,
    customer_name,
    customer_email,
    sale_date,
    net_total,
  },
}) => {
  const navigate = useNavigate();
  const voucherDetailBtn = () => {
    navigate("/vouchers/" + id);
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {voucher_id}
      </th>
      <td className="px-6 py-4">{customer_email}</td>
      <td className="px-6 py-4">{customer_name}</td>
      <td className="px-6 py-4">${parseInt(net_total).toFixed(2)}</td>
      <td className="px-6 py-4">{sale_date}</td>
      <td className="px-6 py-4 text-end">
        <button
          type="button"
          className="gap-3 text-white bg-[#ea1b1b] hover:bg-[#ea1b1b]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          <HiTrash size={15} />
        </button>
        <button
          onClick={voucherDetailBtn}
          type="button"
          className="gap-3 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          <HiArrowTopRightOnSquare size={15} />
        </button>
      </td>
    </tr>
  );
};

export default SingleVoucher;
