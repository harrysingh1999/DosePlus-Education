import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import { Suspense, useEffect } from "react";
import DashboardNavbar from "./Components/Dashboard/DashboardNavbar";

function App() {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {location.pathname === "/StudentDashboard" ||
      location.pathname === "/AdminDashboard" ? (
        <DashboardNavbar />
      ) : (
        <Navbar />
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
