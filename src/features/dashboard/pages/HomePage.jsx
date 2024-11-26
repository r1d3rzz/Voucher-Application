import React from "react";
import ActionBtn from "../../../components/ActionBtn";
import { HiDatabase } from "react-icons/hi";
import { HiDocument, HiWindow } from "react-icons/hi2";
import Container from "../../../components/Container";

const HomePage = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
        <div className="col-span-1">
          <ActionBtn
            redirect="/products"
            name={"Products"}
            icon={<HiDatabase size={80} />}
          />
        </div>
        <div className="col-span-1">
          <ActionBtn
            redirect="/sales"
            name={"Sales"}
            icon={<HiWindow size={80} />}
          />
        </div>
        <div className="col-span-1">
          <ActionBtn
            redirect="/about-us"
            name={"Products"}
            icon={<HiDocument size={80} />}
          />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
