import React, { useState } from "react";
import { useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  useEffect(() => {

    if (!timeRemaining){
      onAnswered(false)
      setTimeRemaining(3)
      return;
    }

    const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
    return function cleanup() {
      clearTimeout(timer);
    };
    
  }, [timeRemaining]);


  function handleAnswer(isCorrect) {
    if(isCorrect){
      setTimeRemaining(10)
      onAnswered(false)
      console.log("correct")
    }
    
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
