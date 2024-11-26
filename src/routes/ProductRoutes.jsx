import ProductCreatePage from "../features/product/pages/ProductCreatePage";
import ProductEditPage from "../features/product/pages/ProductEditPage";
import ProductPage from "../features/product/pages/ProductPage";

const ProductRoutes = [
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/products/create",
    element: <ProductCreatePage />,
  },
  {
    path: "/products/edit/:id",
    element: <ProductEditPage />,
  },
];

export default ProductRoutes;
