import { motion } from "framer-motion";
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaEnvelope, 
  FaArrowUp 
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {

  /* ===========================
     SCROLL TO TOP FUNCTION
  =========================== */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-section">

      {/* Animated Glow Background */}
      <div className="footer-glow"></div>

      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        {/* ===========================
           COLUMN 1 – BRAND INFO
        =========================== */}

        <div className="footer-col brand-col">
          <h2 className="footer-logo">Sravanthi Builds</h2>

          <p>
            Strategic graphic design solutions that help brands
            communicate clearly, build trust and convert attention into growth.
          </p>

          <div className="footer-socials">

            {/* WhatsApp */}
            <a 
              href="https://wa.me/918332056552"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/sravanthi_9875?igsh=MXBoMDk5ZGNoem01bg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            {/* Email */}
            <a 
              href="mailto:spinnamsetty@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* ===========================
           COLUMN 2 – QUICK LINKS
        =========================== */}

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* ===========================
           COLUMN 3 – SERVICES
        =========================== */}

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Brand Identity & Logo</li>
            <li>Social Media Design</li>
            <li>Marketing & Print</li>
            <li>Resume & Portfolio Design</li>
            <li>Custom Projects</li>
          </ul>
        </div>

        {/* ===========================
           COLUMN 4 – CONTACT INFO
        =========================== */}

        <div className="footer-col">
          <h4>Contact Info</h4>
          <ul>
            <li>
              📞 
              <a href="tel:+918332056552">
                +91 8332056552
              </a>
            </li>
            <li>
              📧 
              <a href="mailto:spinnamsetty@gmail.com">
                spinnamsetty@gmail.com
              </a>
            </li>
            <li>📍 India</li>
          </ul>
        </div>

      </motion.div>

      {/* ===========================
         BOTTOM BAR
      =========================== */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Sravanthi Builds.
          All rights reserved.
        </p>

        <button 
          className="scroll-top-btn" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
};

export default Footer;