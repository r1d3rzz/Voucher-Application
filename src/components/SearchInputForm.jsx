import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SearchInputForm = ({ searchHandler }) => {
  const searchProduct = (e) => {
    searchHandler(e.target.value);
  };
  return (
    <form className="flex items-center max-w-sm mx-auto">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <HiOutlineSearch />
        </div>
        <input
          type="text"
          id="simple-search"
          onChange={searchProduct}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Product name..."
          required
        />
      </div>
    </form>
  );
};

export default SearchInputForm;