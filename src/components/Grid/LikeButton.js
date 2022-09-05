import React from "react";

function LikeButton({ liked }) {
  return (
    <button
      className={`grid__card--btn ${liked ? "liked" : "unliked"}`}></button>
  );
}

export default LikeButton;
