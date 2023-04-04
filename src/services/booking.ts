import { axiosRequest } from "../configs/axios.config";

const bookingApi = (bookingInfo: {
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
}) => {
  return axiosRequest({
    url: "/dat-phong",
    method: "POST",
    data: bookingInfo,
  });
};
const bookingByUserApi = (id: number) => {
  return axiosRequest({
    url: `dat-phong/lay-theo-nguoi-dung/${id}`,
    method: "GET",
  });
};
export { bookingApi, bookingByUserApi };
