import React from "react";
import SaleForm from "../components/SaleForm";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import SaleCustomerForm from "../components/SaleCustomerForm";
import SaleRecords from "../components/SaleRecords";

const SalePage = () => {
  return (
    <Container>
      <Breadcrumb currentPage={"Sales"} />
      <div className="grid grid-cols-4 gap-3 mb-5">
        <div className="col-span-3">
          <SaleForm />
          <SaleRecords />
        </div>
        <div className="col-span-1">
          <SaleCustomerForm />
        </div>
      </div>
    </Container>
  );
};

export default SalePage;
