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
    @ManyToOne
    private Member member;
    @ManyToMany
    private List<Exercise> exercises;

    public Workout() {
    }

    public Workout(String name, Member member, List<Exercise> exercises) {
        this.name = name;
        this.member = member;
        this.exercises = exercises;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }
}
