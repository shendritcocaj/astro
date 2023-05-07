import React from "react";
import Adata from "../../utils/Awards.json";
import Pdata from "../../utils/Partners.json";
import Header from "../Header/Header";

const Staff = () => {
  return (
    <>
      <Header />

      <div id="partners" className="staff-members-board  partners-awards">
        <div className=" staff-wrapper">
          <div className="width top-info">
            <h3 className="title">Partners</h3>
            <p className="staff-subtitle">
              You see more and work better when you have more eyes and hands. We
              are thankful for the partnerships we have created through-out our
              journey.
            </p>
          </div>

          <div className="width staff-card-wrapper">
            {Pdata.map((card, i) => (
              <div key={i} className="staff-card">
                <img className="staff-image" src={card.image} alt="" />
                <p className="card-info name">{card.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="members">
          <div className=" members-wrapper">
            <div className="width top-info">
              <h3 className="title">AWARDS & RECOGNITIONS</h3>
              <p className="staff-subtitle">
                Great things, have small beginnings. Representing Kosovo
                world-wide.
              </p>
            </div>

            <div className="width staff-card-wrapper">
              {Adata.map((card, i) => (
                <div key={i} className="staff-card">
                  <img className="staff-image" src={card.image} alt="" />
                  <p className="card-info name">{card.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staff;
