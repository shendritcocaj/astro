import React from "react";
import "swiper/css";
import "./SpecialEvents.css";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSetings } from "../../utils/common";

const SpecialEvents = () => {
  return (
    <section id="SpecialEvents" className="e-wrapper">
      <div className="width e-container">
        <div className=" events-title">Events</div>

        <Swiper {...sliderSetings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="e-card">
                <img className="event-image" src={card.image} alt="" />
                <p className="event-name">{card.name}</p>
                <p className="event-detail">{card.detail}</p>{" "}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SpecialEvents;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="e-buttons">
      <button className="button" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button className="button" onClick={() => swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
