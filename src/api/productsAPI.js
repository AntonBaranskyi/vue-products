import { client } from '../helpers/fetchClient';

export const deleteProduct = (id) => {
  return client.delete(`/products/${id}`);
};

export const addProduct = (data) => {
  return client.post('/products', data);
};
