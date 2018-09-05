export default function login() {
  return function(dispatch, getState, { services }) {
    dispatch({ type: 'AUTH_LOGOUT' });
  };
}
