import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaCrown, FaChair, FaLightbulb, FaLeaf, FaBuilding, FaGlassCheers } from "react-icons/fa";
import "./LineAnimations.css"; // Custom CSS

const LineAnimations = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="menu-page container py-5  mt-5">
      {/* Title */}
      <motion.h1
        className="text-center mb-5 title decor-menu"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Signature <span className="highlight">Decor Menu</span>
      </motion.h1>

      <div className="row g-4">
        {/* Luxury Weddings */}
        <div className="col-md-6 col-lg-4">
          <motion.div
            className="menu-card"
            style={{ background: "linear-gradient(135deg, #f7d9e3, #807c7eff)" }}
            data-aos="zoom-in-up"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <div className="icon"><FaCrown /></div>
            <h4>Royal Wedding Themes</h4>
            <p>
              Experience fairy-tale weddings with majestic stage setups, 
              golden drapes, floral chandeliers, and regal backdrops crafted for royalty.
            </p>
          </motion.div>
        </div>

        {/* Modern Interiors */}
        <div className="col-md-6 col-lg-4">
          <motion.div
            className="menu-card"
            style={{ background: "linear-gradient(135deg, #c8e7f5, #6fbd9fff)" }}
            data-aos="fade-up-right"
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon"><FaChair /></div>
            <h4>Luxury Interiors</h4>
            <p>
              Transform your living spaces with bespoke furniture, 
              mood lighting, and textures that blend modern elegance with comfort.
            </p>
          </motion.div>
        </div>

        {/* Lighting Magic */}
        <div className="col-md-6 col-lg-4">
          <motion.div
            className="menu-card"
            style={{ background: "linear-gradient(135deg, #fff4c1, #bfc161ff)" }}
            data-aos="fade-up-left"
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon"><FaLightbulb /></div>
            <h4>Lighting Elegance</h4>
            <p>
              Add brilliance with fairy lights, chandeliers, neon décor, 
              and intelligent LED setups that create unforgettable moods.
            </p>
          </motion.div>
        </div>

        {/* Eco-Friendly Designs */}
        <div className="col-md-6 col-lg-4">
          <motion.div
            className="menu-card"
            style={{ background: "linear-gradient(135deg, #b4f1c5, #e2c09aff)" }}
            data-aos="flip-left"
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon"><FaLeaf /></div>
            <h4>Eco Luxe Décor</h4>
            <p>
              Celebrate sustainably with natural floral designs, 
              bamboo artistry, and eco-conscious decorative innovations.
            </p>
          </motion.div>
        </div>

        {/* Corporate & Events */}
        <div className="col-md-6 col-lg-4">
          <motion.div
            className="menu-card"
            style={{ background: "linear-gradient(135deg, #e6d9ff, #a6a77aff)" }}
            data-aos="flip-right"
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon"><FaBuilding /></div>
            <h4>Corporate Grandeur</h4>
            <p>
              From product launches to gala nights, we deliver 
              sharp, stylish, and brand-focused décor that impresses every guest.
            </p>
          </motion.div>
        </div>

        {/* Parties & Celebrations */}
        <div className="col-md-6 col-lg-4">
          <motion.div
            className="menu-card"
            style={{ background: "linear-gradient(135deg, #ffcfdf, #ac6a6cff)" }}
            data-aos="zoom-in"
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon"><FaGlassCheers /></div>
            <h4>Celebration Specials</h4>
            <p>
              Whether birthdays, anniversaries, or festive vibes, 
              our décor blends fun, style, and unforgettable joy.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LineAnimations;
