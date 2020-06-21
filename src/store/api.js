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

export { createPost, login };
