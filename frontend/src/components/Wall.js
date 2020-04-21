import React from "react";
import { Container } from "react-bootstrap";
import AddPost from "../containers/AddPost";
import PostsListContainer from "../containers/PostsListContainer";

class Wall extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="my-5">{this.props.wallName}</h1>
        <PostsListContainer wallName={this.props.wallName} />
        <AddPost wallName={this.props.wallName} />
      </Container>
    );
  }
}

export default Wall;
