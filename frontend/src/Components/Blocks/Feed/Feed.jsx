import React from "react";
import Share from "../Share/Share";
import "./Feed.css";

const Feed = () => {
  return (
    <>
      <div className="feedContainer">
        <div className="feedWrapper">
          <Share />
        </div>
      </div>
    </>
  );
};

export default Feed;
