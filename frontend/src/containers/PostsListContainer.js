import { connect } from "react-redux";
import { addPost } from "../actions/addPost";
import { retrievePosts } from "../actions/retrievePosts";
import PostsList from "../components/PostsList";

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
      dispatch(addPost(value));
    },
    retrievePosts: () => {
      // dispatch retrievePosts action
      dispatch(retrievePosts(ownProps.wallName));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
