package com.ijse.pizza.repository;

import com.ijse.pizza.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Integer> {

//    List<User> findCustomersByNameLike(String name);

    @Query("SELECT c FROM User c WHERE c.name LIKE ?#{[0]}")
//    List<User> letsFindSomeCustomers(@Param("customerId") String name);
    List<User> letsFindSomeCustomers(String name);

//    @Query("SELECT oid from orders")
//    Lisr<Integer>
}
