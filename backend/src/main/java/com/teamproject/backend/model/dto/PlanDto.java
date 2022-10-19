package com.teamproject.backend.model.dto;

import java.util.List;

public class PlanDto {
    private String name;
    private List<Long> workouts;
    private List<Long> users;

    public PlanDto() {
    }

    public PlanDto(String name, List<Long> workouts, List<Long> users) {
        this.name = name;
        this.workouts = workouts;
        this.users = users;
    }

    public String getName() {
        return name;
    }

    public List<Long> getWorkouts() {
        return workouts;
    }

    public List<Long> getUsers() {
        return users;
    }
}
