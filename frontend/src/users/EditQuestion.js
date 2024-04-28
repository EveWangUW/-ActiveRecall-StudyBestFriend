import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser2() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [question, setQuestion] = useState({
    question: "",
    answer: "",
    type: "",
    level: 0,
  });

  const { question: questionText, answer, type, level } = question;

  const onInputChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadquestion();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/question/${id}`, question);
    navigate("/");
  };

  const loadquestion = async () => {
    const result = await axios.get(`http://localhost:8080/question/${id}`);
    setQuestion(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Question</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="question" className="form-label">
                Question
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the question"
                name="question"
                value={questionText}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="answer" className="form-label">
                Answer
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the answer"
                name="answer"
                value={answer}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the type"
                name="type"
                value={type}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="level" className="form-label">
                Level
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter the level"
                name="level"
                value={level}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
