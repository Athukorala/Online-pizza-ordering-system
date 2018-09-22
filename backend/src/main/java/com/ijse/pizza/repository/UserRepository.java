package com.ijse.pizza.repository;

import com.ijse.pizza.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface UserRepository extends JpaRepository<User, Integer> {

    //    @Query("SELECT c FROM User c WHERE c.email=?#{[0]} AND c.password=?#{[1]}")
    @Query(value = "SELECT * FROM USER where email=?1 AND password=?2" , nativeQuery = true)
    User checkAccount(String email, String password);

}
