import { createStore } from "redux";
import { myReducer } from "../reducers/allReducers";

export const myStore = createStore(myReducer);