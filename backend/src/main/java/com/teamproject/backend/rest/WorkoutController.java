package com.teamproject.backend.rest;

import com.teamproject.backend.model.Workout;
import com.teamproject.backend.model.dto.WorkoutDto;
import com.teamproject.backend.service.PlanService;
import com.teamproject.backend.service.WorkoutService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/workouts")
public class WorkoutController {
    private final WorkoutService workoutService;
    private final PlanService planService;

    public WorkoutController(WorkoutService workoutService, PlanService planService) {
        this.workoutService = workoutService;
        this.planService = planService;
    }

    @PostMapping("/")
    public ResponseEntity<Workout> create(@RequestBody WorkoutDto workoutDto) {
        try {
            Workout workout = this.workoutService.create(workoutDto).get();

            for (Long id: workoutDto.getPlans()) {
                this.planService.addWorkout(id, workout);
            }

            return ResponseEntity.ok().body(workout);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value="/add-to-plan", consumes = {"*/*"})
    public ResponseEntity.BodyBuilder addToPlan(@RequestParam Long workout_id, @RequestParam Long plan_id) {
        Workout workout = this.workoutService.read(workout_id);

        this.planService.addWorkout(plan_id, workout);
        return ResponseEntity.ok();
    }

    @GetMapping("/{id}")
    public Workout read(@PathVariable Long id) {
        return workoutService.read(id);
    }

    @GetMapping("/user/{id}")
    public List<Workout> readByMemberId(@PathVariable Long id) {
        return workoutService.getAllByMemberId(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        workoutService.delete(id);
    }
}
