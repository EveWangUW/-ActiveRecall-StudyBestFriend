package com.eve.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eve.backend.model.User;

public interface UserRepository extends JpaRepository<User,Long>{
    //Long is the data type of the primary key in User


}
