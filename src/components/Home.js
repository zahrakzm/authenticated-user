import React from "react";
import "../assets/css/custom.css";


const Home = () => {
  const token = localStorage.getItem("token");
  const logIn = () => {
    if (!token) {
        window.location.href='/login'
    }
  };
  const logOut = () => {
      if(token){
          window.location.href='/logout'
      }
  };
  return (
    <div>
      <h1 className="main-head">Welcome to my home page</h1>
<div id="flex-area">
      <button onClick={logIn}> Log In </button>

      <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
};

export default Home;
