package com.teamproject.backend.service.implementation;

import com.teamproject.backend.model.Exercise;
import com.teamproject.backend.model.Progress;
import com.teamproject.backend.model.Member;
import com.teamproject.backend.model.dto.ProgressDto;
import com.teamproject.backend.model.enumerations.ProgressType;
import com.teamproject.backend.model.exceptions.InvalidProgress;
import com.teamproject.backend.repository.ExerciseRepository;
import com.teamproject.backend.repository.ProgressRepository;
import com.teamproject.backend.repository.UserRepository;
import com.teamproject.backend.service.ProgressService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProgressServiceImplementation implements ProgressService {
    private final ProgressRepository progressRepository;
    private final UserRepository userRepository;
    private final ExerciseRepository exerciseRepository;

    public ProgressServiceImplementation(ProgressRepository progressRepository, UserRepository userRepository, ExerciseRepository exerciseRepository) {
        this.progressRepository = progressRepository;
        this.userRepository = userRepository;
        this.exerciseRepository = exerciseRepository;
    }

    @Override
    public Optional<Progress> create(ProgressDto progressDto) {
        List<Member> members = new ArrayList<>();
        List<Exercise> exercises = new ArrayList<>();

        for (Long id: progressDto.getUsers()) {
            members.add(this.userRepository.findById(id).get());
        }

        for (Long id: progressDto.getExercises()) {
            exercises.add(this.exerciseRepository.findById(id).get());
        }

        Progress progress = this.progressRepository.save(new Progress(progressDto.getDate(), progressDto.getValue(),
                ProgressType.valueOf(progressDto.getType()), members, exercises));

        return Optional.of(progress);
    }

    @Override
    public List<Progress> readAll() {
        return this.progressRepository.findAll();
    }

    @Override
    public Progress read(Long id) {
        return this.progressRepository.findById(id).orElseThrow(InvalidProgress::new);
    }

    @Override
    public Optional<Progress> update(Long id, ProgressDto progressDto) {
        Progress progress = this.read(id);

        if (progress == null) {
            return null;
        }

        progress.setVal(progressDto.getValue());
        progress.setD(progressDto.getDate());
        progress.setT(ProgressType.valueOf(progressDto.getType()));
        return Optional.of(this.progressRepository.save(progress));
    }

    @Override
    public Progress delete(Long id) {
        Progress progress = this.read(id);

        if (progress == null) {
            return null;
        }

        this.progressRepository.delete(progress);
        return progress;
    }

    @Override
    public ProgressType[] types() {
        return ProgressType.values();
    }

    @Override
    public Progress save(Progress progress) {
        return this.progressRepository.save(progress);
    }
}
