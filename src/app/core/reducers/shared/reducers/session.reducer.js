export const sessionReducer = (
  state = {
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return {
        ...state,
        isAuthenticated: true
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
