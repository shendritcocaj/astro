import React from "react";
import "./Staff.css";
import Sdata from "../../utils/staff.json";
import Mdata from "../../utils/Members.json";
import Bdata from "../../utils/Board.json";
import Header from "../Header/Header";
import StaffHero from "../StaffHero/StaffHero";
import Footer from "../Footer/Footer";

const Staff = () => {
  return (
    <>
      <Header />
      <StaffHero />
      <div id="staff" className="staff-members-board">
        <div className=" staff-wrapper">
          <div className="width top-info">
            <h3 className="title">Staff </h3>
            <p className="staff-subtitle">
              A young, dedicated and curious group with more than 10 years of
              experience in the field of non-formal education in Kosovo, as well
              as internationally.
            </p>
          </div>

          <div className="width staff-card-wrapper">
            {Sdata.map((card, i) => (
              <div key={i} className="staff-card">
                <img className="staff-image" src={card.image} alt="" />
                <p className="card-info name">{card.name}</p>
                <p className="card-info role">{card.role}</p>
                <p className="card-info email">{card.email}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="members">
          <div className=" members-wrapper">
            <div className="width top-info">
              <h3 className="title">Members</h3>
              <p className="staff-subtitle">
                Without them we wouldn't be here! We have completed incredible
                projects together while learning from each other at the same
                time.
              </p>
            </div>

            <div className="width staff-card-wrapper">
              {Mdata.map((card, i) => (
                <div key={i} className="staff-card">
                  <img className="staff-image" src={card.image} alt="" />
                  <p className="card-info name">{card.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="board">
          <div className=" board-wrapper">
            <div className="width top-info">
              <h3 className="title">Board</h3>
              <p className="staff-subtitle">
                Friends who believe in what we do and who are an integral part
                of the organization. Their guidance and support are vital to the
                organization.
              </p>
            </div>

            <div className="width staff-card-wrapper">
              {Bdata.map((card, i) => (
                <div key={i} className="staff-card">
                  <img className="staff-image" src={card.image} alt="" />
                  <p className="card-info name">{card.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Staff;
