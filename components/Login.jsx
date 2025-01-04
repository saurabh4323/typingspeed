"use client";
import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const route = useRouter();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/user/login", login);
    console.log("Signup successful:", response.data);
    const email = localStorage.setItem("email", login.email);
    alert("Login successfully");
    route.push("/game");
  };
  const onhandlechange = (e) => {
    const { name, value } = e.target;
    setlogin((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="container-login">
      <div className="box-login"></div>
      <form className="login" onSubmit={handlesubmit}>
        <h1>Log In</h1>
        <div className="form-login">
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={onhandlechange}
            value={login.email}
          ></input>
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            onChange={onhandlechange}
            name="password"
            value={login.password}
          ></input>
        </div>
        <button className="login-button" type="submit">
          Log In
        </button>
        <p>
          Don't have an account?{" "}
          <Link href={"/signup"}>
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Click here
          </span>
          </Link>
        </p>
      </form>
    </div>
  );
}
