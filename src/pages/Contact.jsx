import Navbar from "../components/Navbar";
import "../styles/Contact.css";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact">
        <h1>Contact Us</h1>

        <p>📍 Akkapally, Yellareddypet</p>
        <p>📞 +91 6301626880</p>
        <p>📧 ammachethivanta@gmail.com</p>
        <label>Name</label>
        <input type="text" placeholder="Your Name" />
        <label>Email</label>
        <input type="email" placeholder="Your Email" />
        <label>Message</label>
        <textarea placeholder="Your Message"></textarea>

        <button>Send Message</button>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
