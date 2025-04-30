import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import Button from "../../../components/common/Button/Button.tsx";
import "../styles/ShopFeatures.scss";

const NavigateCategorySection: React.FC = () => {
  const categories = [
    { label: "Fragrance", path: "fragrance" },
    { label: "Makeup", path: "makeup" },
    { label: "Skincare", path: "skincare" },
    { label: "Men's grooming", path: "mens-grooming" },
    { label: "Top brands", path: "top-brands" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState<string>();

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    console.log(currentPath);

    const foundCategory = categories.find((cat) => cat.path === currentPath);
    if (foundCategory) {
      setActiveCategory(foundCategory.label);
    }
  }, [location.pathname]);

  return (
    <div className="shop-container">
      <div className="container-notes">
        <h1>Shop By {activeCategory} Notes</h1>
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
              {category.label}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigateCategorySection;
