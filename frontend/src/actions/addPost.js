export const requestAddPost = (value, wallName) => ({
  type: "REQUEST_ADD_POST",
  value,
  wallName
});

export const receiveAddPostSuccess = postAdded => ({
  type: "RECEIVE_ADD_POST_SUCCESS",
  postAdded
});

export const addPost = (value, wallName) => {
  return dispatch => {
    console.log(wallName);
    dispatch(requestAddPost(value, wallName));
    return (
      fetch("http://localhost:4000/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          value,
          wallName
        })
      })
        // only runs when promise returned by fetch is successful
        // pulls out body of json and converts it to json
        .then(response => {
          return response.json();
        })
        // takes in value of new todo and dispatches receiveAddPostSuccess action
        .then(json => {
          return dispatch(receiveAddPostSuccess(json));
        })
    );
  };
};
