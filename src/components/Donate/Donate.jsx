import React from "react";
import "./Donate.css";
import Header from "../Header/Header";

const Donate = () => {
  return (
    <>
      <Header />
      <div id="Donate" className=" donate">
        <div className="width ">
          <h3 className="title">Donate </h3>
          <p className="staff-subtitle">
            A young, dedicated and curious group with more than 10 years of
            experience in the field of non-formal education in Kosovo, as well
            as internationally.
          </p>
        </div>
        <div className="donate-info">
          <p className=" title club">Astroclub</p>
          <p className="subtitle bank-account">
            <span>Raifaizen Bank</span> 892374-902347-09234
          </p>
          <p className="subtitle bank-account">
            <span>Pro Credit Bank</span> 892374-902347-09234
          </p>
          <p className="subtitle bank-account">
            <span>Teb Bank</span> 892374-902347-09234
          </p>
        </div>
      </div>
    </>
  );
};

export default Donate;
