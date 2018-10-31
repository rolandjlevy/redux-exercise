import { combineReducers } from 'redux';
import characterInput from './characterInput';
import characterResults from './characterResults';

export default combineReducers({
  characterInput,
  characterResults
});
