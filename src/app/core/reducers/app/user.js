export const userReducer = (
  state = {
    wallet: { bucks: 10, exp: 20, diamond: 30 }
  },
  action
) => {
  if (action.type === 'ADD_USER_BUCKS') {
    return {
      ...state,
      wallet: {
        ...state.wallet,
        bucks: state.wallet.bucks + 10
      }
    };
  }

  return state;
};
