import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import BrandsDropdown from "../../BrandsDropdown/BrandsDropDown";
import "./Navbar.scss";

const Navbar = () => {
  const [showBrands, setShowBrands] = useState(false);
 

  return (
    <nav className="navbar" >
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
        className="brands-hover-conatainer"
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
    </nav>
  );
};

export default Navbar;
