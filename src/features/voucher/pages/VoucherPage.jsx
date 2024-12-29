import React from "react";
import VouchersList from "../components/VouchersList";
import Container from "../../../components/Container";
import { Toaster } from "react-hot-toast";

const VoucherPage = () => {
  return (
    <Container className="my-5">
      <Toaster />
      <VouchersList />
    </Container>
  );
};

export default VoucherPage;
