export const sessionReducer = (
  state = {
    isAuthenticated: false
  },
  action
) => {
  if (action.type === 'AUTH_LOGIN') {
    return {
      ...state,
      isAuthenticated: true
    };
  }

  return state;
};
