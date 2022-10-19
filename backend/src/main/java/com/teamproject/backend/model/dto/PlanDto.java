package com.teamproject.backend.model.dto;

import java.util.List;

public class PlanDto {
    private String name;
    private List<Long> workouts;
    private Long user_id;

    public PlanDto() {
    }

    public PlanDto(String name, List<Long> workouts, Long user_id) {
        this.name = name;
        this.workouts = workouts;
        this.user_id = user_id;
    }

    public String getName() {
        return name;
    }

    public List<Long> getWorkouts() {
        return workouts;
    }

    public Long getUser_id() {
        return user_id;
    }
}
