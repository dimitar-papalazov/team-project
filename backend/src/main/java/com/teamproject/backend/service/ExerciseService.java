package com.teamproject.backend.service;

import com.teamproject.backend.model.Exercise;
import com.teamproject.backend.model.Progress;
import com.teamproject.backend.model.dto.ExerciseDto;

import java.util.List;
import java.util.Optional;

public interface ExerciseService {
    Optional<Exercise> create(ExerciseDto exerciseDto);
    List<Exercise> readAll();
    Exercise read(Long id);
    Optional<Exercise> update(Long id, ExerciseDto exerciseDto);
    Exercise delete(Long id);
    Exercise save(Exercise exercise);
    void addProgress(Long id, Progress progress);
}
