package com.teamproject.backend.rest;

import com.teamproject.backend.model.Member;
import com.teamproject.backend.model.Plan;
import com.teamproject.backend.model.Workout;
import com.teamproject.backend.model.dto.WorkoutDto;
import com.teamproject.backend.service.PlanService;
import com.teamproject.backend.service.UserService;
import com.teamproject.backend.service.WorkoutService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/workouts")
public class WorkoutController {
    private final WorkoutService workoutService;
    private final UserService userService;
    private final PlanService planService;

    public WorkoutController(WorkoutService workoutService, UserService userService, PlanService planService) {
        this.workoutService = workoutService;
        this.userService = userService;
        this.planService = planService;
    }

    @PostMapping("/")
    public ResponseEntity<Workout> create(@RequestParam String name,
                                       @RequestParam Long userId,
                                       @RequestParam Long planId) {
        List<Long> users = new ArrayList<>();
        List<Long> plans = new ArrayList<>();
        users.add(userId);
        plans.add(planId);
        WorkoutDto workoutDto = new WorkoutDto(name, users, plans, new ArrayList<>());

        try {
            Workout workout = this.workoutService.create(workoutDto).get();

            for (Long id: workoutDto.getUsers()) {
                this.userService.addWorkout(id, workout);
            }

            for (Long id: workoutDto.getPlans()) {
                this.planService.addWorkout(id, workout);
            }

            return ResponseEntity.ok().body(workout);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public Workout read(@PathVariable Long id) {
        return workoutService.read(id);
    }

    @DeleteMapping("/{id}")
    public Workout delete(@PathVariable Long id) {
        return workoutService.delete(id);
    }

    @PostMapping("/add-to-user")
    public void addToUser(@RequestParam Long id, @RequestParam Long userId) {
        Workout workout = this.workoutService.read(id);
        List<Member> members = workout.getMembers();
        members.add(userService.read(userId));
        workout.setMembers(members);
        userService.addWorkout(userId, workout);
        this.workoutService.save(workout);
    }

    @PostMapping("/add-to-plan")
    public void addToPlan(@RequestParam Long id, @RequestParam Long planId) {
        Workout workout = this.workoutService.read(id);
        List<Plan> plans = workout.getPlans();
        plans.add(planService.read(planId));
        workout.setPlans(plans);
        planService.addWorkout(planId, workout);
        this.workoutService.save(workout);
    }
}
