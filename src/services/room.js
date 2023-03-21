import { axiosRequest } from "../configs/axios.config";

export const fetchRoombyLocationApi = (locationId) => {
  return axiosRequest({
    url: `/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`,
    method: "GET",
  });
};
