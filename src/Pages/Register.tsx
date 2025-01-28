// 1. Create example for child/nested rooutes using <Outlet />

// 4. Create example for how we can get information from current route [use useLocation()]

import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

function Register() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <nav1>
        <NavLink to="login" state={{ name: "loaction", id: "10" }}>
          Login
        </NavLink>

        <NavLink to="signin">Signin</NavLink>
        
      </nav1>
      <Outlet />
    </div>
  );
}

export default Register;
