import UserNameChangePage from "../features/userProfile/pages/UserNameChangePage";
import UserPasswordChangePage from "../features/userProfile/pages/UserPasswordChangePage";
import UserProfilePage from "../features/userProfile/pages/UserProfilePage";

const userProfileRoutes = [
  {
    path: "/profile",
    element: <UserProfilePage />,
  },
  {
    path: "/change-password",
    element: <UserPasswordChangePage />,
  },
  {
    path: "/change-name",
    element: <UserNameChangePage />,
  },
];

export default userProfileRoutes;
