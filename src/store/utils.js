const logJSONResponse = res => {
  if (process.env.NODE_ENV === "development") {
    console.log(res);
  }
};

const setAuthCredentials = (key, username) => {
  localStorage.setItem("key", key);
  localStorage.setItem("username", username);
};

export { logJSONResponse, setAuthCredentials };
