package com.teamproject.backend.service.implementation;

import com.teamproject.backend.model.Plan;
import com.teamproject.backend.model.Workout;
import com.teamproject.backend.model.dto.PlanDto;
import com.teamproject.backend.model.exceptions.InvalidPlan;
import com.teamproject.backend.repository.PlanRepository;
import com.teamproject.backend.repository.UserRepository;
import com.teamproject.backend.service.PlanService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PlanServiceImplementation implements PlanService {
    private final PlanRepository planRepository;
    private final UserRepository userRepository;

    public PlanServiceImplementation(PlanRepository planRepository, UserRepository userRepository) {
        this.planRepository = planRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Optional<Plan> create(PlanDto planDto) {
        Plan plan = this.planRepository.save(new Plan(planDto.getName(),
                new ArrayList<>(),
                this.userRepository.findById(planDto.getUser_id()).get()));
        return Optional.of(plan);
    }

    @Override
    public List<Plan> readAll() {
        return this.planRepository.findAll();
    }

    @Override
    public Plan read(Long id) {
        return this.planRepository.findById(id).orElseThrow(InvalidPlan::new);
    }

    @Override
    public Optional<Plan> update(Long id, PlanDto planDto) {
        Plan plan = this.read(id);

        if (plan == null) {
            return Optional.empty();
        }

        if (planDto.getName() != null) plan.setName(planDto.getName());
        return Optional.of(this.planRepository.save(plan));
    }

    @Override
    public Plan delete(Long id) {
        Plan plan = this.read(id);

        if (plan == null) {
            return null;
        }

        this.planRepository.delete(plan);
        return plan;
    }

    @Override
    public List<Plan> getAllByMemberId(Long memberId) {
        return planRepository.getAllByMember_Id(memberId);
    }

    @Override
    public Plan save(Plan plan) {
        return planRepository.save(plan);
    }

    @Override
    public void addWorkout(Long id, Workout workout) {
        Plan plan = this.read(id);

        if (plan == null) {
            return;
        }

        plan.getWorkouts().add(workout);
        planRepository.save(plan);
    }
}
