package com.ijse.pizza.entity;

import javax.persistence.*;

@Entity
@Table(name = "User")
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String address;
    private String email;
    private String bday;
    private String country;
    private String number;
    private String password;
    private String instagram;
    private String fb;
    private String twitter;

    public User() {
    }

    public User(String name, String address, String email, String bday, String country, String number, String password, String instagram, String fb, String twitter) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.bday = bday;
        this.country = country;
        this.number = number;
        this.password = password;
        this.instagram = instagram;
        this.fb = fb;
        this.twitter = twitter;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBday() {
        return bday;
    }

    public void setBday(String bday) {
        this.bday = bday;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getInstagram() {
        return instagram;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public String getFb() {
        return fb;
    }

    public void setFb(String fb) {
        this.fb = fb;
    }

    public String getTwitter() {
        return twitter;
    }

    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }



    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                ", bday='" + bday + '\'' +
                ", country='" + country + '\'' +
                ", number='" + number + '\'' +
                ", password='" + password + '\'' +
                ", instagram='" + instagram + '\'' +
                ", fb='" + fb + '\'' +
                ", twitter='" + twitter + '\'' +
                '}';
    }
}
