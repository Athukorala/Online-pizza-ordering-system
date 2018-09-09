package com.ijse.pizza.service.impl;

import com.ijse.pizza.dto.UserDTO;
import com.ijse.pizza.entity.User;
import com.ijse.pizza.repository.UserRepository;
import com.ijse.pizza.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void saveCustomer(UserDTO dto) {

        repository.save(new User(dto.getId(), dto.getName(), dto.getAddress(), dto.getImage()));
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void updateCustomer(int customerId, UserDTO dto) {
        if (!String.valueOf(dto.getId()).equalsIgnoreCase(String.valueOf(customerId))) {
            throw new RuntimeException("User ID mismatched");
        }
        if (repository.existsById(customerId)) {
            repository.save(new User(dto.getId(), dto.getName(), dto.getAddress() ,dto.getImage()));
        }else{
            throw new RuntimeException("User doesn't exist");
        }
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void deleteCustomer(int customerId) {
        repository.deleteById(customerId);

    }

    @Override
    public UserDTO findCustomer(int customerId) {
        System.out.println(customerId);
        User customer = repository.findById(customerId).get();

        return new UserDTO(customer.getId(), customer.getName(), customer.getAddress(),customer.getImage());
    }

    @Override
    public List<UserDTO> findAllCustomers() {
        List<User> allCustomers = repository.findAll();
        System.out.println(allCustomers);
        List<UserDTO> dtos = new ArrayList<>();
        allCustomers.forEach(c -> dtos.add(new UserDTO(c.getId(), c.getName(), c.getAddress(),c.getImage())));
        return dtos;
    }

    @Override
    public List<UserDTO> findCustomersLike(String name) {
        List<User> allCustomers =  repository.letsFindSomeCustomers(name + "%");
        List<UserDTO> dtos = new ArrayList<>();
        allCustomers.forEach(c -> dtos.add(new UserDTO(c.getId(), c.getName(), c.getAddress())));
        return dtos;
    }

    @Override
    public long getCustomersCount() {

        return  repository.count();
    }
}
