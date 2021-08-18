import React from "react";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

import "./LeftBar.css";

const LeftBar = () => {
  return (
    <>
      <div className="leftbarContainer">
        <div className="leftbarWrapper">
          <ul className="leftbarList">
            <li className="leftbarListItem">
              <RssFeed className="leftbarIcon" />
              <span className="leftbarListItemText">Feed</span>
            </li>
            <li className="leftbarListItem">
              <Chat className="leftbarIcon" />
              <span className="leftbarListItemText">Chats</span>
            </li>
            <li className="leftbarListItem">
              <PlayCircleFilledOutlined className="leftbarIcon" />
              <span className="leftbarListItemText">Videos</span>
            </li>
            <li className="leftbarListItem">
              <Group className="leftbarIcon" />
              <span className="leftbarListItemText">Groups</span>
            </li>
            <li className="leftbarListItem">
              <Bookmark className="leftbarIcon" />
              <span className="leftbarListItemText">Bookmarks</span>
            </li>
            <li className="leftbarListItem">
              <HelpOutline className="leftbarIcon" />
              <span className="leftbarListItemText">Questions</span>
            </li>
            <li className="leftbarListItem">
              <WorkOutline className="leftbarIcon" />
              <span className="leftbarListItemText">Jobs</span>
            </li>
            <li className="leftbarListItem">
              <Event className="leftbarIcon" />
              <span className="leftbarListItemText">Events</span>
            </li>
            <li className="leftbarListItem">
              <School className="leftbarIcon" />
              <span className="leftbarListItemText">Courses</span>
            </li>
          </ul>
          <button className="leftbarButton">Show More</button>
          <hr className="leftbarHr" />
          <ul className="leftbarFriendList">
            <li className="leftbarFriend">
              <img
                src="/assets/person/1.jpg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">Dewmith Akalanka</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/1.jpg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">Dewmith Akalanka</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/1.jpg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">Dewmith Akalanka</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/1.jpg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">Dewmith Akalanka</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/1.jpg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">Dewmith Akalanka</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
