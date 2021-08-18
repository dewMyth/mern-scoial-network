import React from "react";

import "./Profile.css";

import NavBar from "../../Blocks/NavBar/NavBar";
import Feed from "../../Blocks/Feed/Feed";
import LeftBar from "../../Blocks/LeftBar/LeftBar";
import RightBar from "../../Blocks/RightBar/RightBar";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/post/1.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/person/2.png"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Dewmith Akalanka</h4>
              <span className="profileInfoDesc">Final Year Undergraduate</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
