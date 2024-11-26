import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import EmptyProduct from "./EmptyProduct";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useCookie from "react-use-cookie";
import useSWR from "swr";
import ProductSkeletonLoader from "./ProductSkeletonLoader";
import { HiOutlineSearch } from "react-icons/hi";
import { debounce } from "lodash";
import SearchInputForm from "../../../components/SearchInputForm";
import Pagination from "../../../components/Pagination";

const ProductsList = () => {
  const location = useLocation();
  const [params, setParam] = useSearchParams();
  const [api, setApi] = useState(
    import.meta.env.VITE_API_URL + "/products" + location.search
  );
  const [token] = useCookie("my_token");
  const fetcher = (...args) =>
    fetch(...args, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  const { data, isLoading } = useSWR(api, fetcher);

  const updateURL = (url) => {
    const currentURL = new URL(url);
    const searchURL = new URLSearchParams(currentURL.search);
    const searchEntries = Object.fromEntries(searchURL);
    setParam(searchEntries);
    setApi(url);
  };

  const searchProduct = debounce((value) => {
    if (value) {
      setParam({ q: value });
      updateURL(import.meta.env.VITE_API_URL + "/products?q=" + value);
    } else {
      setParam({});
    }
    setApi(import.meta.env.VITE_API_URL + "/products?q=" + value);
  }, 500);

  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <Link
            to={"/products/create"}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add New Product
          </Link>
        </div>

        <div>
          <SearchInputForm searchHandler={searchProduct} />
        </div>
      </div>
      <div className="relative my-5 overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {!isLoading ? (
              data?.data?.length ? (
                data?.data?.map((product) => (
                  <SingleProduct key={product.id} product={product} />
                ))
              ) : (
                <EmptyProduct />
              )
            ) : (
              <ProductSkeletonLoader />
            )}
          </tbody>
        </table>
        <div className="my-3">
          <Pagination meta={data?.meta} updateURL={updateURL} />
        </div>
      </div>
    </>
  );
};

export default ProductsList;
