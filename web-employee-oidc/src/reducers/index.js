import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  routing: routerReducer
});

export default rootReducer;
