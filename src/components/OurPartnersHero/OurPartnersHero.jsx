import React from "react";
import "../StaffHero/StaffHero.css";

import { motion } from "framer-motion";

const StaffHero = () => {
  return (
    <div className="staff-hero-main">
      <div className="staff-hero-overlay"></div>

      <div className="staff-hero-hero-title">
        <motion.h1
          initial={{ y: "-5rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 4, type: "spring" }}
          className="staff-hero-hero-title-top"
        >
          PARTNERS - AWARDS
        </motion.h1>
      </div>
    </div>
  );
};

export default StaffHero;
