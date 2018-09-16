package com.ijse.pizza.entity;

import javax.persistence.*;

@Entity
@Table(name = "Item")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int code;
    private String name;
    private String description;
    private String type;
    private double small;
    private double medium;
    private double large;

    public Item() {
    }

    public Item(int code, String name, String description, String type, double small, double medium, double large) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.type = type;
        this.small = small;
        this.medium = medium;
        this.large = large;
    }
    public Item(String name, String description, String type, double small, double medium, double large) {

        this.name = name;
        this.description = description;
        this.type = type;
        this.small = small;
        this.medium = medium;
        this.large = large;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getSmall() {
        return small;
    }

    public void setSmall(double small) {
        this.small = small;
    }

    public double getMedium() {
        return medium;
    }

    public void setMedium(double medium) {
        this.medium = medium;
    }

    public double getLarge() {
        return large;
    }

    public void setLarge(double large) {
        this.large = large;
    }

    @Override
    public String toString() {
        return "Item{" +
                "code=" + code +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", type='" + type + '\'' +
                ", small=" + small +
                ", medium=" + medium +
                ", large=" + large +
                '}';
    }
}
