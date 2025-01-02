"use client";
import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [floatingLetters, setFloatingLetters] = useState([]);
  const particleContainerRef = useRef(null); // Reference to the particle container

  useEffect(() => {
    // Set up floating letters on mount
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const newLetters = Array.from({ length: 20 }, () => ({
      char: letters[Math.floor(Math.random() * letters.length)],
      left: Math.random() * 90 + "%", // Random left position
      animationDuration: Math.random() * 5 + 3 + "s", // Random animation duration
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random HEX color
    }));
    setFloatingLetters(newLetters);

    // Create particles
    const createParticles = () => {
      const numParticles = 100;
      const particleContainer = document.createElement("div");
      particleContainer.className = "particle-containers";
      particleContainerRef.current = particleContainer;
      document.body.appendChild(particleContainer);

      for (let i = 0; i < numParticles; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.backgroundColor = getRandomColor();
        square.style.width = `${Math.random() * 15 + 10}px`;
        square.style.height = square.style.width;
        square.style.left = `${Math.random() * 100}vw`;
        square.style.top = `${Math.random() * 100}vh`;
        square.style.animationDuration = `${Math.random() * 3 + 2}s`;
        particleContainer.appendChild(square);
      }
    };

    createParticles();

    // Cleanup particles on unmount
    return () => {
      if (particleContainerRef.current) {
        particleContainerRef.current.remove();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const colors = [
    "#F87171",
    "#FBBF24",
    "#34D399",
    "#60A5FA",
    "#A78BFA",
    "#F472B6",
    "#F9A8D4",
    "#FDBA74",
    "#6EE7B7",
    "#93C5FD",
    "#D8B4FE",
    "#E879F9",
    "#FCD34D",
    "#38BDF8",
    "#FB7185",
    "#A3E635",
    "#FACC15",
    "#86EFAC",
    "#C084FC",
    "#FECACA",
    "#FF9AA2",
    "#FFB3E6",
    "#FF6666",
    "#FFB347",
    "#D3C0FB",
    "#FFC3A0",
    "#FF677D",
    "#D4A5A5",
    "#392F5A",
    "#D9BF77",
  ];

  // Function to get a random color
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="container">
      <div className="center">
        <TypeAnimation
          sequence={[
            "Test Your Typing Skills!",
            2000,
            "Start Typing Fast!",
            2000,
            "Improve Your Speed!",
            2000,
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          style={{ color: "white", fontSize: "28px", textAlign: "center" }}
        />
        <button className="start">Start Test</button>
        <div className="floating-letters">
          {floatingLetters.map((letter, index) => (
            <div
              key={index}
              className="floating-letter"
              style={{
                left: letter.left,
                animationDuration: letter.animationDuration,
                color: letter.color, // Apply random color
              }}
            >
              {letter.char}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,229.3C384,245,480,235,576,202.7C672,171,768,117,864,122.7C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}
