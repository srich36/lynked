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

export { createPost };
