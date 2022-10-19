package com.teamproject.backend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @ManyToMany
    private List<Member> members;
    @ManyToMany
    private List<Plan> plans;
    @ManyToMany
    private List<Exercise> exercises;

    public Workout() {
    }

    public Workout(String name, List<Member> members, List<Plan> plans, List<Exercise> exercises) {
        this.name = name;
        this.members = members;
        this.plans = plans;
        this.exercises = exercises;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Member> getMembers() {
        return members;
    }

    public List<Plan> getPlans() {
        return plans;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMembers(List<Member> members) {
        this.members = members;
    }

    public void setPlans(List<Plan> plans) {
        this.plans = plans;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }
}
