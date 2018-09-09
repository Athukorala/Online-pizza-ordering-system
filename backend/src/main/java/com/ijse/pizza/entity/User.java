package com.ijse.pizza.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "User")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String address;
    private String image;

    public User() {
    }

    public User(int id) {
        this.setId(id);
    }

    public User(int id, String name, String address) {
        this.setId(id);
        this.setName(name);
        this.setAddress(address);
    }
    public User(String name, String address) {

        this.setName(name);
        this.setAddress(address);
    }

    public User(int id, String name, String address, String image) {
        this.setId(id);
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
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
