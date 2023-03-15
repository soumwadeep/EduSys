import React, { useState } from 'react'
import axios from 'axios'

const DoubtClearing = () => {
  const [userInput, setUserInput] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [questionNumber, setQuestionNumber] = useState(1)

  const handleMessageSubmit = async () => {
    const currentQuestionNumber = questionNumber
    setChatHistory([
      ...chatHistory,
      {
        question: userInput,
        answer: 'Thinking...',
        questionNumber: currentQuestionNumber,
      },
    ])
    setQuestionNumber(currentQuestionNumber + 1)

    const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions' 
    //Cheapest
    //'https://api.openai.com/v1/engines/text-ada-001/completions'
    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer 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',
    }
    const data = {
      prompt: `Q.${currentQuestionNumber}) ${userInput}\nA:`,
      max_tokens: 100,
      temperature: 0,
      stop: ['\n'],
    }
    try {
      const response = await axios.post(apiUrl, data, { headers })
      const answer = response.data.choices[0].text.trim()
      setChatHistory((prevHistory) => {
        const updatedHistory = prevHistory.map((item) => {
          if (item.questionNumber === currentQuestionNumber) {
            return {
              ...item,
              answer,
            }
          }
          return item
        })
        return updatedHistory
      })
    } catch (error) {
      console.error(error)
      setChatHistory((prevHistory) => {
        const updatedHistory = prevHistory.map((item) => {
          if (item.questionNumber === currentQuestionNumber) {
            return {
              ...item,
              answer: 'Sorry, Something Went Wrong!',
            }
          }
          return item
        })
        return updatedHistory
      })
    }
    setUserInput('')
  }

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
              />
              <button
                className="btn"
                type="button"
                onClick={handleMessageSubmit}
              >
                Send
              </button>
            </div>
            <div className="card-body">
              <h3 className="text-center">Doubts Asked Till Now:</h3>
              <div className="chat-history mt-2">
                {chatHistory.map((chat) => (
                  <div
                    key={chat.questionNumber}
                    className={`chat-message ${
                      chat.answer !== 'loading...' ? 'ai' : ''
                    } mt-3`}
                  >
                    <div className="chat-bubble">
                      Q.{chat.questionNumber} {chat.question}
                    </div>
                    {chat.answer !== 'loading...' && (
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
  )
}

export default DoubtClearing
