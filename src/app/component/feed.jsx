"use  client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faCommentDots,
  faShare,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Feed({ profileImage, username, postTime, description, postImage }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {
      setLiked(!liked);
      setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    };

  return (
    <div className="border mb-3 rounded-3 p-3 bg-white shadow-sm">

      <div className="d-flex align-items-center mb-2">
        <img
          src={profileImage}
          className="rounded-circle me-2"
          width="40"
          height="40"
          alt="Profile"
        />
        <div>
          <b>{username}</b>
          <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
            {postTime} • 🌍 Public
          </p>
        </div>
      </div>

      <div className="mb-2">
        <p className="mb-2">{description}</p>
      </div>

      {postImage && (
        <div className="body">
          <img className="rounded-3 img-fluid" src={postImage} alt="Post" />
        </div>
      )}

      <div className="d-flex justify-content-around p-2 border-top mt-2">
        <div
          className={`d-flex align-items-center gap-2 ${
            liked ? "text-primary" : "text-secondary"
          }`}
          onClick={handleLike}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faThumbsUp} /> 
          <span>Like</span>
          <span className="fw-bold">{likeCount}</span>
        </div>
        <div className="d-flex align-items-center gap-2 text-secondary">
          <FontAwesomeIcon icon={faCommentDots} /> <span>Comment</span>
        </div>
        <div className="d-flex align-items-center gap-2 text-secondary">
          <FontAwesomeIcon icon={faShare} /> <span>Repost</span>
        </div>
        <div className="d-flex align-items-center gap-2 text-secondary">
          <FontAwesomeIcon icon={faPaperPlane} /> <span>Send</span>
        </div>
      </div>
    </div>
  );
}

export default Feed;
