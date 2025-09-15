import { NavLink } from "react-router";
import "./Logo.scss";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();
  return (
    <NavLink to="/home" className="logo">
      {t("logo.brand")}
    </NavLink>
  );
};

export default Logo;
