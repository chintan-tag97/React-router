import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ element, role, user }) => {
  if (!user) return <Navigate to="/" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return element;
};

export default Protected;
