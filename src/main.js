import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import App from './App.vue';
import './style.css';

import router from './router/router';

const app = createApp(App);

app.use(bootstrap).use(router).mount('#app');
