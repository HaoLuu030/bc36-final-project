import { SET_SEARCH_INFO } from "../types/searchTypes";

//the payload info is take from the query params so everything is in string form
const setSearchInfoAction = (payload: {
  location: string | null;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  numOfGuest: number | null;
}) => {
  return {
    type: SET_SEARCH_INFO,
    payload,
  };
};
export { setSearchInfoAction };
