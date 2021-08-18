import React from "react";
import Online from "../Online/Onlne";
import "./RightBar.css";

const RightBar = () => {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img
              className="birthdayImg"
              src="/assets/gift.png"
              alt=""
              srcset=""
            />
            <span className="birthdayText">
              <b>Dewmith Akalanka</b> and <b>3 other friends</b> have birthdays
              today.
            </span>
          </div>

          <img className="rightbarAd" src="/assets/ad.png" alt="" />
          <Online />
        </div>
      </div>
    </>
  );
};

export default RightBar;
