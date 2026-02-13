import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const testimonialData = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Digital Markerting",
    
    review:
      "Sravanthi transformed our brand identity completely. The logo and branding feel premium and established. Clients now take us seriously."
  },
  {
    id: 2,
    name: "Sasindra",
    role: "YouTube Creator",
    image:
      "https://res.cloudinary.com/dvknx0hpm/image/upload/v1764812630/WhatsApp_Image_2025-11-08_at_14.35.30_61df71a9_tqnpiu.jpg",
    review:
      "My YouTube thumbnails improved CTR noticeably. The designs are strategic, not random. She understands marketing psychology."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonial-section snap-section" id="testimonials">

      {/* Background Glow */}
      <div className="testimonial-glow"></div>

      {/* Header */}
      <motion.div
        className="testimonial-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>TESTIMONIALS</h2>
        <h3>What Clients Say</h3>
        <p>
          Real feedback from professionals who trusted my design strategy.
        </p>
      </motion.div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="testimonial-swiper"
      >
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              className="testimonial-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="client-info">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="review-text">
                "{item.review}"
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Testimonials;