import React from "react";
import { useSearchParams } from "react-router-dom";

function Details() {
  const [searchParams] = useSearchParams();

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold">Selected Row Data</h2>
      <p><strong>ID:</strong> {searchParams.get("id")}</p>
      <p><strong>Name:</strong> {searchParams.get("name")}</p>
      <p><strong>Age:</strong> {searchParams.get("age")}</p>
      <p><strong>Place:</strong> {searchParams.get("place")}</p>
      <p><strong>Contact:</strong> {searchParams.get("contact")}</p>
    </div>
  );
}

export default Details;
