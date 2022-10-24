package com.teamproject.backend.service.implementation;

import com.teamproject.backend.model.Exercise;
import com.teamproject.backend.model.Progress;
import com.teamproject.backend.model.Workout;
import com.teamproject.backend.model.dto.ExerciseDto;
import com.teamproject.backend.model.exceptions.InvalidExercise;
import com.teamproject.backend.repository.ExerciseRepository;
import com.teamproject.backend.repository.UserRepository;
import com.teamproject.backend.repository.WorkoutRepository;
import com.teamproject.backend.service.ExerciseService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ExerciseServiceImplementation implements ExerciseService {
    private final ExerciseRepository exerciseRepository;
    private final UserRepository userRepository;
    private final WorkoutRepository workoutRepository;

    public ExerciseServiceImplementation(ExerciseRepository exerciseRepository, UserRepository userRepository, WorkoutRepository workoutRepository) {
        this.exerciseRepository = exerciseRepository;
        this.userRepository = userRepository;
        this.workoutRepository = workoutRepository;
    }


    @Override
    public Optional<Exercise> create(ExerciseDto exerciseDto) {
        Exercise exercise = new Exercise(exerciseDto.getName(), exerciseDto.getSets(),
                exerciseDto.getGoal(), exerciseDto.getUrl(), this.userRepository.findById(exerciseDto.getUser()).get(), new ArrayList<>());
        return Optional.of(this.exerciseRepository.save(exercise));
    }

    @Override
    public List<Exercise> readAll() {
        return this.exerciseRepository.findAll();
    }

    @Override
    public Exercise read(Long id) {
        return this.exerciseRepository.findById(id).orElseThrow(InvalidExercise::new);
    }

    @Override
    public Optional<Exercise> update(Long id, ExerciseDto exerciseDto) {
        Exercise exercise = this.read(id);

        if (exercise == null) {
            return Optional.empty();
        }

        exercise.setName(exerciseDto.getName());
        exercise.setSets(exerciseDto.getSets());
        exercise.setUrl(exerciseDto.getUrl());
        return Optional.of(this.exerciseRepository.save(exercise));
    }

    @Override
    public Exercise delete(Long id) {
        Exercise exercise = this.read(id);

        if (exercise == null) {
            return null;
        }

        List<Workout> workouts = this.workoutRepository.findAllByExercisesContaining(exercise);

        for(Workout workout: workouts) {
            workout.getExercises().remove(exercise);
            this.workoutRepository.save(workout);
        }

        this.exerciseRepository.delete(exercise);
        return exercise;
    }

    @Override
    public Exercise save(Exercise exercise) {
        return this.exerciseRepository.save(exercise);
    }

    @Override
    public void addProgress(Long id, Progress progress) {
        Exercise exercise = this.read(id);

        if (exercise == null) {
            return;
        }

        List<Progress> progresses = exercise.getProgresses();
        progresses.add(progress);
        exercise.setProgresses(progresses);
        exerciseRepository.save(exercise);
    }

    @Override
    public List<Exercise> getAllByMemberId(Long id) {
        return this.exerciseRepository.getAllByMember_Id(id);
    }
}
