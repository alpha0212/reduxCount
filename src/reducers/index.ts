import { combineReducers } from "redux";
import { countReducer } from "./CountReducer";

export const countReducerToStore = combineReducers({ countReducer });
