import Navbar from "../components/Navbar";
import "../styles/About.css";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="about">
        <h1>About Us</h1>

        <p>
          Amma Chethi Vanta is a homemade snacks shop serving fresh, hygienic,
          and delicious evening snacks. We prepare every item with quality
          ingredients and traditional homemade recipes.
        </p>

        <h2>Why Choose Us?</h2>

        <ul>
          <li>✅ Freshly Prepared Every Evening</li>
          <li>✅ Homemade Taste</li>
          <li>✅ Affordable Prices</li>
          <li>✅ Quality Ingredients</li>
          <li>✅ Fast Service</li>
        </ul>

        <div className="mission">
          <h3>Our Mission</h3>

          <p>
            To serve fresh homemade snacks with quality and love every evening.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
