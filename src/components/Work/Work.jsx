import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./Work.css";

const workData = [
  {
    id: 1,
    title: "Luxury Brand Logo Design",
    category: "Brand Identity",
    image:
      "https://res.cloudinary.com/dvknx0hpm/image/upload/v1770955016/IMG_20260212_173856_142_khm40i.jpg",
    description:
      "Premium logo crafted using strategic typography, brand psychology and modern identity structure."
  },
  {
    id: 2,
    title: "Creative Poster Layout",
    category: "Marketing Design",
    image:
      "https://res.cloudinary.com/dvknx0hpm/image/upload/v1770955009/IMG_20260212_161623_672_p2visc.jpg",
    description:
      "High-impact promotional poster designed with bold hierarchy and conversion-focused messaging."
  },
  {
    id: 3,
    title: "Modern Business Poster",
    category: "Marketing Design",
    image:
      "https://res.cloudinary.com/dvknx0hpm/image/upload/v1770955001/IMG_20260212_161459_882_bcvcup.jpg",
    description:
      "Professional poster layout structured for clarity, readability and strong brand recall."
  },
  {
    id: 4,
    title: "Brand Social Media Creative",
    category: "Social Media Design",
    image:
      "https://res.cloudinary.com/dvknx0hpm/image/upload/v1770954992/IMG_20260212_161459_881_airvzf.jpg",
    description:
      "Scroll-stopping social media design focused on engagement and visual storytelling."
  },
  {
    id: 5,
    title: "Business Promotional Creative",
    category: "Advertising Design",
    image:
      "https://res.cloudinary.com/dvknx0hpm/image/upload/v1770954985/IMG_20260212_161459_880_rlc0e3.jpg",
    description:
      "Strategic promotional artwork created to boost brand visibility and trust perception."
  },
  {
    id: 6,
    title: "Campaign Event Poster",
    category: "Campaign Creative",
    image:
      "https://res.cloudinary.com/dvknx0hpm/image/upload/v1770954980/IMG_20260212_161459_878_jkc5eh.jpg",
    description:
      "Event-focused creative designed with strong layout balance and marketing clarity."
  },
  {
    id: 7,
    title: "High-CTR YouTube Thumbnail",
    category: "YouTube Thumbnail Design",
    image:
      "https://res.cloudinary.com/dvknx0hpm/image/upload/v1770955851/WhatsApp_Image_2026-02-13_at_09.39.37_ksxtfm.jpg",
    description:
      "CTR-optimized thumbnail crafted with bold typography, facial expression focus and contrast strategy to increase clicks."
  }
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="work-section snap-section" id="work">

      {/* SECTION HEADER */}
      <motion.div
        className="work-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>PORTFOLIO</h2>
        <h3>Recent Work</h3>
        <p>
          Selected projects showcasing strategic design thinking,
          branding expertise and marketing-focused creativity.
        </p>
      </motion.div>

      {/* WORK GRID */}
      <div className="work-grid">
        {workData.map((item, index) => (
          <motion.div
            key={item.id}
            className="work-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
          >
            <div className="work-image-wrapper">
              <img src={item.image} alt={item.title} />

              <div className="work-overlay">
                <div className="overlay-content">
                  <span className="work-category">
                    {item.category}
                  </span>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  <button
                    className="view-btn"
                    onClick={() => setSelectedProject(item)}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content advanced-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
              />

              <div className="modal-info">
                <span className="modal-category">
                  {selectedProject.category}
                </span>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
              </div>

              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Work;