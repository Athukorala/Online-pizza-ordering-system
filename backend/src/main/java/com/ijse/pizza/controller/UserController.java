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
    public void saveCustomer(@RequestBody UserDTO customerDTO) {
        System.out.println("Cus controller: "+customerDTO);
        service.saveCustomer(customerDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable("id") int customerId) {

        service.deleteCustomer(customerId);
    }

    @PostMapping("/{id}")
    public void updateCustomer(@PathVariable("id") int customerId,
                               @RequestBody UserDTO customerDTO) {
        System.out.println("id: "+customerId);
        System.out.println(customerDTO);

        service.updateCustomer(customerId, customerDTO);
    }

    @GetMapping("/{id}")
    public UserDTO findCustomer(@PathVariable("id") int customerId) {
        System.out.println(customerId);
        return service.findCustomer(customerId);
    }

    @GetMapping
    public Object findAllCustomers(@RequestParam(value = "action", required = false) String action
            , @RequestParam(value = "name", required = false) String name) { //action=count | action=like | name=tharindu
        if (action != null) {
            switch (action) {
                case "count":
                    return service.getCustomersCount();
                case "like":
                    return service.findCustomersLike(name);
                default:
                    return service.findAllCustomers();
            }
        } else {
            return service.findAllCustomers();
        }
    }
}
