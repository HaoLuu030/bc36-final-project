import { axiosRequest } from "../configs/axios.config";

export const fetchRoombyLocationApi = (locationId: string | undefined) => {
  return axiosRequest({
    url: `/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`,
    method: "GET",
  });
};

export const fetchRoomById = (roomId: string | undefined) => {
  return axiosRequest({
    url: `phong-thue/${roomId}`,
    method: "GET",
  });
};
