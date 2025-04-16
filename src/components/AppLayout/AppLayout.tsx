import { Outlet } from "react-router";
import Header from "../Header/Header";
import "./AppLayout.scss";
import Footer from "../Footer/Footer";

const AppLayout: React.FC = () => {
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
