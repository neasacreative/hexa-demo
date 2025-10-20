import PageRoutes from "./PageRoutes";

const routes = [
  {
    path: "",
    name: "blank-page",
    component: () =>
      import(/* webpackChunkName: "starter" */ "@/view/dashboard/Starter.vue"),
  },
  {
    name: "dashboard-view",
    path: "dashboard",
    component: () => import("@/view/dashboard/DashboardView.vue"),
    meta: {
      title: "Dashboard",
    },
  },
  ...PageRoutes,
];

export default routes;
