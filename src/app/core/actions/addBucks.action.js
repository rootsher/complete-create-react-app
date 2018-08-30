export default function addBucks() {
  return function(dispatch, getState, { services }) {
    dispatch({ type: 'ADD_BUCKS' });
  };
}
