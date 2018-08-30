import { LOCATION_CHANGE } from 'connected-react-router';

import reducers from './reducers';

export const appReducer = (state = {}, action) => {
  if (action.type === LOCATION_CHANGE) {
    return reducers({}, action);
  }

  return reducers(state, action);
};
