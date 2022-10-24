package com.teamproject.backend.repository;

import com.teamproject.backend.model.Plan;
import com.teamproject.backend.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Long> {
    List<Plan> getAllByMember_Id(Long memberId);
    List<Plan> findAllByWorkoutsContaining(Workout workout);
}
