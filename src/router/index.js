import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
  },
  {
    path: "/2",
    name: "page2",
    component: () => import("@/components/page/Page2.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("before each");
  return next();
});
export default router;
