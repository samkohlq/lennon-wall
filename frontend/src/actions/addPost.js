export const requestAddPost = value => ({
  type: "REQUEST_ADD_POST",
  value
});

export const receiveAddPostSuccess = postAdded => ({
  type: "RECEIVE_ADD_POST_SUCCESS",
  postAdded
});

export const addPost = (value, wallId) => {
  return dispatch => {
    dispatch(requestAddPost(value, wallId));
    return (
      fetch("http://localhost:4000/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          value,
          wallId
        })
      })
        // only runs when promise returned by fetch is successful
        // pulls out body of json and converts it to json
        .then(response => {
          console.log(response);
          return response.json();
        })
        // takes in value of new todo and dispatches receiveAddPostSuccess action
        .then(json => {
          console.log(json);
          return dispatch(receiveAddPostSuccess(json));
        })
    );
  };
};
