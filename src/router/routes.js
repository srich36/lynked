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
    path: "/auth",
    name: "auth",
    component: () => import("src/components/views/Auth/Auth"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("src/components/views/Login/LoginPage")
      },
      {
        path: "signup",
        name: "signup",
        component: () => import("src/components/views/Signup/Signup")
      }
    ]
  }
];
