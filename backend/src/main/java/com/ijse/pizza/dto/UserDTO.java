package com.ijse.pizza.dto;

import java.io.Serializable;

public class UserDTO implements Serializable {
    private int id;
    private String name;
    private String address;
    private String image;


    public UserDTO() {
    }

    public UserDTO(int id, String name, String address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    public UserDTO(int id) {
        this.id = id;
    }

    public UserDTO(String name, String address) {

        this.name = name;
        this.address = address;
    }

    public UserDTO(int id, String name, String address, String image) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
