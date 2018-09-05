import { combineReducers } from 'redux';

import { appReducer } from './app.reducer';
import { sharedReducers } from './shared';

export default function({ reducers }) {
  return combineReducers({
    app: appReducer({ reducers }),
    ...sharedReducers
  });
}
