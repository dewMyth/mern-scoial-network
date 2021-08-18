import React from "react";
import Online from "../Online/Onlne";
import "./RightBar.css";

const RightBar = () => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <Online />
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {/* {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )} */}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Battaramulla</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Colombo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              Single
              {/* {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"} */}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/person/2.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Dewmith Akalanka</span>
          </div>

          {/* {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))} */}
        </div>
      </>
    );
  };

  let user = false;

  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          {user ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    </>
  );
};

export default RightBar;
