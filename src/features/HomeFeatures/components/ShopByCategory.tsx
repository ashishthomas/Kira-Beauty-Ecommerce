import { useEffect, useRef, useState } from "react";
import fetchCategories, { Category } from "../services/fetchCategories";
import "../styles/ShopByCategory.scss";

const ShopByCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  return (
    <div className="shop-category-container">
      <h2 className="section-title">Shop By Category</h2>
      <div className="carousel-wrapper">
        <div className="carousel">
          {categories.map((category, index) => (
            <div
              className="category-card"
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
