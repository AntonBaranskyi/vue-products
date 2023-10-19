import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import Notifications from '@kyvg/vue3-notification';

import vue3Spinner from 'vue3-spinner';

import App from './App.vue';

import './style.css';
import 'vue3-toastify/dist/index.css';

import store from './store/store';
import router from './router/router';

const app = createApp(App);

app

  .use(store)
  .use(Notifications)
  .use(bootstrap)
  .use(router)
  .use(vue3Spinner)
  .mount('#app');
