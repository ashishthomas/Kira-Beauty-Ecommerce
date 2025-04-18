import { NavLink } from "react-router";
import "./Logo.scss";

const Logo = () => {
  return (
    <NavLink to="/home" className="logo">
      Kira
    </NavLink>
  );
};

export default Logo;
