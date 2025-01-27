import React from "react";
import { useNavigate } from "react-router-dom";

function Table() {
  const navigate = useNavigate();

  const data = [
    { id: 1, name: "xyz", age: 20, place: "valsad", contact: "9123456780" },
    { id: 2, name: "abc", age: 30, place: "vapi", contact: "1234567890" },
    { id: 3, name: "pqr", age: 40, place: "vadodara", contact: "9988776655" },
    { id: 4, name: "mno", age: 50, place: "surat", contact: "1122334455" },
    { id: 5, name: "def", age: 60, place: "mumbai", contact: "8866442200" },
  ];

  const handleClick = (item) => {
    console.log("Click:", item);
    navigate(`/details?id=${item.id}&name=${item.name}&age=${item.age}&place=${item.place}&contact=${item.contact}`);
  };
  
  return (
    <div className="table-container">
      <h2>Users Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.place}</td>
              <td>{item.contact}</td>
              <td>
                <button onClick={() => handleClick(item)}>Click</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
