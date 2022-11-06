// reducer related to auth state;

const reducer = (state, action) => {
  switch (action.type) {
    case 'load': {
      return { ...state, loading: true };
    }
    case 'success': {
      return { ...state,loading: false, token: action.token, isAuth: true };
    }
    default: {
      return;
    }
  }
};

export default reducer;
