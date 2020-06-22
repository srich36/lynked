import instance from "src/main";

const createPost = async (link, title, description, tags) => {
  const params = {
    link: link,
    title: title,
    description: description,
    tags: tags
  };

  let data = instance.post("/posts", params);
  return data;
};

const login = async (username, password) => {
  const params = {
    username,
    password
  };

  let data = instance.post("/users/auth/login/", params);
  return data;
};

const registerUser = async (username, email, password1, password2) => {
  const params = {
    username,
    email,
    password1,
    password2
  };

  let data = await instance.post("/users/auth/registration/", params);
  return data;
};

export { createPost, login, registerUser };
