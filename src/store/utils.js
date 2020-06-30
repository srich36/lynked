const logJSONResponse = res => {
  if (process.env.NODE_ENV === "development") {
    console.log(res);
  }
};

const logErrorResponse = err => {
  if (process.env.NODE_ENV === "development") {
    console.error(err);
  }
};

const setAuthCredentials = (key, username) => {
  localStorage.setItem("key", key);
  localStorage.setItem("username", username);
};

const findPostById = (posts, postId) => {
  const post = posts.find(post => post.id === postId);
  return post;
};

export { logJSONResponse, setAuthCredentials, logErrorResponse, findPostById };
