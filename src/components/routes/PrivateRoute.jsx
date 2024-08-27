import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { authContext } from "../context/Auth/AuthProvider";

export const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useContext(authContext);

  return isAuthenticated || localStorage.getItem("login-email") ? (
    element
  ) : (
    <Navigate to="/login" />
  );
};
