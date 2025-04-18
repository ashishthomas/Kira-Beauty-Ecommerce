import { NavLink } from "react-router";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
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
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        CONTACT US
      </NavLink>
    </nav>
  );
};

export default Navbar;
