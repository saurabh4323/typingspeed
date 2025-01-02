"use client";
import React,{
  useState,
  useEffect
} from "react";
import './game.css'

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Coding is fun and challenging at the same time.",
  "React.js is a popular JavaScript library for building user interfaces.",
  "Practice makes perfect in programming.",
  "Always strive for continuous improvement in your skills.",
  "Keep calm and code on!",
  "Programming is a creative process of problem-solving.",
  "Efficiency and readability are key factors in writing good code.",
  "Success in coding requires patience and perseverance.",
  "Learning new technologies opens up endless possibilities.",
];

const TypingGame=()=>{
  const [sentence,setSentence]= useState(' ');
  const [input,setInput]= useState(' ');
  const [score,setScore]=useState(0);
  const [time,setTime]=useState(60);
  const [isGameOver, setIsGameOver]=useState(false);
  const [isGameStarted, setIsGameStarted]=useState(false);

  useEffect(()=>{
    if(isGameStarted){
      startGame();
    }
  },[isGameStarted]);

  useEffect(()=>{
    if(time>0 && !isGameOver && isGameStarted){
      const timer = setTimeout(()=>{
        setTime((prevTime)=>prevTime-1);
      },1000);
      return ()=> clearTimeout(timer);
    }
    else if(time===0 && isGameStarted){
      setIsGameOver(true);
    }
  },[time, isGameOver, isGameStarted]);

  const startGame=()=>{
    generateRandomSentence();
    setTime(60);
    setIsGameStarted(false);
  };

   
}

export default function Game() {
  return <div className="container-game">
    <h1 className="title">Sentence Typing Game</h1>
    {! isGameStarted && (
      <button onClick={handleStartGame} className="game-start">Start Game</button>
    )}
    
  </div>;
}
