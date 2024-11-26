import React from "react";
import UserProfileCard from "../components/userProfileCard";
import Container from "../../../components/Container";
import { Toaster } from "react-hot-toast";
import Breadcrumb from "../../../components/Breadcrumb";

const UserProfilePage = () => {
  return (
    <Container>
      <Breadcrumb currentPage={"User Profile"} />
      <div className={"flex justify-center items-center mt-10"}>
        <UserProfileCard />
        <Toaster />
      </div>
    </Container>
  );
};

export default UserProfilePage;
