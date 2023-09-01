import HomePage from "../pages/home";
import AboutUsPage from "../pages/about-us";
import FeaturesPage from "../pages/features";
import PricingPage from "../pages/pricing";
import AffiliatesPage from "../pages/affiliates";
import ForeverMessagesPage from "../pages/forever-messages";
import SignInPage from "../pages/sign-in";
import SignUpPage from "../pages/sign-up";
import Profile from "../pages/profile/Profile";
import CreateProfilePage from "../pages/create-profile/CreateProfilePage";

export const routeConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/affiliates",
    element: <AffiliatesPage />,
  },
  {
    path: "/forever-messages",
    element: <ForeverMessagesPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/create-profile",
    element: <CreateProfilePage />,
  },
];
