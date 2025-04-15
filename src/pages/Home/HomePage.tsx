import "./HomePage.scss";

const HomePage = () => {
  const categories = [
    {
      name: "Fragrance",
      image: "src/assets/carousel_fragrance.jpeg",
      price: "$25.00",
      description:
        "Explore our exquisite collection of perfumes and scents, crafted with the finest aromatic ingredients to evoke your unique personality.",
    },
    {
      name: "Makeup",
      image: "src/assets/carousel_makeup.jpeg",
      price: "$30.00",
      description:
        "Discover a wide range of high-quality makeup products for every look, from everyday essentials to glamorous statement pieces. ",
    },
    {
      name: "Skincare",
      image: "src/assets/carousel_skincare.jpeg",
      price: "$40.00",
      description:
        "Nourish and enhance your skin with our premium skincare essentials. Our carefully formulated products address various skin concerns.",
    },
    {
      name: "Fragrance",
      image: "src/assets/carousel_fragrance.jpeg",
      price: "$28.00",
      description:
        "Indulge in captivating aromas with our curated fragrance selection. Find your signature scent among our diverse range of perfumes and colognes.",
    },
    {
      name: "Men’s grooming",
      image: "src/assets/carousel_grooming.jpeg",
      price: "$35.00",
      description:
        "Find the perfect grooming products to elevate your daily routine. Our selection includes high-quality shaving, hair care.",
    },
    {
      name: "Makeup",
      image: "src/assets/carousel_makeup.jpeg",
      price: "$22.00",
      description:
        "Discover a wide range of high-quality makeup products for every look, from everyday essentials to glamorous statement pieces. ",
    },
    {
      name: "Skincare",
      image: "src/assets/carousel_skincare.jpeg",
      price: "$45.00",
      description:
        "Nourish and enhance your skin with our premium skincare essentials. Our carefully formulated products address various skin concerns.",
    },
    {
      name: "Fragrance",
      image: "src/assets/carousel_fragrance.jpeg",
      price: "$32.00",
      description:
        "Explore our exquisite collection of perfumes and scents, crafted with the finest aromatic ingredients to evoke your unique personality.",
    },
    {
      name: "Men’s grooming",
      image: "src/assets/carousel_grooming.jpeg",
      price: "$38.00",
      description:
        "Find the perfect grooming products to elevate your daily routine. Our selection includes high-quality shaving, hair care.",
    },
    {
      name: "Makeup",
      image: "src/assets/carousel_makeup.jpeg",
      price: "$27.00",
      description:
        "Discover a wide range of high-quality makeup products for every look, from everyday essentials to glamorous statement pieces. ",
    },
  ];

  return (
    <div>
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-text">
            <h1>
              <span>Let Kira Help You</span>
              Look Your Best.
            </h1>
            <p>
              Discover <strong>Kira</strong>, where beauty innovation meets
              luxury. <br />
              Our eco-friendly, high-quality cosmetics enhance your <br />
              natural glow. Explore our range and experience the <br />
              future of beauty today.
            </p>

            <button className="learn-more-button">Learn more about us</button>
          </div>

          <div className="hero-images">
            <div className="left-images">
              <img
                src="src/assets/top1.png"
                alt="Product 1"
                className="image-small"
              />
              <img
                src="src/assets/top3.jpeg"
                alt="Product 2"
                className="image-small"
              />
            </div>
            <div className="right-image">
              <img
                src="src/assets/top2.jpeg"
                alt="Product 3"
                className="image-tall"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="shop-category-container">
        <h2 className="section-title">Shop By Category</h2>
        <div className="carousel-wrapper">
          <div className="carousel">
            {categories.map((category, index) => (
              <div className="category-card" key={index}>
                <img src={category.image} alt={category.name} />
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="handwash-section">
        <div className="handwash-text">
          <h3>Kira Revitalizing Handwash</h3>
          <p>
            Discover <strong>Kira</strong> Revitalizing Handwash for clean,
            nourished hands. Its unique formula deeply cleanses while hydrating,
            leaving hands refreshed and smooth. Suitable for all skin types with
            a delightful fragrance
          </p>
          <button className="shop-now-button">Shop Now</button>
        </div>
        <div className="handwash-image">
          <img
            src="src/assets/display_handwash.png"
            alt="Kira Revitalizing Handwash"
          />
        </div>
      </div>
      <div className="our-products-section">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {categories.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                {product.description && (
                  <p className="product-description">{product.description}</p>
                )}{" "}
                {/* Display category description */}
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart-button">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
