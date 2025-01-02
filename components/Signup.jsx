"use client";
import React, { useState } from "react";
import "./signup.css";
import axios from "axios";

function Signup() {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup((prevSignup) => ({
      ...prevSignup,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/user/signup", signup);
      console.log("Signup successful:", response.data);
      alert("signup successfully");
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="oo">
      <div className="containerdd">
        <div className="box"></div>
        <div className="signup">
          <h1>Sign Up</h1>
          <form
            className="form"
            style={{ gap: "10px", display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <p>Name</p>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={signup.name}
              onChange={handleChange}
            />
            <p>Email</p>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signup.email}
              onChange={handleChange}
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signup.password}
              onChange={handleChange}
            />
            <button className="signup-button" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
