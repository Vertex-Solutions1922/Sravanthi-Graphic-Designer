import { motion, useScroll, useTransform } from "framer-motion";
import "./About.css";

const About = () => {

  const { scrollYProgress } = useScroll();
  const scaleSection = useTransform(scrollYProgress, [0.2, 0.6], [0.95, 1]);

  return (
    <motion.section 
      className="about-section snap-section"
      style={{ scale: scaleSection }}
      id="about"
    >

      {/* Fade Mask Top */}
      <div className="about-fade-mask" />

      {/* Decorative Glow Circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="about-glow-circle"
      />

      <div className="about-container">

        {/* LEFT IMAGE */}
        <motion.div
          className="about-image-wrapper"
        >
          <motion.img
            layoutId="shared-image"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1770959675/WhatsApp_Image_2026-02-13_at_10.42.04_ixzele.jpg"
            alt="About Designer"
            className="about-image"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="about-right">

          <motion.h2
            layoutId="shared-name"
            className="about-title"
          >
            About Me
          </motion.h2>

          <motion.p layoutId="shared-desc">
            I’m a Graphic Designer focused on creating designs that don’t just
            look attractive — they communicate, persuade, and convert.
          </motion.p>

          <p className="highlight-line">
            Design is not decoration. It’s strategy.
          </p>

          <p>
            Every brand needs visuals that capture attention in seconds,
            build trust instantly, and communicate value clearly.
          </p>

          <p>
            I specialize in branding, social media creatives,
            marketing materials, and digital assets that help businesses grow.
          </p>

          <div className="philosophy-box">
            <p>Clarity beats complexity</p>
            <p>Strategy beats decoration</p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">Brand Identity Design</div>
            <div className="skill-card">Logo Creation</div>
            <div className="skill-card">Social Media Graphics</div>
            <div className="skill-card">YouTube Thumbnails</div>
            <div className="skill-card">Print Materials</div>
            <div className="skill-card">Portfolio & Resume Design</div>
          </div>

          <div className="process-steps">
            <div className="step">1️⃣ Understand the brand</div>
            <div className="step">2️⃣ Research competitors</div>
            <div className="step">3️⃣ Create concept drafts</div>
            <div className="step">4️⃣ Refine with feedback</div>
            <div className="step">5️⃣ Deliver final assets</div>
          </div>

        </div>

      </div>

    </motion.section>
  );
};

export default About;