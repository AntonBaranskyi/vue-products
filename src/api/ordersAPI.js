import { client } from '../helpers/fetchClient';

export const deleteOrder = (id) => {
  return client.delete(`/orders/${id}`);
};

export const createOrder = (data) => {
  return client.post('/orders', data);
};
