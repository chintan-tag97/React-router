import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout.tsx";
import Home from "./Pages/Home.tsx";
import Contact from "./Pages/Contact.tsx";
import About from "./Pages/About.tsx";

import UseParam from "./Pages/UseParam.tsx";
import Register from "./Pages/Register.tsx";
import Login from "./Pages/Login.tsx";
import Signin from "./Pages/Signin.tsx";
import NoPage from "./Pages/NoPage.tsx";
// import Protectedroute from "./Pages/Protectedroute.tsx";

import "./main.scss";
import Table from "./Pages/Table.tsx";
import Details from "./Pages/Details.tsx";
import User from "./Pages/User.tsx";
import Admin from "./Pages/Admin.tsx";
import Navbar from "./Pages/Navbar.tsx";
// import Dashboard from "./Pages/Dashboard.tsx";

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/useparam" element={<UseParam />} />

          <Route path="/register/" element={<Register />}>
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<Signin />} />
          </Route>
          <Route path="/details" element={<Details />} />
          <Route path="/table" element={<Table />}></Route>
        </Route>

        {/* <Route element={<Protectedroute isAuthenticated={isAuthenticated} />}> */}
          <Route path="user" element={<User logout={logout} />}></Route>
          <Route path="admin" element={<Admin logout={logout}  />}></Route>
          {/* <Route path="dashboard" element={<Dashboard logout={logout} />}></Route></Route> */}
        
 

       
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
