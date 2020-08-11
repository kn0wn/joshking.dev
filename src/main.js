import { createApp } from "vue";
// import { createRouter, createWebHistory } from "vue-router";

// import post from "./pages/posts/_post.vue";
// import home from "./pages/home.vue";

import App from "./App.vue";
import "./index.css";

// import blogs from "./assets/data/blogs.json";

// const router = createRouter({
//   history: createWebHistory(),
//   strict: true,
//   routes: [
//     { path: "/", component: home },
//     {
//       path: "/posts/:id",
//       component: post,
//       beforeEnter(to, from, next) {
//         const foundBlog = blogs.find(({ id }) => id === to.params.id);
//         if (!foundBlog) next("/");
//         next();
//       }
//     }
//   ]
// });

createApp(App)
  .mount("#app");
