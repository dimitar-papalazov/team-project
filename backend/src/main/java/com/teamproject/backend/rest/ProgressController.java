package com.teamproject.backend.rest;

import com.teamproject.backend.model.Exercise;
import com.teamproject.backend.model.Member;
import com.teamproject.backend.model.Progress;
import com.teamproject.backend.model.dto.ProgressDto;
import com.teamproject.backend.service.ExerciseService;
import com.teamproject.backend.service.ProgressService;
import com.teamproject.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/progresses")
public class ProgressController {
    private final ProgressService progressService;
    private final UserService userService;
    private final ExerciseService exerciseService;

    public ProgressController(ProgressService progressService, UserService userService, ExerciseService exerciseService) {
        this.progressService = progressService;
        this.userService = userService;
        this.exerciseService = exerciseService;
    }

    @PostMapping("/")
    public ResponseEntity<Progress> create(@RequestParam Integer value,
                                           @RequestParam Date date,
                                           @RequestParam String type,
                                           @RequestParam Long userId,
                                           @RequestParam Long exerciseId) {
        List<Long> users = new ArrayList<>();
        List<Long> exercises = new ArrayList<>();
        users.add(userId);
        exercises.add(exerciseId);
        ProgressDto progressDto = new ProgressDto(value, date, type, users, exercises);

        try {
            Progress progress = this.progressService.create(progressDto).get();

            for (Long id: progressDto.getUsers()) {
                userService.addProgress(id, progress);
            }

            for (Long id: progressDto.getExercises()) {
                exerciseService.addProgress(id, progress);
            }

            return ResponseEntity.ok().body(progress);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public Progress read(@PathVariable Long id) {
        return progressService.read(id);
    }

    @DeleteMapping("/{id}")
    public Progress delete(@PathVariable Long id) {
        return progressService.delete(id);
    }

    @PostMapping("/add-to-user")
    public void addToUser(@RequestParam Long id, @RequestParam Long userId) {
        Progress progress = this.progressService.read(id);
        List<Member> members = progress.getMembers();
        members.add(userService.read(userId));
        progress.setMembers(members);
        userService.addProgress(userId, progress);
        this.progressService.save(progress);
    }

    @PostMapping("/add-to-exercise")
    public void addToExercise(@RequestParam Long id, @RequestParam Long exerciseId) {
        Progress progress = this.progressService.read(id);
        List<Exercise> exercises = progress.getExercises();
        exercises.add(exerciseService.read(exerciseId));
        progress.setExercises(exercises);
        exerciseService.addProgress(exerciseId, progress);
        this.progressService.save(progress);
    }
}
