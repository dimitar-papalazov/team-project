package com.teamproject.backend.service.implementation;

import com.teamproject.backend.model.Exercise;
import com.teamproject.backend.model.Member;
import com.teamproject.backend.model.Plan;
import com.teamproject.backend.model.Workout;
import com.teamproject.backend.model.dto.WorkoutDto;
import com.teamproject.backend.model.exceptions.InvalidWorkout;
import com.teamproject.backend.repository.ExerciseRepository;
import com.teamproject.backend.repository.PlanRepository;
import com.teamproject.backend.repository.UserRepository;
import com.teamproject.backend.repository.WorkoutRepository;
import com.teamproject.backend.service.WorkoutService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WorkoutServiceImplementation implements WorkoutService {
    private final WorkoutRepository workoutRepository;
    private final UserRepository userRepository;
    private final PlanRepository planRepository;
    private final ExerciseRepository exerciseRepository;

    public WorkoutServiceImplementation(WorkoutRepository workoutRepository, UserRepository userRepository, PlanRepository planRepository, ExerciseRepository exerciseRepository) {
        this.workoutRepository = workoutRepository;
        this.userRepository = userRepository;
        this.planRepository = planRepository;
        this.exerciseRepository = exerciseRepository;
    }

    @Override
    public Optional<Workout> create(WorkoutDto workoutDto) {
        List<Plan> plans = new ArrayList<Plan>();
        List<Exercise> exercises = new ArrayList<Exercise>();

        for (Long id: workoutDto.getPlans()) {
            plans.add(this.planRepository.findById(id).get());
        }

        for (Long id: workoutDto.getExercises()) {
            exercises.add(this.exerciseRepository.findById(id).get());
        }

        Workout workout = this.workoutRepository.save(new Workout(workoutDto.getName(), this.userRepository.findById(workoutDto.getUser()).get(), exercises));
        return Optional.of(workout);
    }

    @Override
    public List<Workout> readAll() {
        return this.workoutRepository.findAll();
    }

    @Override
    public List<Workout> getAllByMemberId(Long id) {
        return this.workoutRepository.getAllByMember_Id(id);
    }

    @Override
    public Workout read(Long id) {
        return this.workoutRepository.findById(id).orElseThrow(InvalidWorkout::new);
    }

    @Override
    public Optional<Workout> update(Long id, WorkoutDto workoutDto) {
        Workout workout = this.read(id);

        if (workout == null) {
            return null;
        }

        if (workoutDto.getName() != null) workout.setName(workoutDto.getName());
        return Optional.of(this.workoutRepository.save(workout));
    }

    @Override
    public Workout delete(Long id) {
        Workout workout = this.read(id);

        if (workout == null) {
            return null;
        }

        List<Plan> plans = this.planRepository.findAllByWorkoutsContaining(workout);

        for (Plan plan : plans) {
            plan.getWorkouts().remove(workout);
            this.planRepository.save(plan);
        }

        this.workoutRepository.delete(workout);
        return workout;
    }

    @Override
    public Workout save(Workout workout) {
        return this.workoutRepository.save(workout);
    }

    @Override
    public void addExercise(Long id, Exercise exercise) {
        Workout workout = this.read(id);

        if (workout == null) {
            return;
        }

        workout.getExercises().add(exercise);
        workoutRepository.save(workout);
    }
}
