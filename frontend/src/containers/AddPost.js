import React from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addPost } from "../actions/addPost";

const AddPost = ({ dispatch, wallName }) => {
  let input;
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addPost(input.value, wallName));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        {/* calls onSubmit function in form component */}
        <Button type="submit">Add Post</Button>
      </Form>
    </div>
  );
};

export default connect()(AddPost);
