package com.teamproject.backend.model.dto;

import java.util.Date;
import java.util.List;

public class ProgressDto {
    private Integer value;
    private Date date;
    private String type;
    private List<Long> users;
    private List<Long> exercises;

    public ProgressDto(Integer value, Date date, String type, List<Long> users, List<Long> exercises) {
        this.value = value;
        this.date = date;
        this.type = type;
        this.users = users;
        this.exercises = exercises;
    }

    public Integer getValue() {
        return value;
    }

    public Date getDate() {
        return date;
    }

    public String getType() {
        return type;
    }

    public List<Long> getUsers() {
        return users;
    }

    public List<Long> getExercises() {
        return exercises;
    }
}
