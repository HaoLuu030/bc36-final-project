import { SET_SEARCH_INFO } from "../types/searchTypes";
import moment from "moment";

const DEFAULT_STATE = {
  searchInfo: {
    location: "",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    numOfGuest: 1,
  },
};

export const searchReducer = (
  state = DEFAULT_STATE,
  action: {
    type: string;
    payload: any;
  }
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCH_INFO:
      state.searchInfo = payload;
      break;

    default:
      break;
  }
  return { ...state };
};
