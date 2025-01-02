import React from "react";
import './home.css'

export default function Home() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="left"><p>Logo</p></div>
        <div className="middle">
          <button>Home</button>
          <button>Game</button>
          <button>Profile</button>
        </div>
        <div className="right">
          <button>Log In</button>
        </div>      
      </div>
      <div className="center">
        <h1>TEST YOUR TYPING SKILLS</h1>
        <button className="start">Start Test</button>
      </div>
      <div className="section">
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,229.3C384,245,480,235,576,202.7C672,171,768,117,864,122.7C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </div>
    
    
  );
}
