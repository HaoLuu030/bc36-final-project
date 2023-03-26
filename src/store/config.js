import { combineReducers, createStore } from "redux";
import { searchReducer } from "./reducers/searchReducer";

const rootReducer = combineReducers({
  searchReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
