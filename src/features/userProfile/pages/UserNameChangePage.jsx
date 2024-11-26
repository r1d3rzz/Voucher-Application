import React from "react";
import UserChangeNameForm from "../components/UserChangeNameForm";
import Breadcrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";

const UserNameChangePage = () => {
  return (
    <Container>
      <Breadcrumb
        links={[{ path: "/profile", name: "User Profile" }]}
        currentPage={"Change Name"}
      />
      <UserChangeNameForm />
    </Container>
  );
};

export default UserNameChangePage;
