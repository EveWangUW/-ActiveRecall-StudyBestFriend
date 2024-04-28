import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [questions, setquestions] = useState([]);//the initial value is an empty [], there is no type so the array can contain elements of any type.

  useEffect(() => {
    loadquestions();
  }, []);

  const loadquestions = async () => {
    const result = await axios.get("http://localhost:8080/questions");
    setquestions(result.data);//result.data contains the response body in json format still
  };

  const deletequestion = async (id) => {
    await axios.delete(`http://localhost:8080/question/${id}`);
    loadquestions();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">ID</th>
              <th scope="col">Question</th>
              <th scope="col">Answer</th>
              <th scope="col">Type</th>
              <th scope="col">Level</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{question.id}</td>
                <td>{question.question}</td>
                <td>{question.answer}</td>
                <td>{question.type}</td>
                <td>{question.level}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewquestion/${question.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editquestion/${question.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletequestion(question.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}