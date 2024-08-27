import { createContext, useEffect, useReducer } from "react";

import { authReducer, initStateAuth } from "./authReducer";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initStateAuth);

  const handleChangeTab = (tab) =>
    dispatch({ type: "SET_AUTH_TAB", payload: tab });

  const handleLogin = async (email, password) => {
    try {
      localStorage.setItem("login-email", email);

      dispatch({ type: "SET_AUTHENTICATED", payload: true });
      dispatch({ type: "SET_DATA_LOGIN", payload: { email } });
      return true;
    } catch (error) {
      throw new Error("Error al iniciar sesión");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("login-email");
    dispatch({ type: "SET_AUTHENTICATED", payload: false });
    dispatch({ type: "SET_DATA_LOGIN", payload: {} });
  };

  useEffect(() => {
    const email = localStorage.getItem("login-email");
    if (email) {
      dispatch({ type: "SET_AUTHENTICATED", payload: true });
    }
  }, []);

  return (
    <authContext.Provider
      value={{
        authTab: state.authTab,
        isAuthenticated: state.authenticated,
        dataLogin: state.dataLogin,
        handleChangeTab,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
