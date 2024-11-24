import React from "react";
import UserProfileCard from "../components/userProfileCard";
import Container from "../../../components/Container";
import { Toaster } from "react-hot-toast";

const UserProfilePage = () => {
  return (
    <Container className={"flex justify-center items-center mt-10"}>
      <UserProfileCard />
      <Toaster />
    </Container>
  );
};

export default UserProfilePage;
