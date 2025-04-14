import { Outlet } from "react-router";
import Header from "../Header/Header";
import "./AppLayout.scss";

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <Header />
      <div className="content-section w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
