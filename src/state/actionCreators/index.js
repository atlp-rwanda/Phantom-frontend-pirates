import {
    incrementAction,
    decrementAction,
    resetAction,
  } from "../actions/counterAction";
  export const incrementActionCreator = () => {
    return incrementAction;
  };
  
  export const decrementActionCreator = () => {
    return decrementAction;
  };
  
  export const resetActionCreator = () => {
    return resetAction;
  };