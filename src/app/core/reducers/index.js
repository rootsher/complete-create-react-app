import { combineReducers } from 'redux';

import { historyReducer } from './history';

export default combineReducers({
  history: historyReducer
});
