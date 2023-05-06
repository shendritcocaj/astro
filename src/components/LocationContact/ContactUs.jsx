import React from "react";
import "./ContactUs.css";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const ContactUs = () => {
  return (
    <div id="LocationContact" className="contact-us">
      <p className="title title-contact">Contact Us</p>
      <div className="width contact-us-wrapper">
        {/* contact */}
        <div className="contact">
          <div className=" phone">
            <div className="info call">
              <MdCall size={25} color={"#00b503"} className="icon" />
              <span>Call: 044 702 270</span>
            </div>
            <div className="info chat">
              <HiChatBubbleBottomCenter
                color={"#048e06"}
                size={25}
                className="icon"
              />
              <span>Chat: 044 702 270</span>
            </div>
            <div className="info mail">
              <MdEmail size={25} color={"#048e06"} className="icon" />
              <span>
                {" "}
                <a href="mailto:astroclubkosova@gmail.com ">
                  <span className=" email">Email:</span>{" "}
                  <span>astroclubkosova@gmail.com</span>
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.710150751481!2d21.15846158832948!3d42.66119525055347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549fb532920b27%3A0x2c5e9b4de8e8dd8!2sAstronomy%20Club%20of%20Kosova%20%2F%20Prishtina%20Observatory!5e1!3m2!1sen!2s!4v1682798960535!5m2!1sen!2s"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
