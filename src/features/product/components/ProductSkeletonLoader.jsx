import React from "react";

const ProductSkeletonLoader = () => {
  const arr = Array.from({ length: 3 }, (_, i) => i); // Change (v, i) to (_, i) since v is unused

  return (
    <>
      {arr.map(() => (
        <tr
          key={Math.random()}
          className="animate-pulse bg-gray-100 even:bg-slate-300"
        >
          <td className="px-4 py-3">
            <div className="block w-7 h-6 bg-gray-200 rounded-lg"></div>
          </td>
          <td className="px-4 py-3">
            <div className="block w-24 h-6 bg-gray-200 rounded-lg"></div>
          </td>
          <td className="px-4 py-3">
            <div className="block w-24 h-6 bg-gray-200 rounded-lg"></div>
          </td>
          <td className="px-4 py-3">
            <div className="block w-24 h-6 bg-gray-200 rounded-lg"></div>
          </td>
          <td className="px-4 py-3">
            <div className="block w-24 h-6 bg-gray-200 rounded-lg"></div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductSkeletonLoader;
