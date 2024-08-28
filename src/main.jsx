import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
// import Forget from "./Components/Login/Forget.jsx";

const Login = lazy(() => import("./Components/Login/Login.jsx"));
const SignUp = lazy(() => import("./Components/SignUp/Signup.jsx"));
const StudentDashboard = lazy(() =>
  import("./Components/Dashboard/StudentDashboard.jsx")
);
const DashboardNavbar = lazy(() =>
  import("./Components/Dashboard/DashboardNavbar.jsx")
);
const StudentProfile = lazy(() =>
  import("./Components/Dashboard/StudentProfile.jsx")
);
const CookiePolicy = lazy(() =>
  import("./Components/Policies/CookiePolicy.jsx")
);
const PrivacyPolicy = lazy(() =>
  import("./Components/Policies/PrivacyPolicy.jsx")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
      {/* <Route path="ForgetPassword" element={<Forget />} /> */}
      <Route path="StudentDashboard" element={<StudentDashboard />} />
      <Route path="DashboardNavbar" element={<DashboardNavbar />} />
      <Route path="StudentProfile" element={<StudentProfile />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="CookiePolicy" element={<CookiePolicy />} />
      <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
