import VoucherDetailPage from "../features/voucher/pages/VoucherDetailPage";
import VoucherPage from "../features/voucher/pages/VoucherPage";

const VoucherRoutes = [
  {
    path: "/vouchers",
    element: <VoucherPage />,
  },
  {
    path: "/vouchers/:id",
    element: <VoucherDetailPage />,
  },
];

export default VoucherRoutes;
