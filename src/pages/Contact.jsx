import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";
import Footer from "../components/Footer";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    alert(
      "✅ Thank you for contacting Amma Chethi Vanta!\nWe will get back to you soon.",
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Navbar />

      <div className="contact">
        <h1>Contact Us</h1>

        <p>📍 Akkapally, Yellareddypet</p>
        <p>📞 +91 6301626880</p>
        <p>📧 ammachethivanta@gmail.com</p>

        <label>Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button onClick={handleSubmit}>Send Message</button>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
