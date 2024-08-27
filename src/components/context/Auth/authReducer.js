export const initStateAuth = {
  authTab: 1,
  authenticated: false,
  dataLogin: {},
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH_TAB":
      return {
        ...state,
        authTab: action.payload,
      };

    case "SET_AUTHENTICATED":
      return {
        ...state,
        authenticated: action.payload,
      };

    case "SET_DATA_LOGIN":
      return {
        ...state,
        dataLogin: action.payload,
      };
    default:
      return state;
  }
};
