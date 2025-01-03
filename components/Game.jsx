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

const  Game = () => {
  const [sentence,setSentence]= useState('');
  const [input,setInput]= useState('');
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
    if(time>0  && isGameStarted){
      const timer = setTimeout(()=>{
        setTime((prevTime)=>prevTime-1);
      },1000);
      return ()=> clearTimeout(timer);
    }
    else if(time===0 && isGameStarted){
      setIsGameOver(true);
    }
  },[time,  isGameStarted]);

  const startGame=()=>{
    generateRandomSentence();
    setTime(60);
    setScore(0);
    setInput("");
    setIsGameStarted(true);
    setIsGameOver(false);
  };

  const generateRandomSentence=()=>{
    const randomIndex=Math.floor(Math.random()*sentences.length);
    setSentence(sentences[randomIndex]);
  };

  const handleChange=(e)=>{
    if(!isGameOver && isGameStarted){
      setInput(e.target.value);
      if(e.target.value===sentence){
        setScore((prevScore)=>prevScore+1);
        setInput('');
        generateRandomSentence();
      }
    }
  };

  const handleStartGame=()=>{
    setIsGameStarted(true);
  };

   



  return (<div className="containerq">
    <h1 className="titleq">Sentence Typing Game</h1>
    { !isGameStarted && !isGameOver && (
      <button onClick={handleStartGame} className="start-button">Start Game</button>
    )}
    {isGameStarted && !isGameOver &&  (
      <>
      <div className="timer">Time Left: {time}</div>
      <div className="sentence">{sentence}</div>
      
        <div className="input-container">
        <input 
          type="text"
          value={input}
          onChange={handleChange}
          className="input-field"
          placeholder="Type here..."
          autoFocus
          disabled={isGameOver}
        /> 
        </div> 
      
      </>
    )}
    {isGameOver && (
      <div className="game-over">
        <p>Game Over!</p>
        <p>Your Score: {score}</p>
      </div>  
    )}    
  </div>
  )}
  export default Game;

