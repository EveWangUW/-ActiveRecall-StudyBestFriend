import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewquestion() {

  const { id } = useParams();

  const [question, setQuestion] = useState({
    question: "",
    answer: "",
    type: "",
    level: 0,
  });

  const { question: questionText, answer, type, level } = question;

  useEffect(() => {
    loadquestion();
  }, []);

  const loadquestion = async () => {
    const result = await axios.get(`http://localhost:8080/question/${id}`);
    setQuestion(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">question Details</h2>

          <div className="card">
            <div className="card-header">
              Details of question id : {question.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Question:</b>
                  {questionText}
                </li>
                <li className="list-group-item">
                  <b>Answer:</b>
                  {answer}
                </li>
                <li className="list-group-item">
                  <b>Type</b>
                  {type}
                </li>
                <li className="list-group-item">
                  <b>Level</b>
                  {level}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
