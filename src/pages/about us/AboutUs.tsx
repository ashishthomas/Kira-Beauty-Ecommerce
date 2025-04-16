import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="welcome">
      <h1>Welcome to Kira</h1>
      <p>
        At Kira, we believe that beauty is more than skin deep. It’s about
        feeling confident, embracing your individuality, and expressing yourself
        in your own unique way. Our mission is to empower you with the tools and
        products to enhance your natural beauty and inspire confidence every
        day.
      </p>
      <div className="welcome-image">
        <img src="src/assets/Welcome_Images/Welcome_1.jpeg" alt="Welcome 1" />
        <img src="src/assets/Welcome_Images/Welcome_2.jpeg" alt="Welcome 2" />
      </div>
    </section>
  );
};

export default AboutUs;
