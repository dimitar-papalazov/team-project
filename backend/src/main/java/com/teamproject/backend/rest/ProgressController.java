package com.teamproject.backend.rest;

import com.teamproject.backend.model.Exercise;
import com.teamproject.backend.model.Progress;
import com.teamproject.backend.model.dto.ProgressDto;
import com.teamproject.backend.model.enumerations.ProgressType;
import com.teamproject.backend.service.ExerciseService;
import com.teamproject.backend.service.ProgressService;
import com.teamproject.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/progresses")
public class ProgressController {
    private final ProgressService progressService;
    private final ExerciseService exerciseService;

    public ProgressController(ProgressService progressService, UserService userService, ExerciseService exerciseService) {
        this.progressService = progressService;
        this.exerciseService = exerciseService;
    }

    @PostMapping("/")
    public ResponseEntity<Progress> create(@RequestBody ProgressDto progressDto) {
        try {
            Progress progress = this.progressService.create(progressDto).get();

            exerciseService.addProgress(progressDto.getExercise(), progress);

            return ResponseEntity.ok().body(progress);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Progress> update(@RequestBody ProgressDto progressDto, @PathVariable Long id) {
        try {
            return ResponseEntity.ok().body(this.progressService.update(id, progressDto).get());
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public Progress read(@PathVariable Long id) {
        return progressService.read(id);
    }

    @GetMapping("/types")
    public ProgressType[] types() {
        return progressService.types();
    }

    @DeleteMapping("/{id}")
    public Progress delete(@PathVariable Long id) {
        return progressService.delete(id);
    }
}
