package com.teamproject.backend.model.dto;

import java.util.List;

public class UserDto {
    private String name;
    private String email;
    private String password;
    private Integer age;
    private Float height;
    private Float weight;
    private List<Long> exercises;
    private List<Long> progresses;
    private List<Long> workouts;

    public UserDto() {
    }

    public UserDto(String name, String email, String password, Integer age, Float height, Float weight,
                   List<Long> exercises, List<Long> progresses, List<Long> workouts) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.exercises = exercises;
        this.progresses = progresses;
        this.workouts = workouts;
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

    public List<Long> getExercises() {
        return exercises;
    }

    public List<Long> getProgresses() {
        return progresses;
    }

    public List<Long> getWorkouts() {
        return workouts;
    }
}
