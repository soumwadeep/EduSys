import React, { useEffect, useState } from "react";
import axios from "axios";

const PlayQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    axios
      .get(
        "https://the-trivia-api.com/api/questions?categories=arts_and_literature,film_and_tv,general_knowledge,food_and_drink,geography,music,history,science,society_and_culture,sport_and_leisure&limit=20&difficulty=medium"
      )
      .then((response) => {
        setQuestions(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimeLeft(10);
    }
  }, [timeLeft]);

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setTimeLeft(10);
  };

  if (currentQuestion === questions.length) {
    return <h2>Your score is {score}</h2>;
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <h3>{questions[currentQuestion].question}</h3>
      <p>Time left: {timeLeft} seconds</p>
      <ul>
        {questions[currentQuestion].incorrect_answers.map((answer) => (
          <li key={answer}>
            <button onClick={() => handleAnswerClick(answer)}>{answer}</button>
          </li>
        ))}
        <li key={questions[currentQuestion].correct_answer}>
          <button
            onClick={() =>
              handleAnswerClick(questions[currentQuestion].correct_answer)
            }
          >
            {questions[currentQuestion].correct_answer}
          </button>
        </li>
      </ul>
      <p>Score: {score}</p>
    </div>
  );
};

export default PlayQuiz;
