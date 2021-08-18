import React, { useState, useEffect } from "react";
import "./Post.css";

import { MoreVert } from "@material-ui/icons";

const Post = (props) => {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setLike(10);
  }, []);

  const onLikeClick = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src="/assets/person/1.jpg"
                width="100px"
                alt=""
                srcset=""
              />
              <span className="postUsername">Shakila Nishadini</span>
              <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">First post of Shaki</span>
            <img className="postImg" src={props.img} alt="" srcset="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src="/assets/like.png"
                alt=""
                onClick={onLikeClick}
              />
              <img
                className="likeIcon"
                src="/assets/heart.png"
                alt=""
                onClick={onLikeClick}
              />
              <span className="postLikeCounter">{like} people like this</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">9 comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
