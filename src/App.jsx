import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: "What is the capital city of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    correctAnswer: "Islamabad"
  },
  {
    question: "Which mountain range is located in Pakistan?",
    options: ["Andes", "Himalayas", "Alps", "Rocky Mountains"],
    correctAnswer: "Himalayas"
  },
  {
    question: "Pakistan shares its longest border with which country?",
    options: ["China", "India", "Afghanistan", "Iran"],
    correctAnswer: "India"
  },
  {
    question: "What is the national language of Pakistan?",
    options: ["Urdu", "English", "Pashto", "Punjabi"],
    correctAnswer: "Urdu"
  },
  {
    question: "Which river is the longest in Pakistan?",
    options: ["Indus", "Jhelum", "Chenab", "Ravi"],
    correctAnswer: "Indus"
  },
  {
    question: "The famous archaeological site 'Mohenjo-Daro' is located in which province of Pakistan?",
    options: ["Sindh", "Punjab", "Khyber Pakhtunkhwa", "Balochistan"],
    correctAnswer: "Sindh"
  },
  {
    question: "Pakistan became an independent nation in which year?",
    options: ["1945", "1946", "1947", "1948"],
    correctAnswer: "1947"
  },
  {
    question: "Which Pakistani cricketer has the most international centuries?",
    options: ["Shahid Afridi", "Inzamam-ul-Haq", "Younis Khan", "Babar Azam"],
    correctAnswer: "Younis Khan"
  },
  {
    question: "The K2 mountain, the second-highest peak in the world, is located in which mountain range of Pakistan?",
    options: ["Karakoram", "Hindu Kush", "Pamir", "Sulaiman"],
    correctAnswer: "Karakoram"
  },
  {
    question: "Which of the following is the national flower of Pakistan?",
    options: ["Jasmine", "Rose", "Sunflower", "Tulip"],
    correctAnswer: "Jasmine"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerOptionClick = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    setUserAnswers(prevState => {
      const updatedUserAnswers = [...prevState];
      updatedUserAnswers[currentQuestion] = isCorrect;
      return updatedUserAnswers;
    });
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const summary = (
    <div className="summary">
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index} className={userAnswers[index] ? 'correct' : 'wrong'}>
              <td>{question.question}</td>
              <td>{userAnswers[index] ? 'Correct' : 'Wrong'}</td>
              <td>{question.correctAnswer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="final-score">
        You scored {score} out of {questions.length}
      </div>
    </div>
  );

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Summary</h2>
          {summary}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerOptionClick(option)}>{option}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
