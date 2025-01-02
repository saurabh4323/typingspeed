import React from "react";
import "./navbar.css";
import Link from "next/link";

export default function Navbar() {
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
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
}
