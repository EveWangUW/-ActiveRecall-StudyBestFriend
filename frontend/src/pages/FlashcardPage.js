import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Flashcard() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/questions')
      .then(response => setQuestions(response.data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % questions.length);
  };

 
  const RecordTime = (timeThreshold) => {
    const questionId = questions[currentQuestionIndex].id;
    
    axios.put(`http://localhost:8080/questionLevel/${questionId}?newValue=${timeThreshold}`)
      .then(response => {
        console.log('Question updated:', response.data);
        window.alert('Question level updated successfully!');
      })
      .catch(error => {
        console.error('Error updating question:', error);
        window.alert('Error updating question. Please try again.');
      });
  };
  

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mt-5"> {/* Apply Bootstrap container class */}
      <div className="card"> {/* Apply Bootstrap card class */}
        <div className="card-header bg-primary text-white">Question:</div> {/* Apply Bootstrap card-header class */}
        <div className="card-body">
          <p className="card-text">{currentQuestion.question}</p>
          <div className="card-title">Answer:</div> {/* Apply Bootstrap card-title class */}
          {showAnswer && (
            <p className="card-text text-primary">{currentQuestion.answer}</p> 
          )}
          <button className="btn btn-primary mr-2" onClick={handleShowAnswer}>Show Answer</button> {/* Apply Bootstrap btn and btn-primary classes */}
          <button className="btn btn-primary" onClick={handleNextQuestion}>Next Question</button> {/* Apply Bootstrap btn and btn-primary classes */}
        </div>
        <div className="mt-3">
            <div className="btn-group" role="group" aria-label="Level of familiarity">
              <button type="button" className="btn btn-success" onClick={() => RecordTime(5)}>Good (&lt;5min)</button>
              <button type="button" className="btn btn-warning" onClick={() => RecordTime(10)}>Okay (10min)</button>
              <button type="button" className="btn btn-danger" onClick={() => RecordTime(15)}>Bad (&gt;15min)</button>
            </div>
          </div>
      </div>
    </div>
  );
}