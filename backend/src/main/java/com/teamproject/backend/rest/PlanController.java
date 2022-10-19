package com.teamproject.backend.rest;

import com.teamproject.backend.model.Plan;
import com.teamproject.backend.model.Member;
import com.teamproject.backend.model.dto.PlanDto;
import com.teamproject.backend.service.PlanService;
import com.teamproject.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/plans")
public class PlanController {
    private final PlanService planService;
    private final UserService userService;

    public PlanController(PlanService planService, UserService userService) {
        this.planService = planService;
        this.userService = userService;
    }

    @PostMapping("/")
    public ResponseEntity<Plan> create(@RequestBody PlanDto planDto) {
        try {
            Plan plan = this.planService.create(planDto).get();

            return ResponseEntity.ok().body(plan);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public Plan read(@PathVariable Long id) {
        return planService.read(id);
    }

    @GetMapping("/user/{id}")
    public List<Plan> readByMemberId(@PathVariable Long id) {
        return planService.getAllByMemberId(id);
    }

    @DeleteMapping("/{id}")
    public Plan delete(@PathVariable Long id) {
        return planService.delete(id);
    }
}
