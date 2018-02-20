import * as types from '../constants/actionTypes';
import axios from 'axios';

const API_URL = 'http://airlister.co:4999/api';

export function login(email, password, props) {
	return dispatch => {
    dispatch(setLoginPending(true));
    axios.post(`${API_URL}/login`, { 
      Password: password,
      Username: email
    })
    .then(response => {
      if (response.data.success == true) {
        sessionStorage.setItem('airlister_token', response.data.token);
        dispatch(setLoginSuccess(true));
        props.history.push("/list-item");
      } else {
        dispatch(setLoginError('Something went wrong or username and password combination did not match!'));
      }
    })
    .catch(() => {
      // console.log(error);
      
    });
  };
}

export function checkAuth(token, props) {
  return dispatch => {
    if (token && token != null) {
      // console.log('++++! User is Authenticate !! +++');
      dispatch(userAuthenticated(true));
    }
    else {
      dispatch(userNotAuthenticated(false));
      props.history.push("/login");
    }
  };
}

export const setLoginSuccess = (isLoginSuccess) => {
  return {
    type: types.SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
};

export const setLoginPending = (isLoginPending) => {
  return{
    type: types.SET_LOGIN_PENGING,
    isLoginPending
  };
};

export const setLoginError = (isLoginError) => {
  return{
    type: types.SET_LOGIN_ERROR,
    isLoginError
  };
};

export const userAuthenticated = (userIsAuthenticated) => {
  return {
    type: types.USER_AUTHENTICATED,
    userIsAuthenticated
  };
};

export const userNotAuthenticated = (userNotAuthenticated) => {
  return {
    type: types.USER_NOT_AUTHENTICATED,
    userNotAuthenticated
  };
};