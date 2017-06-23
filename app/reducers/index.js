import { combineReducers } from 'redux';
import macros from './macros';
import userSettings from './userSettings';

const reducer = combineReducers({
  macros,
  userSettings,
});

export default reducer;
