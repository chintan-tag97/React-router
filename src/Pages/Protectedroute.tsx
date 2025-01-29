import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
}

const Protectedroute: React <ProtectedRouteProps> = ({ isAuthenticated }) => {
  // const user = JSON.parse(localStorage.getItem("user") || "{}");

  // if (!isAuthenticated || !user.role) {
  //   return <Navigate to="/register/login" />;
  // }

  // return user.role === "admin" ? (
  //   <Navigate to="/admin" />
  // ) : user.role === "user" ? (
  //   <Navigate to="/user" />
  // ) : (
  //   <Navigate to="/register/login" />
  // );
};

export default Protectedroute;
