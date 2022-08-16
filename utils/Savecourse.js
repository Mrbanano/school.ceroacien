import { CeroacienInstances } from "../config";

export const ToSaveCourse = async (email, course) => {
  const { data } = await CeroacienInstances.post("/courses/savecourse", {
    email,
    course,
  });
  return data;
};
