package com.teamproject.backend.model.dto;


import java.util.List;

public class WorkoutDto {
    private String name;
    private List<Long> users;
    private List<Long> plans;
    private List<Long> exercises;

    public WorkoutDto(String name, List<Long> users, List<Long> plans, List<Long> exercises) {
        this.name = name;
        this.users = users;
        this.plans = plans;
        this.exercises = exercises;
    }

    public String getName() {
        return name;
    }

    public List<Long> getUsers() {
        return users;
    }

    public List<Long> getPlans() {
        return plans;
    }

    public List<Long> getExercises() {
        return exercises;
    }
}
