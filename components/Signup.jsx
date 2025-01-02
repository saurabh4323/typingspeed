"use client";
import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
// import { Router } from "express";
import { useRouter } from "next/navigation";

function Signup() {
  const route = useRouter();
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
      const email = localStorage.setItem("email", signup.email);
      alert("signup successfully");
      route.push("/game");
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="ooo">
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
            <p
              style={{
                fontSize: "17px",
                fontWeight: "300",
              }}
            >
              Already have an account?{" "}
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: "300",
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Click here
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
