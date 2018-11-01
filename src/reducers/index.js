import { combineReducers } from 'redux';
import itemInput from './itemInput';
import itemResult from './itemResult';
import categorySelector from "./categorySelector"

export default combineReducers({
  itemInput,
  itemResult,
  categorySelector
});
