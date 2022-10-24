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
    @ManyToOne
    private Member member;

    public Progress() {
    }

    public Progress(Date d, Integer val, ProgressType t, Member member) {
        this.d = d;
        this.val = val;
        this.t = t;
        this.member = member;
    }

    public Date getD() {
        return d;
    }

    public void setD(Date d) {
        this.d = d;
    }

    public Integer getVal() {
        return val;
    }

    public void setVal(Integer val) {
        this.val = val;
    }

    public ProgressType getT() {
        return t;
    }

    public void setT(ProgressType t) {
        this.t = t;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }
}
