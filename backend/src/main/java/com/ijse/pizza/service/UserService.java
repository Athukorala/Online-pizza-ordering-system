package com.ijse.pizza.service;

import com.ijse.pizza.dto.UserDTO;

import java.util.List;

public interface UserService {

    void saveUser(UserDTO dto);

    void updateUser(int UserId, UserDTO dto);

    void deleteUser(int UserId);

    UserDTO findUser(int UserId);

    List<UserDTO> findAllUsers();

    List<UserDTO> findUsersLike(String name);

    long getUsersCount();

    UserDTO checkAccount(String email, String password);

}
