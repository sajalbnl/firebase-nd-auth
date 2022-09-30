import React from "react";
import { Navigate } from "react-router-dom";
import { UseUserAuth } from "../context/userAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = UseUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;