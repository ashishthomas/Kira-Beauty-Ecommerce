import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import Button from "../../../components/common/Button/Button.tsx";
import "../styles/ShopFeatures.scss";
import { useTranslation } from "react-i18next";

const NavigateCategorySection: React.FC = () => {
  const categories = [
    { label: "Fragrance", path: "fragrance" },
    { label: "Makeup", path: "makeup" },
    { label: "Skincare", path: "skincare" },
    // { label: "Men's grooming", path: "grooming" },
    { label: "mensGrooming", path: "grooming" },
    { label: "Top brands", path: "top-brands" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>();

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    const foundCategory = categories.find((cat) => cat.path === currentPath);
    if (foundCategory) {
      setActiveCategory(foundCategory.label);
    }
  }, [location.pathname]);

  return (
    <div className="shop-container">
      <div className="container-notes">
        {/* <h1>Shop By {activeCategory} Notes</h1> */}
        <h1>
          {t("shopBy")} {t(`navourProducts.categories.${activeCategory}.name`)}{" "}
          {t("notes")}
        </h1>
        <hr className="horizontal-line" />
      </div>
      <div className="container-buttons">
        {categories.map((category) => (
          <div
            key={category.label}
            className={
              category.label === activeCategory ? "active-btn" : "inactive-btn"
            }
            onClick={() => {
              navigate(category.path);
            }}
          >
            <Button variant="outline" size="medium">
              {/* {category.label} */}
              {t(`navourProducts.categories.${category.label}.name`)}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigateCategorySection;
