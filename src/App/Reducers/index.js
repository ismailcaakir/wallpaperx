import { combineReducers } from 'redux';
import searchReducer from './SearchReducer';
import detailReducer from './DetailReducer';

export default combineReducers({
  searchResponse: searchReducer,
  detailResponse: detailReducer,
});
