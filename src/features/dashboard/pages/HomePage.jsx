import React from "react";
import ActionBtn from "../../../components/ActionBtn";
import { HiDatabase } from "react-icons/hi";
import { HiDocument, HiWindow } from "react-icons/hi2";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
      <div className="col-span-1">
        <ActionBtn
          redirect="/about-us"
          name={"Products"}
          icon={<HiDatabase size={80} />}
        />
      </div>
      <div className="col-span-1">
        <ActionBtn
          redirect="/about-us"
          name={"Products"}
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
  );
};

export default HomePage;
