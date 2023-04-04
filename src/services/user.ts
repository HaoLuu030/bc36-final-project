import { axiosRequest } from "../configs/axios.config";

const logInApi = (userInfo: {
  email: string | undefined;
  password: string | undefined;
}) => {
  return axiosRequest({
    url: "/auth/signin",
    method: "POST",
    data: userInfo,
  });
};
const signUpApi = (userInfo: {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
}) => {
  return axiosRequest({
    url: "/auth/signup",
    method: "POST",
    data: userInfo,
  });
};

const editUserApi = (userInfo: {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
}) => {
  return axiosRequest({
    url: `/users/${userInfo.id}`,
    method: "PUT",
    data: userInfo,
  });
};

export { logInApi, signUpApi, editUserApi };
