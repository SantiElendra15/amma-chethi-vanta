import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>🍛 Amma Chethi Vanta</h2>

        <p>Fresh Homemade Snacks Every Evening</p>

        <p>📍 Akkapally, Yellareddypet</p>

        <p>
          📞 <a href="tel:+916301626880">+91 6301626880</a>
        </p>

        <p>
          📧{" "}
          <a href="mailto:ammachethivanta@gmail.com">
            ammachethivanta@gmail.com
          </a>
        </p>

        <hr />

        <p>
          © {new Date().getFullYear()} Amma Chethi Vanta. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
