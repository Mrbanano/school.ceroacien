import { CeroacienInstances } from '../config';

export const getCourseDetail = async id => {
  if (!id) return;
  const { data } = await CeroacienInstances(`/courses/${id}`);
  return data;
};
