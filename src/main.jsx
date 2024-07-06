import React from "react";
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
import Login from "./Components/Login/Login.jsx";
import Forget from "./Components/Login/Forget.jsx";
import SignUp from "./Components/SignUp/Signup.jsx";
import StudentDashboard from "./Components/Dashboard/StudentDashboard.jsx";
import AdminDashboard from "./Components/Dashboard/AdminDashboard.jsx";
import DashboardNavbar from "./Components/Dashboard/DashboardNavbar.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="Forget" element={<Forget />} />
      <Route path="StudentDashboard" element={<StudentDashboard />} />
      <Route path="AdminDashboard" element={<AdminDashboard />} />
      <Route path="DashboardNavbar" element={<DashboardNavbar />} />
      <Route path="SignUp" element={<SignUp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
