import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import video from "../../assets/nebula-25047.mp4";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import ContactUs from "../LocationContact/ContactUs";
import BestPartners from "../PartnersTop/BestPartners";
import SpecialEvents from "../SpecialEvents/SpecialEvents";
import VideoEvents from "../VideoEvents/VideoEvents";
import Questions from "../Questions/Questions";
import FlashCards from "../FalshCards/Flashcards";

const Hero = () => {
  return (
    <>
      <Header />
      <div id="Home" className="main">
        <div className="overlay"></div>
        {/* <video src={video} autoPlay loop muted></video> */}
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
