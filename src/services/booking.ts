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

export { bookingApi };
