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

    public PlanController(PlanService planService) {
        this.planService = planService;
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

    @PutMapping("/{id}")
    public ResponseEntity<Plan> update(@RequestBody PlanDto planDto, @PathVariable Long id) {
        try {
            return  ResponseEntity.ok().body(this.planService.update(id, planDto).get());
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
    public void delete(@PathVariable Long id) {
        planService.delete(id);
    }

}
