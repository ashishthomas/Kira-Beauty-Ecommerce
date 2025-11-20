import { useEffect, useRef, useState } from "react";
import fetchCategories, { Category } from "../services/fetchCategories";
import "../styles/ShopByCategory.scss";
import carousel_fragrance from "../../../assets/jpeg/carousel_fragrance.jpeg";
import carousel_makeup from "../../../assets/jpeg/carousel_makeup.jpeg";
import carousel_skincare from "../../../assets/jpeg/carousel_skincare.jpeg";
import carousel_grooming from "../../../assets/jpeg/carousel_grooming.jpeg";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const imageMap: { [key: string]: string } = {
  carousel_fragrance,
  carousel_makeup,
  carousel_skincare,
  carousel_grooming,
};

const ShopByCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.3 }
    );

    const refsSnapshot = [...cardRefs.current]; // FIX #2: Capture current ref

    for (const ref of refsSnapshot) {
      if (ref) observer.observe(ref);
    }

    return () => {
      for (const ref of refsSnapshot) {
        if (ref) observer.unobserve(ref);
      }
    };
  }, [categories]);

  const handleCategoryClick = (name: string) => {
    const formattedName = name.toLowerCase().replace(/ /g, "-"); // FIX #3
    navigate(`/shop/${formattedName}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent, name: string) => {
    if (e.key === "Enter" || e.key === " ") {
      handleCategoryClick(name);
    }
  };

  return (
    <div className="shop-category-container">
      <h2 className="section-title">{t("shopByCategory.title")}</h2>

      <div className="carousel-wrapper">
        <div className="carousel">
          {categories.map((category, index) => (
            <button
              key={category.name} // FIXED KEY WARNING
              type="button"
              className="category-card"
              ref={(el) => {
                // FIXED REF CALLBACK
                cardRefs.current[index] = el;
              }}
              onClick={() => handleCategoryClick(category.name)}
              onKeyDown={(e) => handleKeyPress(e, category.name)}
            >
              <img src={imageMap[category.imageKey]} alt={category.name} />
              <p>{t(`shopByCategory.categories.${category.name}`)}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
