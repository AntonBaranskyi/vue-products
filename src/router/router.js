import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import MainPage from '../pages/MainPage.vue';
import Products from '../components/Products.vue';
import OrdersPage from '../pages/OrdersPage.vue';

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },

  {
    path: '/main',
    component: MainPage,
  },

  {
    path: '/orders',
    component: OrdersPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
