import { CeroacienInstances } from "../config";

export const CheckIfCourseIsBuy = async (email, course) => {
  const { data } = await CeroacienInstances.post(`/courses/courseByEmail`, {
    email,
  });

  return data.Course.includes(course) ? true : false;
};
