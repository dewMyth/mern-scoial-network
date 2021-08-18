import React from "react";
import Share from "../Share/Share";
import Post from "../Post/Post";
import "./Feed.css";

const Feed = () => {
  return (
    <>
      <div className="feedContainer">
        <div className="feedWrapper">
          <Share />
          <Post img="/assets/post/1.jpg" />
          <Post img="/assets/post/2.jpg" />
          <Post img="/assets/post/3.jpg" />
        </div>
      </div>
    </>
  );
};

export default Feed;
