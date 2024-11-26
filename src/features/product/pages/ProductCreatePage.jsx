import React from "react";
import ProductCreateForm from "../components/ProductCreateForm";
import Breadcrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";
import { Toaster } from "react-hot-toast";

const ProductCreatePage = () => {
  return (
    <Container>
      <Breadcrumb
        currentPage={"Create Product"}
        links={[{ path: "/products", name: "Products" }]}
      />
      <ProductCreateForm />
      <Toaster />
    </Container>
  );
};

export default ProductCreatePage;
