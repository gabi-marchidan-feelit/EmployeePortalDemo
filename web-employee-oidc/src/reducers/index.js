import { combineReducers } from 'redux';
import listItem from './listItemReducer';
import loginReducer from './loginReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  listItem,
  loginReducer: loginReducer,
  routing: routerReducer
});

export default rootReducer;
