import React from "react";
import { HiOutlinePrinter } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";
import Items from "./Items";
import printJS from "print-js";

const VoucherDetailSlip = ({
  voucherDetail: {
    voucher_id,
    sale_date,
    customer_name,
    records,
    total,
    tax,
    net_total,
  },
}) => {
  const printVoucherSlipBtn = () => {
    const voucherSlipHtml = document.getElementById("voucherSlip").outerHTML;

    // Include Tailwind styles and custom print styles for A5
    const tailwindStyles = `
      @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
  
      @page {
        size: A5;
        margin: 10mm; /* Adjust margins as needed */
      }
  
      body {
        font-family: 'Inter', sans-serif;
        width: 148mm; /* A5 width */
        height: 210mm; /* A5 height */
        overflow: hidden;
      }
  
      .print-hidden {
        display: none;
      }
  
      .text-center {
        text-align: center;
      }
  
      .font-bold {
        font-weight: bold;
      }
  
      .border {
        border: 1px solid #e5e7eb; /* Tailwind gray-200 */
      }
  
      .p-4 {
        padding: 1rem;
      }
  
      /* Optional: Adjust table layout for print */
      table {
        width: 100%;
        border-collapse: collapse;
      }
  
      th, td {
        padding: 8px;
        border: 1px solid #ddd; /* Light border for table */
      }
    `;

    printJS({
      printable: `<div>${voucherSlipHtml}</div>`,
      type: "raw-html", // Use raw HTML for printing
      style: tailwindStyles,
    });
  };

  return (
    <div className="my-[50px] flex justify-center">
      <div className="w-[148mm] h-[auto] p-8 mx-auto bg-white" id="voucherSlip">
        {/* Company Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold mb-2">Rider Company</h1>
          <p className="text-sm text-gray-600">
            3915 Mcwhorter Road, Iuka, MS, 38852 (123) 123-4567 |
            info@company.com | www.company.com
          </p>
        </div>

        {/* Voucher Title */}
        <div className="bg-blue-50 py-4 mb-6">
          <h2 className="text-center text-xl font-bold text-navy-900">
            Voucher Detail
          </h2>
        </div>

        {/* Voucher Details */}
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="flex gap-4">
            <span className="font-semibold">Voucher #</span>
            <span>{voucher_id}</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold">Sale Date</span>
            <span>{sale_date}</span>
          </div>
          <div className="flex gap-4 col-span-2">
            <span className="font-semibold">Paid To</span>
            <span>{customer_name}</span>
          </div>
        </div>

        {/* Items Table */}
        <div>
          <Items records={records} />

          <div>
            <div className="flex justify-end mt-4 font-semibold">
              <div className="text-right flex gap-3">
                <div>Total</div>
                <div>$ {parseInt(total).toFixed(2)}</div>
              </div>
            </div>

            <div className="flex justify-end mt-4 font-semibold">
              <div className="text-right flex gap-3">
                <div>Tax</div>
                <div>$ {parseInt(tax).toFixed(2)}</div>
              </div>
            </div>

            <div className="flex justify-end mt-4 font-semibold">
              <div className="text-right flex gap-3">
                <div>Net Total</div>
                <div>$ {parseInt(net_total).toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link
          to={"/vouchers"}
          type="button"
          className="text-white bg-[#477389] hover:bg-[#477389]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          <HiArrowLeft size={25} />
          <span className="ms-3">Back</span>
        </Link>

        <button
          type="button"
          onClick={printVoucherSlipBtn}
          className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          <HiOutlinePrinter size={25} />
          <span className="ms-3">Print Now</span>
        </button>
      </div>
    </div>
  );
};

export default VoucherDetailSlip;
