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

export { logJSONResponse, setAuthCredentials, logErrorResponse };
