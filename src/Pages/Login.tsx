import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = {
  "admin@gmail.com": { password: "12345678", role: "admin" },
  "user@gmail.com": { password: "12345678", role: "user" },
};

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleNavigation = () => {
    const confirmNavigation = window.confirm(
      "Are you sure you want to go to the Home page?"
    );
    if (confirmNavigation) {
      navigate("/");
    }
  };
  const handleLogin = () => {
    if (data[email] && data[email].password === password) {
      const userData = { email, role: data[email].role };
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("user", JSON.stringify({ userData })); 
      
      localStorage.setItem("user", JSON.stringify({userData}));

      if (userData.role === "admin") {
        navigate("/admin");
      } else if (userData.role === "user") {
        navigate("/user");
      }
    } else {
      setError("Invalid data");
    }
  };


  
  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleLogin()}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleNavigation}>Home</button>
    </div>
  );
}

export default Login;
