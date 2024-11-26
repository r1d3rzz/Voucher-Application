import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import ProductsList from "../components/ProductsList";

const ProductPage = () => {
  return (
    <Container>
      <Breadcrumb currentPage={"Products"} />
      <ProductsList />
    </Container>
  );
};

export default ProductPage;
