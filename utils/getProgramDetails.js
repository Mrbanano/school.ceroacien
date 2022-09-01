import { CeroacienInstances } from "../config";

export const getProgramDetail = async (id) => {
  if (!id) return;
  const { data } = await CeroacienInstances(`/programs/${id}`);
  return data;
};
