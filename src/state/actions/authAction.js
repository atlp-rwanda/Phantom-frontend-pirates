import axios from 'axios';
import { returnErrors } from './errorAction';


import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './actionTypes';

// Check token & load user
export const login =({ email,password }) => dispatch => {

 //request body

 const body = JSON.stringify({ email,password })
 console.log(email);
 console.log(body);
  axios
    .post('https://phantom-api-pirates.herokuapp.com/users/login', {
      email : email,
      password: password
    })
    .then(res =>
      dispatch({
        type:LOGIN_SUCCESS,
        payload: res.data
      })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
          type: LOGIN_FAIL
        });
      });
};