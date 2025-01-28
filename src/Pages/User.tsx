import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const data = [
    { id: 1, name: "user", age: 20, place: "valsad", contact: "9123456780" },
    { id: 2, name: "abc", age: 30, place: "vapi", contact: "1234567890" },
    { id: 3, name: "pqr", age: 40, place: "vadodara", contact: "9988776655" },
    { id: 4, name: "mno", age: 50, place: "surat", contact: "1122334455" },
    { id: 5, name: "def", age: 60, place: "mumbai", contact: "8866442200" },
  ];

  const handleLogout = () => {
    const confirmNavigation = window.confirm("Are you sure want to Logout ?");
    if (confirmNavigation) {
      navigate("/");
    }
    navigate("/");
  };
  const handleClick = (item) => {
    console.log("Click:", item);
    navigate(`/details?id=${item.id}`, { state: { item } });
  };

  return (
    <div className="table-container">
      <nav>
        <NavLink to="/user">Dashboard</NavLink>
        <NavLink to="/user">Profile</NavLink>

        <button onClick={handleLogout}>Logout</button>
      </nav>
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
};
export default User;
