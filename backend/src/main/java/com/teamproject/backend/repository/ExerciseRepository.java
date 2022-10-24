package com.teamproject.backend.repository;

import com.teamproject.backend.model.Exercise;
import com.teamproject.backend.model.Progress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    List<Exercise> getAllByMember_Id(Long id);
    List<Exercise> findAllByProgressesContaining(Progress progress);
}
