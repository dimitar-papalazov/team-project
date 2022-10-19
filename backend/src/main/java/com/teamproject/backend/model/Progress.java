package com.teamproject.backend.model;

import com.teamproject.backend.model.enumerations.ProgressType;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
public class Progress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date d;
    private Integer val;
    @Enumerated
    private ProgressType t;
    @ManyToMany
    private List<Member> members;
    @ManyToMany
    private List<Exercise> exercises;

    public Progress() {
    }

    public Progress(Date d, Integer val, ProgressType t, List<Member> members, List<Exercise> exercises) {
        this.val = val;
        this.d = d;
        this.t = t;
        this.members = members;
        this.exercises = exercises;
    }
}
