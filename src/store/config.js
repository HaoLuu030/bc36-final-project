import { combineReducers, createStore } from "redux";
import { searchReducer } from "./reducers/searchReducer";
import { userReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
  searchReducer,
  userReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
