import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vue-products-server.onrender.com',
  // baseURL: 'http://localhost:8000',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');

  return config;
});

export default instance;
