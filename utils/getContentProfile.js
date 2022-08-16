import { CeroacienInstances } from "../config";

export const getContentProfile = async (email) => {
  if (!email) return;

  const { data } = await CeroacienInstances.post("/courses/courseByEmail", {
    email,
  });
  return data;
};
