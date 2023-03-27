import { DELETE_USER_INFO, SET_USER_INFO } from "../types/userTypes";

interface DEFAUL_STATE {
  userInfo: {} | null;
}

const DEFAULT_STATE = {
  userInfo: null,
};

if (localStorage.getItem("USER_INFO_KEY")) {
  DEFAULT_STATE.userInfo = JSON.parse(
    localStorage.getItem("USER_INFO_KEY") || "{}"
  );
}
export const userReducer = (
  state = DEFAULT_STATE,
  action: {
    type: string;
    payload: any;
  }
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_INFO:
      state.userInfo = payload;
      break;
    case DELETE_USER_INFO:
      state.userInfo = null;
      break;
    default:
      break;
  }
  return { ...state };
};
