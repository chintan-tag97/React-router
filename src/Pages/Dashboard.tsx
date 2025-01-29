import React from "react";
import { Navigate } from "react-router-dom";

interface DashboardProps {
  logout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ logout }) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!user.role) {
    return <Navigate to="/register/admin" />;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <h2>Role: {user.role}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
