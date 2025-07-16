import { NavLink } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BrandsDropdown from "../../BrandsDropdown/BrandsDropDown";
import "./Navbar.scss";

const Navbar = () => {
  const [showBrands, setShowBrands] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {t("navbar.home")}
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {t("navbar.shop")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {t("navbar.about")}
        </NavLink>
        <div
          className="brands-hover-container"
          onMouseEnter={() => setShowBrands(true)}
          onMouseLeave={() => setShowBrands(false)}
        >
          <NavLink
            to="/brand"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {t("navbar.brands")}
          </NavLink>
          {showBrands && <BrandsDropdown />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
