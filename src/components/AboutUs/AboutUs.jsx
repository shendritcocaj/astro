import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="AboutUs" className=" about-us">
      <p className=" title title-about-us">About Us</p>
      <motion.div
        initial={{ x: "-5rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 4, type: "spring" }}
        className="width text-wrapper"
      >
        <div className="heading-about-us">
          ASTRONOMY CLUB OF KOSOVA also known in Albanian as KLUBI I ASTRONOMËVE
          TË KOSOVËS
        </div>
        <div className="about-us-text">
          Founded on the 20th of March in 2014 by a group of young passionate
          astronomy lovers that want to share their knowledge of science and
          astronomy to the people of Kosovo and the region. ACK, is the 1st
          science and astronomy club in Kosovo. Their aim is to simplify the
          beauty of astronomy by bringing the general audience together to
          observe the havens and the wonders of the Universe. Entitled Under One
          Sky, their initiative goes by the motto “Boundaries vanish when we
          look skyward”. It brings together people from different communities
          and age-groups to study the stories and science of the celestial
          bodies. The restoration of Prishtina’s Observatory has been one of
          their major projects in recent years. The Observatory was functional
          in the 80's and since then it was never used again. On July 2022 it
          was re-opened to the public after almost 43 years with the efforts of
          the ACK and the support of the Prishtina Municipality and the United
          Nations Mission in Kosovo which will serve as a Multi-Ethnic
          Scientific Hub for Children/Youth of Diverse Communities. NGO “ACK”
          has a leadership structure made up of 5-10 internal team members
          coming from diverse communities. ACK, is a legally registered NGO in
          the Ministry of Public Administration with a Public Benificiary
          Status.
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "5rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 4, type: "spring" }}
        className="width image-wrapper-about-us"
      >
        <img src="/whoAreWe.jpg" alt="" className="step-img-box" />
        <img src="/whoAreWe2.jpg" alt="" className="step-img-box" />
      </motion.div>
    </section>
  );
};

export default AboutUs;
