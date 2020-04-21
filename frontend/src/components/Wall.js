import React from "react";
import AddPost from "../containers/AddPost";
import PostsListContainer from "../containers/PostsListContainer";

class Wall extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.wallName}</h1>
        <PostsListContainer wallName={this.props.wallName} />
        <AddPost wallName={this.props.wallName} />
      </div>
    );
  }
}

export default Wall;
