import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: () => import("@views/Main.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@views/Test.vue"),
  },
  {
    path: "/about-us",
    name: "aboutUs",
    component: () => import("@views/About-us.vue"),
  },
  {
    path: "/grants",
    name: "grants",
    component: () => import("@views/Grants.vue"),
  },
  {
    path: "/universities",
    name: "universities",
    component: () => import("@views/Universities.vue"),
  },

  {
    path: "/universities/:universityPath",
    name: "one-university",
    component: () => import("@views/University.vue"),
  },
  {
    path: "/our-services",
    name: "ourServices",
    component: () => import("@views/OurServices.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("@views/Blog.vue"),
  },
  {
    path: "/blogs/:articlePath",
    name: "one-blog",
    component: () => import("@views/OneBlog.vue"),
  },
  {
    path: "/university",
    name: "university",
    component: () => import("@views/University.vue"),
  },
  {
    path: "/program",
    name: "program",
    component: () => import("@views/Program.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  next();
});

export default router;
