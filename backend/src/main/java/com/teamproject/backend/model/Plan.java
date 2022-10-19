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
    @ManyToMany
    private List<Member> members;

    public Plan() {
    }

    public Plan(String name, List<Workout> workouts, List<Member> members) {
        this.name = name;
        this.workouts = workouts;
        this.members = members;
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

    public List<Member> getMembers() {
        return members;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setWorkouts(List<Workout> workouts) {
        this.workouts = workouts;
    }

    public void setMembers(List<Member> members) {
        this.members = members;
    }
}
