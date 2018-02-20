import {
    SET_LOGIN_SUCCESS, 
    SET_LOGIN_PENGING, 
    SET_LOGIN_ERROR,
    USER_AUTHENTICATED,
    USER_NOT_AUTHENTICATED
} from '../constants/actionTypes';

export default function loginReducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  isLoginError: false,
  userAuthenticated: false
}, action) {
  switch (action.type){
    case SET_LOGIN_PENGING:
      return {
        isLoginPending: action.isLoginPending
      };

    case SET_LOGIN_ERROR:
      return {
        isLoginError: action.isLoginError
      };

    case SET_LOGIN_SUCCESS:
      return {
        isLoginSuccess: action.isLoginSuccess
      };

    case USER_AUTHENTICATED:
      return {
        userAuthenticated: action.userIsAuthenticated
      };

    case USER_NOT_AUTHENTICATED:
      return {
        userAuthenticated: action.userNotAuthenticated
      };

    default:
      return state;
  }
}

