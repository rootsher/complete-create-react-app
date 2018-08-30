export default function addUserBucks() {
  return function(dispatch, getState, { services }) {
    dispatch({ type: 'ADD_USER_BUCKS' });
  };
}
