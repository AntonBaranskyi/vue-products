import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import MainPage from '../pages/MainPage.vue';
import OrdersPage from '../pages/OrdersPage.vue';
import UsersPage from '../pages/UsersPage.vue';
import AuthPage from '../pages/AuthPage.vue';

const routes = [
  {
    path: '/auth',
    component: AuthPage,
    children: [
      { path: 'login', component: Login },
      {
        path: 'register',
        component: Register,
      },
    ],
  },

  {
    path: '/',
    component: MainPage,
  },

  {
    path: '/orders',
    component: OrdersPage,
  },

  {
    path: '/users',
    component: UsersPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
