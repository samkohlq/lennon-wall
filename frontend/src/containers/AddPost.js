import React from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addPost } from "../actions/addPost";

const AddPost = ({ dispatch }) => {
  let newPost;
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!newPost.value.trim()) {
            return;
          }
          dispatch(addPost(newPost.value));
          newPost.value = "";
        }}
      >
        <input
          ref={node => {
            newPost = node;
          }}
        />
        {/* calls onSubmit function in form component */}
        <Button type="submit">Add Post</Button>
      </Form>
    </div>
  );
};

export default connect()(AddPost);
