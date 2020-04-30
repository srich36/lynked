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

const tagBoxMaxLengths = {
  search: 10,
  create: 5
};
export { createPostValidators, tagBoxMaxLengths };
