import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
  } from '../actions/actionTypes';
  
  const initialState = {
    isAuthenticated: null,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  }
  