import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { authContext } from "../context/Auth/AuthProvider";

export const PublicRoute = ({ element }) => {
  const { isAuthenticated } = useContext(authContext);

  return isAuthenticated || localStorage.getItem("login-email") ? (
    <Navigate to="/" />
  ) : (
    element
  );
};
