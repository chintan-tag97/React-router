import React from "react";

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

import "./main.scss";
import Table from "./Pages/Table.tsx";
import Details from "./Pages/Details.tsx";
function Main() {
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
          <Route path="/table" element={<Table />}>
            {/* <Route path="details/:name/:age/:place/:contact" element={<Details />}/> */}
          </Route>
        </Route>
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
