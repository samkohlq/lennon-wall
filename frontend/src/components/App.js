import React from "react";
import AddPost from "../containers/AddPost";
import PostsListContainer from "../containers/PostsListContainer";

const App = ({ match: { params } }) => {
  console.log({ params });
  return (
    <div>
      <h1>Wall name</h1>
      <AddPost />
      <PostsListContainer wallName={params.wallName} />
    </div>
  );
};

export default App;
