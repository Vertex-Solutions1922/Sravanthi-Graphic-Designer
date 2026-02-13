import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-section snap-section" id="services">

      {/* SECTION HEADER */}
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>SERVICES</h2>
        <h3>What I Offer</h3>
        <p>
          I provide strategic graphic design solutions that help businesses
          look professional, build trust, and attract customers.
        </p>
        <p className="highlight-line">
          Design is not just about visuals. It’s about perception.
          And perception drives sales.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="services-grid">

        <ServiceCard
          number="1️⃣"
          title="Brand Identity & Logo Design"
          content={[
            "Custom Logo Design (No templates)",
            "Color Palette Selection",
            "Typography Selection",
            "Business Card Design",
            "Brand Style Guide"
          ]}
          example={[
            "A professional logo can make a startup look like a 5-year-old company.",
            "Consistent branding increases customer trust instantly."
          ]}
        />

        <ServiceCard
          number="2️⃣"
          title="Social Media Design"
          content={[
            "Instagram Posts & Carousels",
            "YouTube Thumbnails",
            "LinkedIn Banners",
            "Facebook Ad Creatives",
            "Story Designs"
          ]}
          example={[
            "A well-designed thumbnail increases YouTube CTR.",
            "Consistent Instagram branding boosts engagement."
          ]}
        />

        <ServiceCard
          number="3️⃣"
          title="Marketing & Print Design"
          content={[
            "Posters & Flyers",
            "Brochures",
            "Event Banners",
            "Product Packaging",
            "Business Profiles"
          ]}
          example={[
            "Printed material represents your brand physically.",
            "If it looks cheap, your business looks cheap."
          ]}
        />

        <ServiceCard
          number="4️⃣"
          title="Portfolio & Resume Design"
          content={[
            "ATS-Friendly Resume Design",
            "Creative Resume Design",
            "Portfolio Website Layout Design",
            "PDF Portfolio Design"
          ]}
          example={[
            "Better first impression.",
            "Increased interview chances."
          ]}
        />

        <ServiceCard
          number="5️⃣"
          title="Custom Design Projects"
          content={[
            "Website Graphics",
            "UI Elements",
            "E-book Covers",
            "Presentation Designs",
            "Custom Client Requirements"
          ]}
          example={[
            "If it needs design, I can create it.",
            "Tailored solutions for unique needs."
          ]}
        />

      </div>

      {/* PROCESS SECTION */}
      <div className="process-section">
        <h3>🛠 My Work Process</h3>
        <div className="process-steps">
          <div>Understand your business</div>
          <div>Study your target audience</div>
          <div>Research competitors</div>
          <div>Create concept drafts</div>
          <div>Refine & finalize</div>
        </div>
      </div>

      {/* WHY WORK WITH ME */}
      <div className="why-section">
        <h3>📌 Why Work With Me?</h3>
        <ul>
          <li>✔ 100% Custom Designs</li>
          <li>✔ Fast Turnaround</li>
          <li>✔ Clear Communication</li>
          <li>✔ Strategic Approach</li>
          <li>✔ Client-Focused Mindset</li>
        </ul>
      </div>

      {/* BRUTAL ADVICE */}
      <div className="brutal-box">
        <h4>⚠ Brutal Advice</h4>
        <p>
          If you copy designs from Pinterest, rely only on Canva templates,
          undersell pricing, or don’t show real samples —
          you won’t be taken seriously.
        </p>
        <p className="highlight-line">
          Position yourself as a solution provider — not a cheap designer.
        </p>
      </div>

    </section>
  );
};

/* ================================
   ADVANCED 3D TILT SERVICE CARD
================================ */

const ServiceCard = ({ number, title, content, example }) => {

  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 15 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 15 });

  const handleMouseMove = (e) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    rotateX.set((-mouseY / rect.height) * 10);
    rotateY.set((mouseX / rect.width) * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="service-card"
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="card-inner">
        <h4>{number} {title}</h4>

        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="example-box">
          {example.map((ex, i) => (
            <p key={i}>{ex}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;