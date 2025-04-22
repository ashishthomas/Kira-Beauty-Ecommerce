import BottomBanner from "../../components/common/BottomBanner/BottomBanner";
import "./AboutUs.scss";

const AboutUs = () => {
  const imageList = [
    "src/assets/Bottom_Banner/lipstick.jpeg",
    "src/assets/Bottom_Banner/perfume.jpeg",
    "src/assets/Bottom_Banner/skincare.jpeg",
  ];

  return (
    <div>
      <section className="welcome">
        <h1>Welcome to Kira</h1>
        <p>
          At Kira, we believe that beauty is more than skin deep. It’s about
          feeling confident, embracing your individuality, and expressing
          yourself in your own unique way. Our mission is to empower you with
          the tools and products to enhance your natural beauty and inspire
          confidence every day.
        </p>
        <div className="welcome-image">
          <img src="src/assets/Welcome_Images/Welcome_1.jpeg" alt="Welcome 1" />
          <img src="src/assets/Welcome_Images/Welcome_2.jpeg" alt="Welcome 2" />
        </div>
      </section>
      <section className="story">
        <h2>Our Story</h2>
        <p>
          Kira was founded with a passion for beauty and a commitment to
          excellence. What started as a dream to create high-quality, accessible
          beauty products has grown into a trusted brand known for innovation,
          integrity, and a deep understanding of what makes our customers feel
          beautiful. From our humble beginnings, we have remained dedicated to
          bringing you the best in cosmetics and skincare.
        </p>
      </section>
      <section className="quality">
        <h2>Quality and Innovation</h2>
        <p>
          Quality is at the heart of everything we do. Our products are
          formulated with care, using only the best ingredients that are both
          effective and gentle on your skin. We continually strive to innovate
          and stay ahead of the latest beauty trends, ensuring that our products
          deliver outstanding results.
        </p>
      </section>
      <section className="banner-product">
        <div className="banner-product-image">
          <img src="src/assets/Banner/bannerImage.jpeg" alt="Kira Product" />
        </div>
        <div className="banner-product-content">
          <h2>Our Products</h2>
          <p>
            Each product in the Kira collection is meticulously crafted using
            the finest ingredients and the latest scientific advancements. We
            offer a wide range of cosmetics, skincare, and fragrances designed
            to meet the diverse needs of our customers. Whether you’re looking
            for a radiant foundation, a nourishing hair mask, or a captivating
            fragrance, Kira has something for everyone
          </p>
        </div>
      </section>
      <div className="bottom-banner-section">
        {imageList.map((src, idx) => (
          <BottomBanner key={idx} src={src} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
