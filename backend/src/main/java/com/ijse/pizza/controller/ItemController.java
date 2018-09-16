package com.ijse.pizza.controller;

import com.ijse.pizza.dto.ItemDTO;
import com.ijse.pizza.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/items")
public class ItemController {
    @Autowired
    private ItemService service;

    @PutMapping
    public void saveUser(@RequestBody ItemDTO itemDTO) {
        System.out.println(itemDTO);
        service.saveItem(itemDTO);
    }

}
