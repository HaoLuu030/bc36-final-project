import { axiosRequest } from "../configs/axios.config";

export const fetchCommentApi = () => {
  return axiosRequest({
    url: "/binh-luan",
    method: "GET",
  });
};
