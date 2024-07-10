import { legacy_createStore } from "redux";
import combineReducer from "./CombineReducer";

const store = legacy_createStore(combineReducer);

export default store;
