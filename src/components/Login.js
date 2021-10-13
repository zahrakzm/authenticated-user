import { useState } from "react";
import axios from "axios";
import "../assets/css/login.css";

const AuthenticatedUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const send = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          const { token } = response.data;
          localStorage.setItem("token", token);

          //todo: got to users page
          window.location.href = "/users";
        }
      })
      .catch((err) => alert("Please Enter a valid Email and Password"));
  };
  return (
    <div>
      <div className="login-wrapper">
        <h1>Please Login to see users List</h1>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />

        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />

        <button onClick={send}>send</button>
      </div>
    </div>
  );
};

export default AuthenticatedUser;
