import { LOCATION_CHANGE } from 'connected-react-router';

export function appReducer({ reducers }) {
  return (state = {}, action) => {
    if (action.type === LOCATION_CHANGE) {
      return reducers({}, action);
    }

    return reducers(state, action);
  };
}
