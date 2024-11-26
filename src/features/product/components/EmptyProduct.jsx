import React from "react";

const EmptyProduct = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        colSpan={5}
        className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        Empty Product !
      </th>
    </tr>
  );
};

export default EmptyProduct;
