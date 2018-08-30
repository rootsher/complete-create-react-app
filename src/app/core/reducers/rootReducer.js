import { combineReducers } from 'redux';

import { appReducer } from './app';
import { sharedReducers } from './shared';

export default combineReducers({
  app: appReducer,
  ...sharedReducers
});
