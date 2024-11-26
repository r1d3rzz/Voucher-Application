import React from "react";
import { useNavigate } from "react-router-dom";

const Pagination = ({
  meta: { current_page, last_page, from, to, links, total } = {
    current_page: 0,
    last_page: 0,
    from: 0,
    to: 0,
    links: [],
    total: 0,
  },
  updateURL,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {from}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {to}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {total}
          </span>{" "}
          Entries
        </span>
      </div>
      <div>
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            {links.length > 0 &&
              links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => updateURL(link.url)}
                    disabled={link.active || link.url === null}
                    className={`${
                      link.label === "Next &raquo;"
                        ? "rounded-r-lg"
                        : link.label === "&laquo; Previous"
                        ? "rounded-l-lg"
                        : ""
                    }
                    flex items-center ${
                      link.active ? "bg-blue-500 text-white" : ""
                    } justify-center px-3 ${
                      link.url === null && "opacity-50 cursor-not-allowed"
                    } h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
                      !link.active &&
                      "hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
                    } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 `}
                  >
                    {link.label === "Next &raquo;"
                      ? "Next"
                      : link.label === "&laquo; Previous"
                      ? "Previous"
                      : link.label}
                  </button>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
