import React from "react";
import ProductEditForm from "../components/ProductEditForm";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";

const ProductEditPage = () => {
  return (
    <Container>
      <Breadcrumb
        currentPage={"Edit Product"}
        links={[{ path: "/products", name: "Products" }]}
      />
      <ProductEditForm />
    </Container>
  );
};

export default ProductEditPage;
