package com.eve.backend.exception;

public class QuestionNotFoundException extends RuntimeException{
    public QuestionNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }

}
