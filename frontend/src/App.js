import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddQuestion from "./users/AddQuestion";
import EditQuestion from "./users/EditQuestion";
import ViewQuestion from "./users/ViewQuestion";
import FlashcardPage from "./pages/FlashcardPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/editquestion/:id" element={<EditQuestion />} />
          <Route exact path="/viewquestion/:id" element={<ViewQuestion />} />
          <Route exact path="/flashcard" element={<FlashcardPage/>}/>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addquestion" element={<AddQuestion />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;