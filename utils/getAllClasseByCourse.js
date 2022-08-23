import { CeroacienInstances } from "../config";

export const getAllClasseByCourse = async (courseID) => {
  try {
    const { data } = await CeroacienInstances(`/video?id=${courseID}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
