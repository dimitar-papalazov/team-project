package com.teamproject.backend.model.dto;

import java.util.List;

public class ExerciseDto {
    private String name;
    private Integer sets;
    private Integer goal;
    private String url;
    private List<Long> users;
    private List<Long> workouts;
    private List<Long> progresses;

    public ExerciseDto(String name, Integer sets, Integer goal, String url, List<Long> users, List<Long> workouts, List<Long> progresses) {
        this.name = name;
        this.sets = sets;
        this.goal = goal;
        this.url = url;
        this.users = users;
        this.workouts = workouts;
        this.progresses = progresses;
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

    public List<Long> getUsers() {
        return users;
    }

    public List<Long> getWorkouts() {
        return workouts;
    }

    public List<Long> getProgresses() {
        return progresses;
    }
}
