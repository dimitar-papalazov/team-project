package com.teamproject.backend.model.dto;

import java.util.List;

public class ExerciseDto {
    private String name;
    private Integer sets;
    private Integer goal;
    private String url;
    private Long user;
    private List<Long> workouts;

    public ExerciseDto(String name, Integer sets, Integer goal, String url, Long user, List<Long> workouts) {
        this.name = name;
        this.sets = sets;
        this.goal = goal;
        this.url = url;
        this.user = user;
        this.workouts = workouts;
    }

    public String getName() {
        return name;
    }

    public Integer getSets() {
        return sets;
    }

    public Integer getGoal() {
        return goal;
    }

    public String getUrl() {
        return url;
    }

    public List<Long> getWorkouts() {
        return workouts;
    }

    public Long getUser() {
        return user;
    }
}
