import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useEffect } from "react";
import "./Home.css";

const Home = () => {

  /* ===========================
     MOUSE PARALLAX SYSTEM
  =========================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-30, 30]);
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-30, 30]);

  return (
    <section className="hero snap-section" id="home">

      {/* Animated Background Particles */}
      <div className="particles"></div>

      {/* Background Typography */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1.5 }}
        className="hero-bg-text"
      >
        GRAPHIC DESIGNER
      </motion.div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="hero-left glass-card"
        >

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-intro"
          >
            Hello, welcome to my creative space.
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-name"
          >
            Sravanthi
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hero-desc"
          >
            Professional Graphic Designer specialized in branding,
            thumbnails, posters and creative visual storytelling.
            I create high-impact graphic designs that help brands
            stand out, attract customers, and increase conversions.
          </motion.p>

          {/* ======================
             CTA BUTTON GROUP
          ====================== */}

          <div className="hero-cta-group">

            {/* View My Work */}
            <a
              href="#work"
              className="btn sweep-btn primary-btn"
            >
              🚀 View My Work
            </a>

            {/* Hire Me - Direct Call */}
            <a
              href="tel:+918332056552"
              className="btn sweep-btn secondary-btn"
            >
              📞 Hire Me
            </a>

            {/* Get In Touch - Scroll to Contact */}
            <a
              href="#contact"
              className="btn sweep-btn outline-btn"
            >
              GET IN TOUCH
            </a>

          </div>

          {/* ======================
             SOCIAL MEDIA
          ====================== */}

          <div className="hero-socials">

            {/* WhatsApp */}
            <a
              href="https://wa.me/918332056552"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sravanthi_9875?igsh=MXBoMDk5ZGNoem01bg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            {/* Email */}
            <a
              href="mailto:spinnamsetty@gmail.com"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* ======================
           RIGHT SIDE IMAGE
        ====================== */}

        <div className="hero-right">

          {/* Moving Glow Behind Image */}
          <div className="image-glow"></div>

          <motion.img
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1770959667/WhatsApp_Image_2026-02-13_at_10.43.59_ibztnk.jpg"
            alt="Designer"
            className="hero-img"
          />

        </div>

      </div>

    </section>
  );
};

export default Home;