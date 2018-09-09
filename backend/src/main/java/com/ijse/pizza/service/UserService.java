package com.ijse.pizza.service;

import com.ijse.pizza.dto.UserDTO;

import java.util.List;

public interface UserService {

    void saveCustomer(UserDTO dto);

    void updateCustomer(int customerId, UserDTO dto);

    void deleteCustomer(int customerId);

    UserDTO findCustomer(int customerId);

    List<UserDTO> findAllCustomers();

    List<UserDTO> findCustomersLike(String name);

    long getCustomersCount();

}
