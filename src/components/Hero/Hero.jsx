import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import ContactUs from "../LocationContact/ContactUs";
import BestPartners from "../PartnersTop/BestPartners";
import SpecialEvents from "../SpecialEvents/SpecialEvents";
import VideoEvents from "../VideoEvents/VideoEvents";
import Questions from "../Questions/Questions";
import FlashCards from "../FalshCards/Flashcards";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <>
      <Header />
      <div id="Home" className="main">
        <div className="overlay"></div>

        <div className="hero-title">
          <motion.h1
            initial={{ y: "-5rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            className="hero-title-top"
          >
            Astronomy Club
            <br />
            of Kosova
          </motion.h1>
          <motion.p
            initial={{ y: "5rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            className="subtitle"
          >
            “Boundaries vanish when we look skyward”
          </motion.p>
          <div className="stats">
            {" "}
            <motion.div
              initial={{ y: "5rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 4, type: "spring" }}
              className="stat"
            >
              <span>
                <CountUp start={20} end={200} duration={4} />
                <span className="plus"> +</span>
              </span>
              <span className="hero-partners">Members</span>
            </motion.div>
            <motion.div
              initial={{ y: "5rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 4, type: "spring" }}
              className="stat"
            >
              <span>
                <CountUp start={10} end={50} duration={4} />
                <span className="plus"> +</span>
              </span>
              <span className="hero-partners">Awards</span>
            </motion.div>
            <motion.div
              initial={{ y: "5rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 4, type: "spring" }}
              className="stat"
            >
              <span>
                <CountUp start={30} end={150} duration={4} />
                <span className="plus"> +</span>
              </span>
              <span className="hero-partners">Partners</span>
            </motion.div>
          </div>
        </div>
      </div>
      <BestPartners />
      <AboutUs />
      <Questions />
      <SpecialEvents />
      <FlashCards />
      <VideoEvents />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Hero;
