import { client } from '../helpers/fetchClient';

export const deleteProduct = (id) => {
  return client.delete(`/products/${id}`);
};
