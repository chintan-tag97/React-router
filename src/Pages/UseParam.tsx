
// 2. Create example for how to get all params in key/value pair [use useSearchParams()]



import React from "react";
import { useSearchParams } from "react-router-dom";

function UseParam() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  console.log(searchParams.get("city"));
  console.log(searchParams.get("country"));

  const name = searchParams.get("name");
  const city = searchParams.get("city");
  const country = searchParams.get("country");
  return (
    <div>
      <h1>Get URL Params</h1>
      <h3>Name:{name}</h3>
      <h3>City:{city}</h3>
      <h3>Country: {country}</h3>

      <button
        onClick={() =>
          setSearchParams({
            name: "Chintan Tandel",
            city: "Vadodara",
            country: "India",
          })
        }
      >
        Update
      </button>

      {/* <input
        type="text"
        onChange={(e) =>
          setSearchParams({
            job: e.target.value,
            name: "Chintan Tandel",
            city: "Vadodara",
            country: "India",
          })
        }
        placeholder="Set Value"
      /> */}
    </div>
  );
}

export default UseParam;
