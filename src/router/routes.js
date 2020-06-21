export default [
  {
    path: "/",
    name: "home",
    component: () => import("src/components/views/Home/HomeContainer")
  },
  {
    path: "/post",
    name: "createPost",
    component: () =>
      import("src/components/views/CreatePost/CreatePostContainer")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("src/components/views/Login/LoginContainer")
  }
];
