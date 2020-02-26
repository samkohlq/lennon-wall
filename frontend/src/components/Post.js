import PropTypes from "prop-types";
import React from "react";

const Post = ({ value }) => <li>{value}</li>;

Post.propTypes = {
  value: PropTypes.string.isRequired
};

export default Post;
