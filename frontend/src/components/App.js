import React from "react";
import AddPost from "../containers/AddPost";
import PostsListContainer from "../containers/PostsListContainer";

const App = ({ match: { params } }) => {
  return (
    <div>
      <h1>{params.wallName}</h1>
      <AddPost wallName={params.wallName} />
      <PostsListContainer wallName={params.wallName} />
    </div>
  );
};

export default App;
