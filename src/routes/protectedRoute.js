import { createWebHistory, createRouter } from 'vue-router';
import adminRoutes from './AdminRoutes';
import authRoutes from './authRoutes';
import store from '@/vuex/store';

const routes = [
  {
    name: 'Admin',
    path: '/',
    component: () => import(/* webpackChunkName: "admin" */ '@/layout/withAdminLayout.vue'),
    children: [...adminRoutes],
    meta: { auth: false },
  },
  {
    name: 'Auth',
    path: '/auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/layout/withAuthLayout.vue'),
    children: [...authRoutes],
    meta: { auth: true },
  },
];

const router = createRouter({
  history: createWebHistory(
    import.meta.env.VUE_APP_SUB_ROUTE || import.meta.env.BASE_URL
  ),
  linkExactActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(to, store);
  window.scrollTo(0, 0); // reset scroll position to top of page
  
  if (to.meta.auth && store.state.auth.login) {
    next({ to: '/' });
  } else if (!to.meta.auth && !store.state.auth.login) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
