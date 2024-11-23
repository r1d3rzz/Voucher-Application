import React from "react";
import { useNavigate } from "react-router-dom";

const ActionBtn = ({ redirect, name, icon }) => {
  const navigate = useNavigate();
  const onsubmit = () => {
    navigate(redirect);
  };
  return (
    <div>
      <button
        onClick={onsubmit}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full flex flex-col justify-center items-center py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {icon}
        {name}
      </button>
    </div>
  );
};

export default ActionBtn;
