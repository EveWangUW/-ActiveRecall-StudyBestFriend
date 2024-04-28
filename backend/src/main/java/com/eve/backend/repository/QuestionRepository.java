package com.eve.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eve.backend.model.Question;

public interface QuestionRepository extends JpaRepository<Question,Long>{
    //Long is the data type of the primary key in User
}
