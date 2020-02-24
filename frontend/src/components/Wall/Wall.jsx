import React from "react";
import { Container, Row } from "react-bootstrap";
import Post from "../Post/Post";
class Wall extends React.Component {
  render() {
    return (
      <Container>
        <Row className="mt-5">
          <h1>Wall name</h1>
        </Row>
        <Row>
          <Post />
        </Row>
      </Container>
    );
  }
}

export default Wall;
