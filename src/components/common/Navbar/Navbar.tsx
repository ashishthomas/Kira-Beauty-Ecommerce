import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links flex flex-row gap-5 items-center justify-center">
        <li>
          <a href="#">Demos</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
