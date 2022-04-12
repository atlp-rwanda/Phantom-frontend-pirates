import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";


export default combineReducers({
  counterReducer,
  error: errorReducer,
  auth: authReducer
});
