import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="container-login">
      <div className="box-login"></div>
      <div className="login">
        <h1>Log In</h1>
        <div className="form-login">
          <p>Email</p>
          <input type="text" placeholder="Email"></input>
          <p>Password</p>
          <input type="password" placeholder="Password"></input>
        </div>
        <button className="login-button">Log In</button>
      </div>
    </div>
  );
}
