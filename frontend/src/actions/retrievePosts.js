export const requestPosts = wallName => ({
  type: "REQUEST_POSTS",
  wallName
});

export const receivePosts = posts => ({
  type: "RECEIVE_POSTS",
  posts
});

// export const retrievePosts = wallName => {
//   return dispatch => {
//     dispatch(requestPosts(wallName));
//     // if there's a wall of this wallName, retrieve all posts from that wall
//     return fetch("http://localhost:4000/posts/retrieve")
//       .then(response => {
//         response.json();
//       })
//       .then(json => {
//         dispatch(receivePosts(json));
//       });
//     // otherwise create a new wall
//   };
// };

export const retrievePosts = wallName => {
  return dispatch => {
    dispatch(requestPosts(wallName));
    return (
      fetch("http://localhost:4000/posts/retrieve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          wallName
        })
      })
        // only runs when promise returned by fetch is successful
        // pulls out body of json and converts it to json
        .then(response => {
          return response.json();
        })
        .then(json => {
          return dispatch(receivePosts(json));
        })
    );
  };
};
