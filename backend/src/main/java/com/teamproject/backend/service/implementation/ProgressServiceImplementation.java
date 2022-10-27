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
        Progress progress = this.progressRepository.save(new Progress(progressDto.getDate(), progressDto.getValue(),
                ProgressType.valueOf(progressDto.getType()), this.userRepository.findById(progressDto.getUser()).get()));

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

        if (progressDto.getValue() != null) progress.setVal(progressDto.getValue());
        if (progressDto.getDate() != null) progress.setD(progressDto.getDate());
        if (progressDto.getType() != null) progress.setT(ProgressType.valueOf(progressDto.getType()));
        return Optional.of(this.progressRepository.save(progress));
    }

    @Override
    public Progress delete(Long id) {
        Progress progress = this.read(id);

        if (progress == null) {
            return null;
        }

        List<Exercise> exercises = this.exerciseRepository.findAllByProgressesContaining(progress);

        for (Exercise exercise: exercises) {
            exercise.getProgresses().remove(progress);
            this.exerciseRepository.save(exercise);
        }

        this.progressRepository.delete(progress);
        return progress;
    }

    @Override
    public ProgressType[] types() {
        return ProgressType.values();
    }

    @Override
    public List<Progress> getAllByMemberId(Long id) {
        return this.progressRepository.getAllByMember_Id(id);
    }
}
