package com.babs.pixel_palette_api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // This annotation specifies that the class is an entity and is mapped to a database table
public class User {

    @Id // This annotation specifies the primary key of an entity Every table needs exactly one of these.
    @GeneratedValue(strategy = GenerationType.IDENTITY) // This annotation provides for the specification of generation strategies for the values of primary keys
    private int id;

    private String username;
    private String password;

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}