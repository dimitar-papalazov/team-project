package com.teamproject.backend.rest;

import com.teamproject.backend.model.Member;
import com.teamproject.backend.model.Plan;
import com.teamproject.backend.model.dto.LoginDto;
import com.teamproject.backend.model.dto.UserDto;
import com.teamproject.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public Member read(@PathVariable Long id) {
        return userService.read(id);
    }
    @PostMapping("/")
    public ResponseEntity<Member> register(@RequestBody UserDto userDto) {
        try {
            Member member = this.userService.create(userDto).get();
            return ResponseEntity.ok().body(member);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping(value = "/", consumes = {"*/*"})
    public ResponseEntity<Member> update(@RequestBody UserDto userDto) {
        try {
            Member member = this.userService.update(userDto.getId(),userDto).get();
            return ResponseEntity.ok().body(member);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/login")
    public Member login(@RequestBody LoginDto loginDto) {
        return this.userService.login(loginDto.getEmail(), loginDto.getPassword());
    }
}
