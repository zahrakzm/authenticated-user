import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";
import "../assets/css/custom.css";
import Logout from "./Logout";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        setUsers(response.data.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const token = localStorage.getItem("token");
  if (!token) {
    console.log("not token");
    window.location.href = "/login";
    return <Login />;
  }
  return (
    <div>
      <table>
        <thead>
          <td>ID</td>
          <td>Email</td>
          <td>FirstName</td>
          <td>LastName</td>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Logout />
    </div>
  );
};

export default UsersList;
