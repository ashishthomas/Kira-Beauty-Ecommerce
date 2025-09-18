import React from "react";
import "./Footer.scss";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router";
import GoogleTranslate from "../Translation/GoogleTranslate";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <h1 className="logo">{t("footer.logo")}</h1>
      <div className="container">
        <div className="section about">
          <h4>{t("footer.about.title")}</h4>
          <p>{t("footer.about.description")}</p>
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
          <h4>{t("footer.explore.title")}</h4>
          <ul>
            <li>
              <button
                className="footer-link-btn"
                onClick={() => navigate("/home")}
              >
                {t("navbar.home")}
              </button>
            </li>
            <li>
              <button
                className="footer-link-btn"
                onClick={() => navigate("/shop")}
              >
                {t("navbar.shop")}
              </button>
            </li>
            <li>
              <button
                className="footer-link-btn"
                onClick={() => navigate("/about")}
              >
                {t("navbar.about")}
              </button>
            </li>
            <li>
              <button
                className="footer-link-btn"
                onClick={() => navigate("/brand")}
              >
                {t("navbar.brands")}
              </button>
            </li>
          </ul>
        </div>

        <div className="section customer-service">
          <h4>{t("footer.service.title")}</h4>
          <p>{t("footer.service.description")}</p>
          <p className="phone">
            <strong>{t("footer.service.phoneLabel")}</strong> 0645678923
          </p>
          <p className="email">
            <strong>{t("footer.service.emailLabel")}</strong> KIRA@gmail.com
          </p>
        </div>

        <div className="section Language">
          <h4>{t("footer.language.title")}</h4>
          <p>{t("footer.language.description")}</p>
          <GoogleTranslate />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
