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
    public ResponseEntity<Plan> create(@RequestParam String name,
                                         @RequestParam Long userId) {
        List<Long> users = new ArrayList<>();
        users.add(userId);
        PlanDto planDto = new PlanDto(name, new ArrayList<>(), users);

        try {
            Plan plan = this.planService.create(planDto).get();

            for (Long id: planDto.getUsers()) {
                this.userService.addPlan(id, plan);
            }

            return ResponseEntity.ok().body(plan);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public Plan read(@PathVariable Long id) {
        return planService.read(id);
    }

    @DeleteMapping("/{id}")
    public Plan delete(@PathVariable Long id) {
        return planService.delete(id);
    }

    @PostMapping("/add-to-user")
    public void addToUser(@RequestParam Long id, @RequestParam Long userId) {
        Plan plan = this.planService.read(id);
        List<Member> members = plan.getMembers();
        members.add(this.userService.read(userId));
        plan.setMembers(members);
        this.userService.addPlan(userId, plan);
        this.planService.save(plan);
    }
}
