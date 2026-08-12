import "../styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Taste the Love of Homemade Snacks ❤️</h1>

        <p>Freshly Prepared Every Evening</p>

        <div className="hero-buttons">
          <Link to="/menu">
            <button className="hero-btn">View Menu</button>
          </Link>

          <Link to="/contact">
            <button className="hero-btn">Contact Us</button>
          </Link>
        </div>
      </div>

      <div>
        <img src="/images/hero.png" alt="hero" />
      </div>
    </section>
  );
}

export default Hero;
