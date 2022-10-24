package com.teamproject.backend.model.dto;


import java.util.ArrayList;
import java.util.List;

public class WorkoutDto {
    private String name;
    private Long user;
    private List<Long> plans;
    private List<Long> exercises;

    public WorkoutDto(String name, Long user, List<Long> plans) {
        this.name = name;
        this.user = user;
        this.plans = plans;
        this.exercises = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public Long getUser() {
        return user;
    }

    public List<Long> getPlans() {
        return plans;
    }

    public List<Long> getExercises() {
        return exercises;
    }
}
