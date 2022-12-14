package com.teamproject.backend.rest;

import com.teamproject.backend.model.Exercise;
import com.teamproject.backend.model.dto.ExerciseDto;
import com.teamproject.backend.service.ExerciseService;
import com.teamproject.backend.service.UserService;
import com.teamproject.backend.service.WorkoutService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/exercises")
public class ExerciseController {
    private final ExerciseService exerciseService;
    private final WorkoutService workoutService;

    public ExerciseController(ExerciseService exerciseService, WorkoutService workoutService) {
        this.exerciseService = exerciseService;
        this.workoutService = workoutService;
    }

    @PostMapping("/")
    public ResponseEntity<Exercise> create(@RequestBody ExerciseDto exerciseDto) {
        try {
            Exercise exercise = this.exerciseService.create(exerciseDto).get();

            return ResponseEntity.ok().body(exercise);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Exercise> update(@RequestBody ExerciseDto exerciseDto, @PathVariable Long id) {
        try {
            return ResponseEntity.ok().body(this.exerciseService.update(id, exerciseDto).get());
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value="/add-to-workout", consumes = {"*/*"})
    public ResponseEntity<Exercise> addToWorkout(@RequestParam Long exercise_id, @RequestParam Long workout_id) {
        try {
            Exercise exercise = this.exerciseService.read(exercise_id);

            workoutService.addExercise(workout_id, exercise);

            return ResponseEntity.ok().body(exercise);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value="/remove-from-workout", consumes = {"*/*"})
    public ResponseEntity<Exercise> removeFromWorkout(@RequestParam String exercise_id, @RequestParam String workout_id) {
        try {
            Exercise exercise = this.exerciseService.read(Long.parseLong(exercise_id));

            workoutService.removeExercise(Long.parseLong(workout_id), exercise);

            return ResponseEntity.ok().body(exercise);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public Exercise read(@PathVariable Long id) {
        return exerciseService.read(id);
    }

    @GetMapping("/user/{id}")
    public List<Exercise> getAllByMemberId(@PathVariable Long id) {
        return exerciseService.getAllByMemberId(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
         exerciseService.delete(id);
    }
}
