import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addPost } from "../actions/addPost";
import "./AddPost.css";

let input;

class AddPost extends React.Component {
  handleKeyPress = (target) => {
    if (target.charCode === 13) {
      target.preventDefault();
      this.props.dispatch(
        addPost(input.value, this.props.username, this.props.wallName)
      );
      input.value = "";
    }
  };

  render() {
    return (
      <Form>
        <input
          className="add-post"
          type="text"
          onKeyPress={this.handleKeyPress}
          ref={(node) => {
            input = node;
          }}
        ></input>
      </Form>
    );
  }
}

// reads posts from state
const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps)(AddPost);
