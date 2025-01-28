import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/useparam">UseParam</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/table">Table</NavLink>
    


        {/* <NavLink to="/details">Details</NavLink> */}



      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
