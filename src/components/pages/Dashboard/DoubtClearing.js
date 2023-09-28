import React, { useState } from "react";
import axios from "axios";

const DoubtClearing = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleMessageSubmit = async () => {
    if (!userInput || isLoading) return; // Don't send empty questions or when loading

    setIsLoading(true); // Set loading state

    const currentQuestionNumber = questionNumber;
    setChatHistory((prevHistory) => [
      ...prevHistory,
      {
        question: userInput,
        answer: "Thinking...",
        questionNumber: currentQuestionNumber,
      },
    ]);
    setQuestionNumber(currentQuestionNumber + 1);

    const apiUrl = "https://api.openai.com/v1/engines/davinci/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer sk-${process.env.REACT_APP_OPEN_AI_KEY}`,
    };
    console.log(process.env.REACT_APP_OPEN_AI_KEY);
    try {
      const response = await axios.post(
        apiUrl,
        {
          prompt: `Q.${currentQuestionNumber}) ${userInput}\nA:`,
          max_tokens: 100,
          temperature: 0,
          stop: ["\n"],
        },
        { headers }
      );

      const answer = response.data.choices[0].text.trim();
      setChatHistory((prevHistory) => {
        const updatedHistory = prevHistory.map((item) => {
          if (item.questionNumber === currentQuestionNumber) {
            return {
              ...item,
              answer,
            };
          }
          return item;
        });
        return updatedHistory;
      });
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.error?.message || "Something went wrong!";
      setChatHistory((prevHistory) => {
        const updatedHistory = prevHistory.map((item) => {
          if (item.questionNumber === currentQuestionNumber) {
            return {
              ...item,
              answer: `Error: ${errorMessage}`,
            };
          }
          return item;
        });
        return updatedHistory;
      });
    } finally {
      setIsLoading(false); // Reset loading state
    }

    setUserInput("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm">
          <span>
            <h1 className="text-center mb-4">Your 24x7 Doubt Clearing Bot</h1>
          </span>
          <div className="card dcbgcss">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type Your Question Here..."
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                disabled={isLoading} // Disable input while loading
              />
              <button
                className="btn"
                type="button"
                onClick={handleMessageSubmit}
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
            <div className="card-body">
              <h3 className="text-center">Doubts Asked Till Now:</h3>
              <div className="chat-history mt-2">
                {chatHistory.map((chat) => (
                  <div
                    key={chat.questionNumber}
                    className={`chat-message ${
                      chat.answer !== "Thinking..." ? "ai" : ""
                    } mt-3`}
                  >
                    <div className="chat-bubble">
                      Q.{chat.questionNumber} {chat.question}
                    </div>
                    {chat.answer !== "Thinking..." && (
                      <div className="chat-bubble ai">Ans: {chat.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtClearing;
