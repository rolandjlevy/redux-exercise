import { combineReducers } from 'redux';
import characterInput from './characterInput';
import characterResult from './characterResult';

export default combineReducers({
  characterInput,
  characterResult
});
