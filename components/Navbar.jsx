import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <img src="logo.svg"></img>
        </div>
        <div className="middle">
          <button>Home</button>
          <button>Game</button>
          <button>Profile</button>
        </div>
        <div className="right">
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
}
