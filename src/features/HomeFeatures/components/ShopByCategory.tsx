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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs?.current?.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs?.current?.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [categories]);

  const handleCategoryClick = (name: string) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/shop/${formattedName}`);
  };

  return (
    <div className="shop-category-container">
      {/* <h2 className="section-title">Shop By Category</h2> */}
      <h2 className="section-title">{t("shopByCategory.title")}</h2>
      <div className="carousel-wrapper">
        <div className="carousel">
          {categories.map((category, index) => (
            <div
              className="category-card"
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => handleCategoryClick(category.name)}
            >
              <img src={imageMap[category.imageKey]} alt={category.name} />
              {/* <p>{category.name}</p> */}
              <p>{t(`shopByCategory.categories.${category.name}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
