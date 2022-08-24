import { CeroacienInstances } from "../config";

export const getAllClasseByCourse = async (courseID) => {
  try {
    const { data } = await CeroacienInstances(`/video?id=${courseID}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
