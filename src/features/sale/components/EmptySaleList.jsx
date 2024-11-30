import React from "react";

const EmptySaleList = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        colSpan={4}
        scope="row"
        className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        Empty Sale. List Buy Somethings!
      </th>
    </tr>
  );
};

export default EmptySaleList;
