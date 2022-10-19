package com.teamproject.backend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Integer sets;
    private Integer goal;
    private String url;
    @ManyToMany
    private List<Member> members;
    @ManyToMany
    private List<Workout> workouts;
    @ManyToMany
    private List<Progress> progresses;

    public Exercise() {
    }

    public Exercise(String name, Integer sets, Integer goal, String url, List<Member> members, List<Workout> workouts,
                    List<Progress> progresses) {
        this.name = name;
        this.sets = sets;
        this.goal = goal;
        this.url = url;
        this.members = members;
        this.workouts = workouts;
        this.progresses = progresses;
    }

    public Long getId() {
        return id;
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

    public List<Member> getMembers() {
        return members;
    }

    public List<Workout> getWorkouts() {
        return workouts;
    }

    public List<Progress> getProgresses() {
        return progresses;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSets(Integer sets) {
        this.sets = sets;
    }

    public void setGoal(Integer goal) {
        this.goal = goal;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setMembers(List<Member> members) {
        this.members = members;
    }

    public void setWorkouts(List<Workout> workouts) {
        this.workouts = workouts;
    }

    public void setProgresses(List<Progress> progresses) {
        this.progresses = progresses;
    }
}
