import AboutUsPage from "../features/dashboard/pages/AboutUsPage";
import ContactUsPage from "../features/dashboard/pages/ContactUsPage";
import HomePage from "../features/dashboard/pages/HomePage";

const DashboardRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
];

export default DashboardRoutes;
