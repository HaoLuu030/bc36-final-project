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

export { logInApi };
