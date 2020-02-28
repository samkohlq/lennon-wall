import React from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addPost } from "../actions/addPost";

const AddPost = ({ dispatch, username, wallName }) => {
  let input;
  return (
    <div className="my-5">
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addPost(input.value, username, wallName));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        {/* calls onSubmit function in form component */}
        <Button className="m-1" type="submit" size="sm">
          Add Post
        </Button>
      </Form>
    </div>
  );
};

// reads posts from state
const mapStateToProps = state => {
  return {
    username: state.username
  };
};

export default connect(mapStateToProps)(AddPost);
