package com.eve.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.eve.backend.exception.QuestionNotFoundException;
import com.eve.backend.model.Question;
import com.eve.backend.repository.QuestionRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class QuestionController {

    @Autowired
    private QuestionRepository QuestionRepository;

    @PostMapping("/question")
    Question newQuestion(@RequestBody Question newQuestion) {
        return QuestionRepository.save(newQuestion);
    }

    @GetMapping("/questions")
    List<Question> getAllQuestions() {
        return QuestionRepository.findAll();
    }

    @GetMapping("/question/{id}")
    Question getQuestionById(@PathVariable Long id) { //id is the variable in the url path
        return QuestionRepository.findById(id)
                .orElseThrow(() -> new QuestionNotFoundException(id));
    }

    @PutMapping("/question/{id}")
    Question updateQuestion(@RequestBody Question newQuestion, @PathVariable Long id) {
        return QuestionRepository.findById(id)
                .map(question -> {
                    question.setQuestion(newQuestion.getQuestion());
                    question.setAnswer(newQuestion.getAnswer());
                    question.setType(newQuestion.getType()); 
                    question.setLevel(newQuestion.getLevel()); 
                    return QuestionRepository.save(question);
                }).orElseThrow(() -> new QuestionNotFoundException(id));
    }

    @PutMapping("/questionLevel/{id}")
    Question updateQuestionLevel(@PathVariable Long id, @RequestParam Long newValue) {
        return QuestionRepository.findById(id)
                .map(question -> {
                    long updatedLevel = question.getLevel() + newValue; // Calculate the updated level
                    question.setLevel(updatedLevel); // Update the level
                    return QuestionRepository.save(question);
                }).orElseThrow(() -> new QuestionNotFoundException(id));
    }
    
    @DeleteMapping("/question/{id}")
    String deleteQuestion(@PathVariable Long id){
        if(!QuestionRepository.existsById(id)){
            throw new QuestionNotFoundException(id);
        }
        QuestionRepository.deleteById(id);
        return  "Question with id "+id+" has been deleted success.";
    }
}