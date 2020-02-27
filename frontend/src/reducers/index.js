const initialState = {
  isFetching: false,
  posts: []
};

function posts(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ADD_POST":
      return {
        ...state,
        isFetching: true
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
            WallId: action.postAdded.WallId
          }
        ]
      };
    case "REQUEST_POSTS":
      return {
        ...state,
        isFetching: true
      };
    case "RECEIVE_POSTS":
      return {
        ...state,
        isFetching: false,
        posts: action.posts
      };
    case "REQUEST_WALL_ID":
      return {
        ...state,
        isFetching: true
      };
    case "RECEIVE_WALL_ID":
      return {
        ...state,
        isFetching: false,
        WallId: action.id
      };
    default:
      return state;
  }
}

export default posts;
