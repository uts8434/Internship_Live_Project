"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";
function Feed({ profileImage, username, postTime, description, postImage }) {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  const handleUpvote = () => {
    if (upvoted) {
      setUpvotes((prev) => prev - 1);
      setUpvoted(false);
    } else {
      setUpvotes((prev) => prev + 1);
      if (downvoted) {
        setDownvoted(false);
        setDownvotes((prev) => prev - 1);
      }
      setUpvoted(true);
    }
  };

  const handleDownvote = () => {
    if (downvoted) {
      setDownvotes((prev) => prev - 1);
      setDownvoted(false);
    } else {
      setDownvotes((prev) => prev + 1);
      if (upvoted) {
        setUpvoted(false);
        setUpvotes((prev) => prev - 1);
      }
      setDownvoted(true);
    }
  };

  return (
    <div className="border mb-3 rounded-3 p-3 body_bg shadow-sm">
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
          <p className="text-white mb-0" style={{ fontSize: "12px" }}>
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
            upvoted ? "text-primary" : "text-secondary"
          }`}
          style={{ cursor: "pointer" }}
          onClick={handleUpvote}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>Upvote</span>
          <span className="fw-bold">{upvotes}</span>
        </div>

        <div
          className={`d-flex align-items-center gap-2 ${
            downvoted ? "text-danger" : "text-secondary"
          }`}
          style={{ cursor: "pointer" }}
          onClick={handleDownvote}
        >
          <FontAwesomeIcon icon={faThumbsDown} />
          <span>Downvote</span>
          <span className="fw-bold">{downvotes}</span>
        </div>

        <div className="d-flex align-items-center gap-2 text-secondary">
          <FontAwesomeIcon icon={faShare} />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}

export default Feed;
