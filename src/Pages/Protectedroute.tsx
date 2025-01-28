// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const user = JSON.parse(localStorage.getItem("") || "{}");

//   if (!user || !user.role) {
//     return <Navigate to="/login" />;
//   }

//   return user.role === "admin" ? (
//     <Navigate to="/admin" />
//   ) : user.role === "user" ? (
//     <Navigate to="/user" />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

// export default ProtectedRoute;
