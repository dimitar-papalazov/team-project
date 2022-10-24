package com.teamproject.backend.repository;

import com.teamproject.backend.model.Exercise;
import com.teamproject.backend.model.Plan;
import com.teamproject.backend.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Long> {
    List<Workout> getAllByMember_Id(Long id);
    List<Workout> findAllByExercisesContaining(Exercise exercise);
}
