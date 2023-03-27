import { SET_USER_INFO, DELETE_USER_INFO } from "../types/userTypes";

const setUserInfoAction = (payload: {}) => {
  return {
    type: SET_USER_INFO,
    payload,
  };
};
const deleteUserInfoAction = () => {
  return {
    type: DELETE_USER_INFO,
  };
};

export { setUserInfoAction, deleteUserInfoAction };
