import React from "react";
import "./VideoEvents.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper/css";
import data from "../../utils/sliderVideo.json";
import { sliderSetingsVideo } from "../../utils/common";

const VideoEvents = () => {
  return (
    <div className="video-events" id="video-events">
      <Swiper {...sliderSetingsVideo}>
        <SliderButtons />
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="video-wrappper">
              <video className="width video1" controls>
                <source src={card.video} type="" />
              </video>
              <p className="video-event-name">{card.name}</p>
              <p className="event-detail">{card.detail}</p>{" "}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoEvents;

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
