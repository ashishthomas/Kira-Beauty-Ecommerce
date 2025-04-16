import React from "react";
import "./Footer.scss";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h1 className="logo">Kira</h1>
      <div className="container">
        <div className="section about">
          <h4>About Kira</h4>
          <p>
            Welcome to Kira, where beauty meets innovation. Our mission is to
            empower individuals to embrace their unique beauty with confidence.
            With a commitment to quality and excellence, we offer a curated
            collection of cosmetics, skincare, and fragrances crafted to elevate
            your daily routine.
          </p>
          <div className="social-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="section explore">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>

        <div className="section customer-service">
          <h4>Customer Service</h4>
          <p>
            Have questions or need assistance? Our dedicated customer service
            team is here to help. Contact us:
          </p>
          <p className="phone">
            <strong>Phone:</strong> 0645678923
          </p>
          <p className="email">
            <strong>Email:</strong> KIRA@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
