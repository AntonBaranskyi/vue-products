import { client } from '../helpers/fetchClient';

export const fetchLogin = (data) => {
  return client.post('/auth/login', data);
};

export const fetchRegister = (data) => {
  return client.post('auth/register', data);
};
