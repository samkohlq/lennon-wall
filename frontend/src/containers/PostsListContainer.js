import { connect } from "react-redux";
import { addPost } from "../actions/addPost";
import { retrievePosts } from "../actions/retrievePosts";
import { saveUsername } from "../actions/saveUsername";
import PostsList from "../components/PostsList";

// reads posts from state
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

// dispatches actions to the store
// sends new object to store
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPost: value => {
      // dispatch addPost action
      dispatch(addPost(value, ownProps.wallName));
    },
    saveUsername: state => {
      dispatch(saveUsername(state.username));
    },
    retrievePosts: () => {
      // dispatch retrievePosts action
      dispatch(retrievePosts(ownProps.wallName));
    }
    // retrieveWallId: () => {
    //   // dispatch retrieveWallId action
    //   dispatch(retrieveWallId(ownProps.wallName));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
