package com.teamproject.backend.rest;

import com.teamproject.backend.model.Exercise;
import com.teamproject.backend.model.Member;
import com.teamproject.backend.model.Workout;
import com.teamproject.backend.model.dto.ExerciseDto;
import com.teamproject.backend.service.ExerciseService;
import com.teamproject.backend.service.UserService;
import com.teamproject.backend.service.WorkoutService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/exercises")
public class ExerciseController {
    private final ExerciseService exerciseService;
    private final UserService userService;
    private final WorkoutService workoutService;

    public ExerciseController(ExerciseService exerciseService, UserService userService, WorkoutService workoutService) {
        this.exerciseService = exerciseService;
        this.userService = userService;
        this.workoutService = workoutService;
    }

    @PostMapping("/")
    public ResponseEntity<Exercise> create(@RequestParam String name,
                                           @RequestParam Integer sets,
                                           @RequestParam Integer goal,
                                           @RequestParam String url,
                                           @RequestParam Long userId,
                                           @RequestParam Long workoutId) {
        List<Long> users = new ArrayList<>();
        List<Long> workouts = new ArrayList<>();
        users.add(userId);
        workouts.add(workoutId);
        ExerciseDto exerciseDto = new ExerciseDto(name, sets, goal, url, users, workouts, new ArrayList<>());

        try {
            Exercise exercise = this.exerciseService.create(exerciseDto).get();

            for (Long id: exerciseDto.getUsers()) {
                userService.addExercise(id, exercise);
            }

            for (Long id: exerciseDto.getWorkouts()) {
                workoutService.addExercise(id, exercise);
            }

            return ResponseEntity.ok().body(exercise);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public Exercise read(@PathVariable Long id) {
        return exerciseService.read(id);
    }

    @DeleteMapping("/{id}")
    public Exercise delete(@PathVariable Long id) {
        return exerciseService.delete(id);
    }

    @PostMapping("/add-to-user")
    public void addToUser(@RequestParam Long id, @RequestParam Long userId) {
        Exercise exercise = this.exerciseService.read(id);
        List<Member> members = exercise.getMembers();
        members.add(userService.read(userId));
        exercise.setMembers(members);
        userService.addExercise(userId, exercise);
        this.exerciseService.save(exercise);
    }

    @PostMapping("/add-to-workout")
    public void addToWorkout(@RequestParam Long id, @RequestParam Long workoutId) {
        Exercise exercise = this.exerciseService.read(id);
        List<Workout> workouts = exercise.getWorkouts();
        workouts.add(workoutService.read(workoutId));
        exercise.setWorkouts(workouts);
        workoutService.addExercise(workoutId, exercise);
        this.exerciseService.save(exercise);
    }
}
