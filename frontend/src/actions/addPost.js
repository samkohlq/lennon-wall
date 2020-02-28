export const requestAddPost = (value, username, wallName) => ({
  type: "REQUEST_ADD_POST",
  value,
  username,
  wallName
});

export const receiveAddPostSuccess = postAdded => ({
  type: "RECEIVE_ADD_POST_SUCCESS",
  postAdded
});

export const addPost = (value, username, wallName) => {
  return dispatch => {
    dispatch(requestAddPost(value, username, wallName));
    return (
      fetch("http://localhost:4000/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          value,
          username,
          wallName
        })
      })
        // only runs when promise returned by fetch is successful
        // pulls out body of json and converts it to json
        .then(response => {
          return response.json();
        })
        // takes in value of new todo and dispatches receiveAddPostSuccess action
        .then(postAdded => {
          return dispatch(receiveAddPostSuccess(postAdded));
        })
    );
  };
};
