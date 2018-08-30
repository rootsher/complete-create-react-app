import { combineReducers } from 'redux';

import { appReducer } from './app/app.reducer';
import { sharedReducers } from './shared';

export default combineReducers({
  app: appReducer,
  ...sharedReducers
});
