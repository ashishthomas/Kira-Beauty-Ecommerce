import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header";
import "./AppLayout.scss";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

const AppLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-layout flex flex-col items-center">
      <Header />
      <div className="content-section w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
