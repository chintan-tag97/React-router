import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, logout }) => (
    <div>
  <nav>
    

    
        <NavLink  to="/admin">Dashboard</NavLink>
        <NavLink to="/admin">Profile</NavLink>
    
               
         <button onClick={logout}>Logout</button>

   
  </nav>
  </div>
);

export default Navbar;
