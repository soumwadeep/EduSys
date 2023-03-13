import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=25&type=multiple")
      .then((response) => {
        setQuestions(response.data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      swal("Correct Answer!", "+5 Added :)", "success");
      setScore(score + 5);
    } else {
      swal("Wrong Answer!", " -2 Deducted :( ", "error");
      setScore(score - 2);
      setShowAnswer(true);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      swal(
        "Quiz Ended!",
        `Your score is ${score} out of ${questions.length}.`,
        "info"
      );
    }
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz Ended. Your score Is ${score} Out Of ${questions.length}.`);
    }
  };

  return (
    <>
      <h1 className="text-center">
        <span>Play Quiz</span>
      </h1>
      <div id="TakeNotesCss">
        <center>
          <h2 className="h2bg">Your Score: {score}</h2>
        </center>
        {questions.length > 0 ? (
          <div>
            <div>
              <h5>
                <span>
                  Question{" "}
                  <span style={{ color: "white" }}>{currentQuestion + 1}</span>{" "}
                  Out Of{" "}
                </span>
                <span style={{ color: "white" }}>{questions.length}</span>
              </h5>
            </div>
            <h3>
              <span style={{ color: "#060047" }}>
                {questions[currentQuestion].question}
              </span>
            </h3>
            <div id="btncolourfix">
              {questions[currentQuestion].incorrect_answers.map((answer) => (
                <button
                  key={answer}
                  onClick={() => handleAnswer(answer)}
                  disabled={showAnswer}
                >
                  {answer}
                </button>
              ))}
              <button
                onClick={() =>
                  handleAnswer(questions[currentQuestion].correct_answer)
                }
                disabled={showAnswer}
              >
                {questions[currentQuestion].correct_answer}
              </button>
              {showAnswer && (
                <div>
                  <h4 className="mt-3">The Correct Answer Was:</h4>
                  <p className="btngreen">
                    {questions[currentQuestion].correct_answer}
                  </p>
                </div>
              )}
            </div>
            {showAnswer && (
              <center>
                <button className="btn" onClick={handleNextQuestion}>
                  Next Question
                </button>
              </center>
            )}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default QuizApp;
