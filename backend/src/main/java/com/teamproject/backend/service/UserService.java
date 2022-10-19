package com.teamproject.backend.service;

import com.teamproject.backend.model.*;
import com.teamproject.backend.model.dto.UserDto;

import java.util.List;
import java.util.Optional;

public interface UserService {
    Optional<Member> create(UserDto userDto);
    List<Member> readAll();
    Member read(Long id);
    Optional<Member> update(Long id, UserDto userDto);
    Member delete(Long id);
    Member login(String email, String password);
    void addWorkout(Long id, Workout workout);
    void addExercise(Long id, Exercise exercise);
    void addProgress(Long id, Progress progress);
}
