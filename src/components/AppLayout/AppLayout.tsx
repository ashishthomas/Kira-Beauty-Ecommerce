import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AppLayout.scss";

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <Header />
      <div className="content-section">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
