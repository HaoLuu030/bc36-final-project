import { AnySoaRecord } from "dns";
import { SET_SEARCH_INFO } from "../types/searchTypes";

const DEFAULT_STATE = {
  searchInfo: {
    location: "",
    checkInDate: new Date(),
    checkIOutDate: new Date(),
    numOfGuest: 0,
  },
};

export const searchReducer = (
  state = DEFAULT_STATE,
  action: { type: string; payload: AnySoaRecord }
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCH_INFO:
      console.log(payload);
      break;

    default:
      break;
  }
  return { ...state };
};
