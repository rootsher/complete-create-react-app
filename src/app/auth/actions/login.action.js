export const AUTH_LOGIN = 'AUTH_LOGIN';

export default function login() {
  return function(dispatch, getState, { services }) {
    dispatch({ type: AUTH_LOGIN });
  };
}
