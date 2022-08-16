import { CeroacienInstances } from '../config';

export const createUser = async user => {
  if (!user) return;
  const { data } = await CeroacienInstances.post('/user', { user });
  return data;
};
