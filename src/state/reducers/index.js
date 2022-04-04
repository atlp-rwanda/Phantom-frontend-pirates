import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const allReducers = combineReducers({
  counterReducer,
});

export default allReducers;