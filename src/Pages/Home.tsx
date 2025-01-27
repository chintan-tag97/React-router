
// 3. Create example for how to navigate using button click function [use useNavigate()]

import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  
  const navigate = useNavigate();

  // const handleDynamicNavigate = (targetRoute) => {
  //   navigate(targetRoute);
  //   console.log(targetRoute);

  // const handleConditionNavigate = (shouldNavigate) => {
  //   if (shouldNavigate) {
  //     navigate("/about");
  //   } else {
  //     navigate("/contact");
  //   }
  // };
  // }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>GO to About Page</button>
      <button onClick={() => navigate("/contact")}>GO to Contact Page</button>
      <button onClick={() => navigate("/useparam")}>GO to UseParam Page</button>

      {/* <button onClick={() => handleDynamicNavigate("/about")}>GO to About Page</button>
      <button onClick={() => handleDynamicNavigate("/contact")}>GO to Contact Page</button>
      <button onClick={() => handleDynamicNavigate("/useparam")}>GO to UseParam Page</button> */}

      {/* <button onClick={() => handleConditionNavigate(true)}>GO to About Page</button>
      <button onClick={() => handleConditionNavigate(false)}>GO to Contact Page</button> */}
    </div>
  );
}

export default Home;
