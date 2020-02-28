import PropTypes from "prop-types";
import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import Post from "./Post";

class PostsList extends React.Component {
  // retrieve data when component has mounted
  componentDidMount() {
    this.props.retrievePosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <Container>
        <ListGroup variant="flush">
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </ListGroup>
      </Container>
    );
  }
}

// validations
PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default PostsList;
