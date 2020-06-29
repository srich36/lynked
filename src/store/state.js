import { pagination } from "src/config";

const state = {
  user: null,
  postPage: 1,
  posts: [],
  postReturnedCount: pagination.defaultNumberOfPosts
};

export default state;
