import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

    // WhatsApp message format
    const whatsappMessage = `
Hello Sravanthi,

Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}
Message: ${formData.message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/918332056552?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="contact-section snap-section" id="contact">

      {/* Background Glow */}
      <div className="contact-glow"></div>

      {/* Header */}
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>CONTACT</h2>
        <h3>Let’s Build Something Powerful</h3>
        <p>
          Have a project in mind? Send an enquiry and let’s discuss how
          we can elevate your brand.
        </p>
      </motion.div>

      <div className="contact-container">

        {/* LEFT – FORM */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option>Logo Design</option>
            <option>Social Media Design</option>
            <option>Marketing & Print Design</option>
            <option>Resume / Portfolio Design</option>
            <option>Custom Project</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Enquiry via WhatsApp
          </button>

        </motion.form>

        {/* RIGHT – CONTACT INFO */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="info-box">
            <FaWhatsapp />
            <div>
              <h4>WhatsApp</h4>
              <a href="https://wa.me/918332056552" target="_blank">
                +91 8332056552
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <a href="mailto:spinnamsetty@gmail.com">
                spinnamsetty@gmail.com
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;