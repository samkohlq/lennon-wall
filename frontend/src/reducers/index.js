const initialState = {
  isFetching: false,
  posts: [],
  username: null,
};

function posts(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ADD_POST":
      return {
        ...state,
        isFetching: true,
      };
    case "RECEIVE_ADD_POST_SUCCESS":
      return {
        ...state,
        isFetching: false,
        posts: [
          ...state.posts,
          {
            id: action.postAdded.id,
            value: action.postAdded.value,
            username: action.postAdded.username,
            WallId: action.postAdded.WallId,
          },
        ],
      };
    case "SAVE_USERNAME":
      return {
        ...state,
        username: action.username,
      };
    case "REQUEST_POSTS":
      return {
        ...state,
        isFetching: true,
      };
    case "RECEIVE_POSTS":
      return {
        ...state,
        isFetching: false,
        posts: action.posts,
      };
    default:
      return state;
  }
}

export default posts;
