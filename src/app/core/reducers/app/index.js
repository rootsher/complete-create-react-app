import { LOCATION_CHANGE } from 'connected-react-router';
import { combineReducers } from 'redux';
import { userReducer } from './user';

const reducers = combineReducers({
  user: userReducer
});

export const appReducer = (state = {}, action) => {
  if (action.type === LOCATION_CHANGE) {
    return reducers({}, action);
  }

  return reducers(state, action);
};
