import { createStore } from "redux";
import { countReducerToStore } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const countStoreReducer = createStore(
  countReducerToStore,
  composeWithDevTools()
);
