import React from "react";
import "./Footer.css";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-color">
      <div className=" footer">
        <div className="name-footer">Astronomy Club of Kosova</div>
        <div className="logo-footer">
          <img src="./acklogo.png" alt="" />
        </div>
        <div className="social-media-footer">
          <div>
            <a
              href="https://www.facebook.com/AstronomyClubKosova/"
              target="blank"
            >
              <BsFacebook className="media-icons facebook" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/astroclubkosova/" target="blank">
              <BsInstagram className="media-icons insta" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/ackosovo/" target="blank">
              <BsTwitter className="media-icons twitter" />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/@astroclubkosova" target="blank">
              <BsYoutube className="media-icons youtube" />
            </a>
          </div>
        </div>
      </div>
      <small>
        copyright <BiCopyright />: Astronomy Club of Kosova (2023)
      </small>
    </div>
  );
};

export default Footer;
