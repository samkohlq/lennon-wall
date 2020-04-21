import PropTypes from "prop-types";
import React from "react";
import "./Post.css";

const Post = ({ value, username }) => (
  <div className="post-bubble">
    <div className="post-bubble-user">{username}</div> {value}
  </div>
);

Post.propTypes = {
  value: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Post;
