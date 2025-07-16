import { NavLink } from "react-router";
import "./Logo.scss";
import { useTranslation } from "react-i18next";

const Logo = () => {
  // return (
  //   <NavLink to="/home" className="logo">
  //     Kira
  //   </NavLink>
  // );
  const { t } = useTranslation();
  return (
    <NavLink to="/home" className="logo">
      {t("logo.brand")}
    </NavLink>
  );
};

export default Logo;
