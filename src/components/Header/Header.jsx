import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState("");

  const navLinks = ["Home", "About", "Services", "Testimonials", "Contact"];

  /* =============================
     RANDOM QUOTES (20 TOTAL)
  ============================== */

  const quotes = [
    "Design is intelligence made visible.",
    "Good design is good business.",
    "Your brand is the story people tell about you.",
    "Clarity converts. Confusion repels.",
    "A strong logo builds instant credibility.",
    "Design is strategy, not decoration.",
    "Perception drives buying decisions.",
    "Visual hierarchy drives attention.",
    "Brand consistency builds trust.",
    "If it looks cheap, it feels cheap.",
    "Attention is currency in digital space.",
    "Great design increases perceived value.",
    "Your visuals speak before you do.",
    "People judge brands in seconds.",
    "Typography changes perception.",
    "Design influences emotion.",
    "Professional visuals build authority.",
    "Conversion starts with clarity.",
    "Strong branding reduces marketing effort.",
    "Your brand should look expensive."
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    setShowQuote(true);
  };

  /* =============================
     SCROLL BLUR EFFECT
  ============================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =============================
     ESC CLOSE MODAL
  ============================== */

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowQuote(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`header ${scrolled ? "header-scrolled" : ""}`}
      >
        <div className="header-container">

          {/* Logo */}
          <h1 className="logo">
            Sravanthi <span>Builds</span>
          </h1>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`nav-link ${active === link ? "active" : ""}`}
                onClick={() => setActive(link)}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-btn"
            onClick={generateQuote}
          >
            Get Design Quote
          </motion.button>

          {/* Mobile Icon */}
          <div className="mobile-menu-icon" onClick={() => setIsOpen(true)}>
            <FaBars />
          </div>

        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="drawer-header">
              <FaTimes onClick={() => setIsOpen(false)} />
            </div>

            <nav className="mobile-nav">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => {
                    setActive(link);
                    setIsOpen(false);
                  }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QUOTE MODAL */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            className="quote-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQuote(false)}
          >
            <motion.div
              className="quote-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaTimes
                className="quote-close"
                onClick={() => setShowQuote(false)}
              />
              <p>{currentQuote}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;