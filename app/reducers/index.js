import { combineReducers } from 'redux';
import macros from './macros';
import userSettings from './userSettings';
import groceries from './groceries';

const reducer = combineReducers({
  macros,
  userSettings,
  groceries
});

export default reducer;
