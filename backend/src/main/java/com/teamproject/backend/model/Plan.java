package com.teamproject.backend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @ManyToMany
    private List<Workout> workouts;
    @ManyToOne
    private Member member;

    public Plan() {
    }

    public Plan(String name, List<Workout> workouts, Member member) {
        this.name = name;
        this.workouts = workouts;
        this.member = member;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Workout> getWorkouts() {
        return workouts;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setWorkouts(List<Workout> workouts) {
        this.workouts = workouts;
    }

}
