import React from "react";
import { Person, Search, Chat, Notifications } from "@material-ui/icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">The Social App</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>

          <img
            src="/assets/person/1.jpg"
            alt=""
            className="topbarProfilePicture"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
