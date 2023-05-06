import React from "react";
import "./BestPartners.css";
import vData from "../../utils/autoSliderDonators.json";

const BestPartners = () => {
  return (
    <section className="best-partners">
      <p className="title donators">Donors</p>
      <div className="slider">
        {" "}
        <div className="slide-track">
          {vData.map((card, i) => (
            <div key={i} className=" slide">
              <img className="partners-logo" src={card.image} alt="partners" />
            </div>
          ))}{" "}
        </div>{" "}
      </div>
    </section>
  );
};

export default BestPartners;
