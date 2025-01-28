import React from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const item = location.state?.item;

  return (
    <div>
      <h2>Selected Data</h2>
      <p><strong>ID: </strong>{item.id}</p>
      <p><strong>Name: </strong>{item.name}</p>
      <p><strong>Age: </strong>{item.age}</p>
      <p><strong>Place:</strong> {item.place}</p>
      <p><strong>Contact:</strong> {item.contact}</p>
    </div>
  );
}

export default Details;
