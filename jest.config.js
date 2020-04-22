module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  // ...
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1"
  }
};
