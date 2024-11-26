import React from "react";
import UserChangePasswordForm from "../components/UserChangePasswordForm";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";

const UserPasswordChangePage = () => {
  return (
    <Container>
      <Breadcrumb
        currentPage={"Change Password"}
        links={[{ path: "/profile", name: "User Profile" }]}
      />
      <UserChangePasswordForm />
    </Container>
  );
};

export default UserPasswordChangePage;
