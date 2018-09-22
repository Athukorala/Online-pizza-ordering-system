package com.ijse.pizza.service.impl;

import com.ijse.pizza.dto.ItemDTO;
import com.ijse.pizza.entity.Item;
import com.ijse.pizza.repository.ItemRepository;
import com.ijse.pizza.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository repository;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void saveItem(ItemDTO dto) {
        System.out.println("item service");
        repository.save(new Item(dto.getName(),dto.getDescription(),dto.getType(),dto.getSmall(),dto.getMedium(),dto.getLarge()));
    }

    @Override
    public void updateItem(int itemId, ItemDTO dto) {

    }

    @Override
    public void deleteItem(int itemId) {

    }

    @Override
    public ItemDTO findItem(int itemId) {

        return null;
    }

    @Override
    public List<ItemDTO> findAllItems() {
        List<Item> item =  repository.findAll();
        List<ItemDTO> list = new ArrayList<>();
        for (Item entity : item){
            ItemDTO dto = new ItemDTO(entity.getCode(),entity.getName(),entity.getDescription(),entity.getType(),entity.getSmall(),entity.getMedium(),entity.getLarge());
            list.add(dto);
        }
        return list;
    }

    @Override
    public long getItemsCount() {
        return 0;
    }
}
