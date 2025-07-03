import { NavLink } from "react-router";
import { useState } from "react";
import BrandsDropdown from "../../BrandsDropdown/BrandsDropDown";
import "./Navbar.scss";

const Navbar = () => {
  const [showBrands, setShowBrands] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          SHOP
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          ABOUT US
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
            BRANDS
          </NavLink>
          {showBrands && <BrandsDropdown />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
