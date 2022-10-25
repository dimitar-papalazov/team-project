package com.teamproject.backend.service;

import com.teamproject.backend.model.Member;
import com.teamproject.backend.model.Plan;
import com.teamproject.backend.model.Workout;
import com.teamproject.backend.model.dto.PlanDto;

import java.util.List;
import java.util.Optional;

public interface PlanService {
    Optional<Plan> create(PlanDto planDto);
    List<Plan> readAll();
    Plan read(Long id);
    Optional<Plan> update(Long id, PlanDto planDto);
    Plan delete(Long id);
    List<Plan> getAllByMemberId(Long memberId);
    void addWorkout(Long id, Workout workout);
    void removeWorkout(Long id, Workout workout);
    Plan save(Plan plan);
}
