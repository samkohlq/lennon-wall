import PropTypes from "prop-types";
import React from "react";
import { ListGroup } from "react-bootstrap";

const Post = ({ value }) => <ListGroup.Item>{value}</ListGroup.Item>;

Post.propTypes = {
  value: PropTypes.string.isRequired
};

export default Post;
