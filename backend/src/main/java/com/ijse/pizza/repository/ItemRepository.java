package com.ijse.pizza.repository;

import com.ijse.pizza.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository  extends JpaRepository<Item, Integer> {
}
