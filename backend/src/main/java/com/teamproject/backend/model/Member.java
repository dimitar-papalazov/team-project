package com.teamproject.backend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private Integer age;
    private Float height;
    private Float weight;

    public Member() {
    }

    public Member(String name, String email, String password, Integer age, Float height, Float weight) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public Integer getAge() {
        return age;
    }

    public Float getHeight() {
        return height;
    }

    public Float getWeight() {
        return weight;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public void setHeight(Float height) {
        this.height = height;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }
}
