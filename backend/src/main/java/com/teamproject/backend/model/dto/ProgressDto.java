package com.teamproject.backend.model.dto;

import java.util.Date;
import java.util.List;

public class ProgressDto {
    private Integer value;
    private Date date;
    private String type;
    private Long user;
    private Long exercise;

    public ProgressDto(Integer value, Date date, String type, Long user, Long exercise) {
        this.value = value;
        this.date = date;
        this.type = type;
        this.user = user;
        this.exercise = exercise;
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

    public Long getUser() {
        return user;
    }

    public Long getExercise() {
        return exercise;
    }
}
