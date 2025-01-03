"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import Link from "next/link";

export default function Navbar() {
  const [email, setemail] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("email");
    if (user) {
      setemail(true);
    }
  });
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <img src="logo.svg"></img>
        </div>
        <div className="middle">
          <Link href={"/home"}>
            <button>Home</button>
          </Link>
          <Link href={"/game"}>
            {" "}
            <button>Game</button>
          </Link>
          <Link href={"/Programming"}>
            <button>Code Game</button>
          </Link>
        </div>
        <div className="right">
          {!email ? (
            <Link href={"/login"}>
              <button>Login</button>
            </Link>
          ) : (
            <Link href={"/profile"}>
              <button>Profile</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}