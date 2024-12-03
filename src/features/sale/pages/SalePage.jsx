import React from "react";
import SaleForm from "../components/SaleForm";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import SaleCustomerForm from "../components/SaleCustomerForm";
import SaleRecords from "../components/SaleRecords";
import useSaleStore from "../../../store/useSaleStore";
import useSaleTotalPrice from "../../../store/useSaleTotalPrice.js";

const SalePage = () => {
  const {salesList,setSale} = useSaleStore();
  const {total,addTotal} = useSaleTotalPrice();
  const salesListHandler = (data) => {
    setSale(data);
    addTotal(data.product.price * data.quantity);
  }
  return (
    <Container>
      <Breadcrumb currentPage={"Sales"} />
      <div className="grid grid-cols-4 gap-3 mb-5">
        <div className="col-span-3">
          <SaleForm  salesListHandler={salesListHandler}/>
          <SaleRecords salesList = {salesList} total={total} />
        </div>
        <div className="col-span-1">
          <SaleCustomerForm total={total}/>
        </div>
      </div>
    </Container>
  );
};

export default SalePage;
