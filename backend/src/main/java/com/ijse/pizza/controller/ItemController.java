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
    public void saveItem(@RequestBody ItemDTO itemDTO) {
        System.out.println(itemDTO);
        service.saveItem(itemDTO);
    }

    @GetMapping
    public Object getAllItems(@RequestParam(value = "action", required = false) String action) { // action=count | (name=tharindu)
        if (action != null) {
            switch (action) {
                default:
                    return service.findAllItems();
            }
        } else {
            return service.findAllItems();
        }
    }



}
