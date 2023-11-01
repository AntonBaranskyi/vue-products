import { client } from '../helpers/fetchClient';

export const fetchLogin = (data) => {
  return client.post('/auth/login', data);
};

export const fetchRegister = (data) => {
  return client.post('auth/register', data);
};

export const fetchUsers = () => {
  return client.get('/users');
};

export const fetchProducts = () => {
  return client.get('/products');
};

export const fetchOrders = () => {
  return client.get('/orders');
};

export const uploadPhoto = (data) => {
  return client.post('/upload', data);
};
