package com.ijse.pizza.service;

import com.ijse.pizza.dto.ItemDTO;

import java.util.List;

public interface ItemService {
    void saveItem(ItemDTO dto);

    void updateItem(int itemId, ItemDTO dto);

    void deleteItem(int itemId);

    ItemDTO findItem(int itemId);

    List<ItemDTO> findAllItems();

    long getItemsCount();
}
