import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=25&type=multiple")
      .then((response) => {
        setQuestions(response.data.results);
      });
  }, []);

  function restartGame() {
    window.location.reload();
  }

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      swal("Congrats!", "It's The Correct Answer! +5 Added :)", "success");
      setScore(score + 5);
    } else {
      swal(
        "Wrong Answer!",
        ` The Correct Answer Was: ${answer} . -2 Deducted :( `,
        "error"
      );
      setScore(score - 2);
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
  return (
    <>
      <h1 className="text-center">
        <span>Play Quiz</span>
      </h1>
      <p style={{color:"blue"}}>
        <b>Note:</b>&nbsp;
        This Quiz Consists Of Negative Marking!<br/>
        <span style={{color:"green"}}>+5 For Correct Answer.</span><br/>
        <span style={{color:"red"}}> -2 For Wrong Answer.</span>
      </p>
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
            <center>
              <div id="btncolourfix">
                {questions[currentQuestion].incorrect_answers.map((answer) => (
                  <button key={answer} onClick={() => handleAnswer(answer)}>
                    {answer}
                  </button>
                ))}
                <button
                  onClick={() =>
                    handleAnswer(questions[currentQuestion].correct_answer)
                  }
                >
                  {questions[currentQuestion].correct_answer}
                </button>
              </div>
            </center>
          </div>
        ) : (
          <div>Loading The Best Questions For You...</div>
        )}
      </div>
      <center>
        <h3 className="btn mt-3" onClick={restartGame}>
          <i className="fa-solid fa-rotate-right"></i>&nbsp;Restart
        </h3>
      </center>
    </>
  );
};

export default QuizApp;
