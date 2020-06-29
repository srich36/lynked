const createPostValidators = {
  title: {
    required: true,
    maxLength: 200
  },
  link: {
    required: true,
    maxLength: 200
  },
  description: {
    required: false,
    maxLength: 500
  }
};

const signupValidators = {
  password1: {
    minLength: 8
  },
  password2: {
    minLength: 8
  }
};

const tagBoxMaxLengths = {
  search: 10,
  create: 5
};

const pagination = {
  postsPerPage: 20,
  visiblePageOptions: 10,
  defaultNumberOfPosts: 100
};

const upvoteVal = 1;
const downvoteVal = -1;
const neutralVoteVal = 0;
const unauthorizedStatusCode = 401;

export {
  createPostValidators,
  tagBoxMaxLengths,
  pagination,
  signupValidators,
  upvoteVal,
  downvoteVal,
  neutralVoteVal,
  unauthorizedStatusCode
};
