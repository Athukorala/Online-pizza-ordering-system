package com.ijse.pizza.controller;

import com.ijse.pizza.dto.UserDTO;
import com.ijse.pizza.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/users")

public class UserController {

    @Autowired
    private UserService service;

    @PutMapping
    public void saveUser(@RequestBody UserDTO UserDTO) {
        System.out.println(UserDTO);
        service.saveUser(UserDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") int UserId) {

        service.deleteUser(UserId);
    }

    @PostMapping("/{id}")
    public void updateUser(@PathVariable("id") int UserId,
                           @RequestBody UserDTO UserDTO) {
        System.out.println("id: " + UserId);
        System.out.println(UserDTO);

        service.updateUser(UserId, UserDTO);
    }

    @GetMapping("/{id}")
    public UserDTO findUser(@PathVariable("id") int UserId) {
        System.out.println(UserId);
        return service.findUser(UserId);
    }

    @GetMapping
    public Object findAllUsers(@RequestParam(value = "action", required = false) String action
            , @RequestParam(value = "name", required = false) String name) { //count | like=tharindu | (name=tharindu)
        if (action != null) {
            switch (action) {
                case "count":
                    return service.getUsersCount();
                case "like":
                    return service.findUsersLike(name);
                default:
                    return service.findAllUsers();
            }
        } else {
            return service.findAllUsers();
        }
    }

    @PostMapping
    public Object checkAccount(@RequestBody UserDTO UserDTO) {

        System.out.println(UserDTO.getEmail());
        System.out.println(UserDTO.getPassword());

        return service.checkAccount(UserDTO.getEmail(),UserDTO.getPassword());
    }
}
