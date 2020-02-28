import PropTypes from "prop-types";
import React from "react";
import { ListGroup } from "react-bootstrap";

const Post = ({ value, username }) => (
  <ListGroup.Item>
    {username}: {value}
  </ListGroup.Item>
);

Post.propTypes = {
  value: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default Post;
