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
    public void saveUser(UserDTO dto) {
        System.out.println("service");
        System.out.println(dto);
        repository.save(new User(dto.getName(),dto.getAddress(),dto.getEmail(),dto.getBday(),dto.getCountry(),dto.getNumber(),dto.getPassword(),dto.getInstagram(),dto.getFb(),dto.getTwitter()));
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void updateUser(int UserId, UserDTO dto) {

    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void deleteUser(int UserId) {

    }

    @Override
    public UserDTO findUser(int UserId) {

        User user=repository.findById(UserId).get();
        return new UserDTO(user.getId(),user.getName(),user.getAddress(),user.getEmail(),user.getBday(),user.getCountry(),user.getNumber(),user.getPassword(),user.getInstagram(),user.getFb(),user.getTwitter());
    }

    @Override
    public List<UserDTO> findAllUsers() {
        List<User> user =  repository.findAll();
        System.out.println(user);
        List<UserDTO> list = new ArrayList<>();
        for (User entity : user){
            System.out.println(entity);
            UserDTO dto = new UserDTO(entity.getId(),entity.getName(),entity.getAddress(),entity.getEmail(),entity.getBday(),entity.getCountry(),entity.getNumber(),entity.getInstagram(),entity.getFb(),entity.getTwitter());
            list.add(dto);
        }
        return list;

    }

    @Override
    public List<UserDTO> findUsersLike(String name) {

        return null;
    }

    @Override
    public long getUsersCount() {

        return 0;
    }

    @Override
    public UserDTO checkAccount(String email, String password) {
        User user= repository.checkAccount(email,password);
        System.out.println("okk");
        System.out.println(user);
        if(user != null){
            return new UserDTO(user.getId(),user.getName(),user.getAddress(),user.getEmail(),user.getBday(),user.getCountry(),user.getNumber(),user.getPassword(),user.getInstagram(),user.getFb(),user.getTwitter());
        }else{
            return null;
        }

    }


}
