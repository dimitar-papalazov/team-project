package com.teamproject.backend.model.dto;

import java.util.List;

public class PlanDto {
    private String name;
    private Long user_id;

    public PlanDto() {
    }

    public PlanDto(String name, Long user_id) {
        this.name = name;
        this.user_id = user_id;
    }

    public String getName() {
        return name;
    }

    public Long getUser_id() {
        return user_id;
    }
}
