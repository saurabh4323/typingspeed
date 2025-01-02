"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./program.css";
const Programming = () => {
  const [data, setData] = useState({
    code: "",
    language: "",
  });
  const [rreturn, setrreturn] = useState(""); // State for displaying the output

  // Sample questions
  const questions = [
    {
      question: "Write a function that prints 'Hello, World!'",
      difficulty: "easy",
      time: 90,
      output: "hello world",
    },
    {
      question:
        "Create a function named 'add' to add two numbers (800, 200) and return the result.",
      difficulty: "easy",
      time: 90,
      output: "1000",
    },
    {
      question:
        "Write a function that checks if 'madam' is a palindrome or not using a boolean return value.",
      difficulty: "medium",
      time: 150,
      output: "true",
    },
    {
      question:
        "Create a function to calculate the factorial of 14 using recursion.",
      difficulty: "medium",
      time: 150,
      output: "87178291200",
    },
    {
      question:
        "Write a function to find the maximum product of two integers in an array: [1, 10, -5, 1, -100].",
      difficulty: "tough",
      time: 300,
      output: "500",
    },
  ];

  // State management for question navigation, timer, and code submission
  const [forward, setForward] = useState(0);
  const [timeLeft, setTimeLeft] = useState(questions[forward].time);
  const [isRunning, setIsRunning] = useState(false);

  // Timer functions
  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setTimeLeft(questions[forward].time);
  };

  const forwardQuestion = () => {
    setForward((prev) => (prev + 1) % questions.length);
    setTimeLeft(questions[(forward + 1) % questions.length].time);
  };

  const backwardQuestion = () => {
    setForward((prev) => (prev - 1 + questions.length) % questions.length);
    setTimeLeft(
      questions[(forward - 1 + questions.length) % questions.length].time
    );
  };

  // Effect to update timer countdown

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  // Format time in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  // Handle code input changes
  const handleCodeChange = (e) => {
    setIsRunning(true);
    setData({ ...data, code: e.target.value });
  };

  // Handle language selection
  const handleLanguageChange = (e) => {
    setData({ ...data, language: e.target.value });
  };

  // Submit answer function
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      console.log(data);
      alert("sub");
      setIsRunning(false);
      setTimeLeft(questions[forward].time);

      const response = await axios.post("/api/code", data);

      console.log(response); // Log the full response

      if (response.data) {
        // Handle the successful response
        console.log("Output: ", response.data.output);
        setrreturn(response.data.output); // Update state with the output
      }
    } catch (error) {
      console.error("Error submitting code:", error);
      setrreturn("Error executing the code"); // Show error if there's an issue
    }
  };
  useEffect(() => {
    if (timeLeft == 0) {
      // alert("Time's up!");
      handleSubmit();
    }
  }, [timeLeft]);

  return (
    <div className="hhs" style={{ marginTop: "40px" }}>
      <div className="mainbox">
        <div className="topp">
          <h1>Programming Speed Test</h1>
          <select value={data.language} onChange={handleLanguageChange}>
            <option value="" disabled>
              Select a language
            </option>
            <option value="c++">C++</option>
            <option value="java">Java</option>
            <option value="python3">python3</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>

        <div className="midd" style={{ backgroundColor: "#1a1a1a" }}>
          <div className="ques" style={{ backgroundColor: "#1a1a1a" }}>
            <div className="boxq" style={{ backgroundColor: "#1a1a1a" }}>
              <p style={{ backgroundColor: "#1a1a1a" }}>
                {questions[forward].question}
              </p>
              <h4 style={{ backgroundColor: "#1a1a1a" }}>
                {questions[forward].difficulty}
              </h4>
            </div>

            <div className="direc" style={{ backgroundColor: "#1a1a1a" }}>
              <button onClick={forwardQuestion}>Forward</button>
              <button onClick={startTimer} disabled={isRunning}>
                Start
              </button>
              <button onClick={backwardQuestion}>Backward</button>
            </div>
          </div>

          <div className="time" style={{ backgroundColor: "#1a1a1a" }}>
            <h4 style={{ backgroundColor: "#1a1a1a" }}>
              {formatTime(timeLeft)}
            </h4>
          </div>
        </div>

        <div className="writi">
          <textarea
            onClick={() => {
              setIsRunning(true);
            }}
            value={data.code}
            onChange={handleCodeChange}
            placeholder="Write the answer in that time"
          ></textarea>
        </div>

        <div className="submit-btn">
          <button onClick={handleSubmit}>Submit Answer</button>
        </div>

        {/* Display the result */}
        <div className="result">
          <h3>Result:</h3>
          <p>
            {rreturn === questions[forward].output
              ? "Congrats! You are correct."
              : "Failed! No issue, try again."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programming;
