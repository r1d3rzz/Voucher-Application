import useCookie from "react-use-cookie";
import VoucherDetailSlip from "../components/VoucherDetailSlip";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const VoucherDetailPage = () => {
  const { id } = useParams();
  const api = import.meta.env.VITE_API_URL;
  const [token] = useCookie("my_token");
  const fetcher = (...args) =>
    fetch(...args, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  const { data, isLoading } = useSWR(api + "/vouchers/" + id, fetcher);
  return isLoading ? null : <VoucherDetailSlip voucherDetail={data?.data} />;
};

export default VoucherDetailPage;
