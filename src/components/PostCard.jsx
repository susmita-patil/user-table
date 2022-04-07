import React from "react";
import "../Styles/PostCard.css";

const PostCard = ({ post }) => {
  const { userId, id, title, body } = post;

  return (
    <div className="postcard">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};
export default PostCard;
