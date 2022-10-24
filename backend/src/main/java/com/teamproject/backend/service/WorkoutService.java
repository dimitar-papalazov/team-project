package com.teamproject.backend.service;

import com.teamproject.backend.model.Exercise;
import com.teamproject.backend.model.Plan;
import com.teamproject.backend.model.Workout;
import com.teamproject.backend.model.dto.WorkoutDto;

import java.util.List;
import java.util.Optional;

public interface WorkoutService {
    Optional<Workout> create(WorkoutDto workoutDto);
    List<Workout> readAll();
    List<Workout> getAllByMemberId(Long id);
    Workout read(Long id);
    Optional<Workout> update(Long id, WorkoutDto workoutDto);
    Workout delete(Long id);
    Workout save(Workout workout);
    void addExercise(Long id, Exercise exercise);
}
