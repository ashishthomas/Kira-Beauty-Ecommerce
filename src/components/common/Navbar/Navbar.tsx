import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex space-x-16 text-sm font-medium">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "text-[#677E53] font-bold"
            : "text-gray-800 hover:text-[#677E53]"
        }
        style={{ fontSize: 18 }}
      >
        HOME
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive
            ? "text-[#677E53] font-bold"
            : "text-gray-800 hover:text-[#677E53]"
        }
        style={{ fontSize: 18 }}
      >
        SHOP
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-[#677E53] font-bold"
            : "text-gray-800 hover:text-[#677E53]"
        }
        style={{ fontSize: 18 }}
      >
        ABOUT US
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-[#677E53] font-bold"
            : "text-gray-800 hover:text-[#677E53]"
        }
        style={{ fontSize: 18 }}
      >
        CONTACT US
      </NavLink>
    </nav>
  );
};

export default Navbar;
