import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ records }) => {
  return (
    <div>
      <h3 className="font-semibold mb-4">Items</h3>
      <div className="w-full">
        <div className="grid grid-cols-4 bg-blue-50 p-2 font-semibold">
          <div>Name</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Amount ($)</div>
        </div>

        {records.map((record, index) => (
          <SingleItem key={index} record={record} />
        ))}
      </div>
    </div>
  );
};

export default Items;
