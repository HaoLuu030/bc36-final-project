import { SET_SEARCH_INFO } from "../types/searchTypes";

const setSearchInfoAction = (payload: {
  location: string;
  checkInDate: string;
  checkOutDate: string;
  numOfGuest: string;
}) => {
  return {
    type: SET_SEARCH_INFO,
    payload,
  };
};

export { setSearchInfoAction };
