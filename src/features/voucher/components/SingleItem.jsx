import React from "react";

const SingleItem = ({
  record: {
    quantity,
    cost,
    product: { product_name, price },
  },
}) => {
  return (
    <div className="grid grid-cols-4 p-2 bg-gray-50">
      <div>{product_name}</div>
      <div className="text-center">{parseInt(price).toFixed(2)}</div>
      <div className="text-center">{quantity}</div>
      <div className="text-right">${parseInt(cost).toFixed(2)}</div>
    </div>
  );
};

export default SingleItem;
