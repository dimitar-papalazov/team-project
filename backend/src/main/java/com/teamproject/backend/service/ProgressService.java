package com.teamproject.backend.service;

import com.teamproject.backend.model.Progress;
import com.teamproject.backend.model.dto.ProgressDto;
import com.teamproject.backend.model.enumerations.ProgressType;

import java.util.List;
import java.util.Optional;

public interface ProgressService {
    Optional<Progress> create(ProgressDto progressDto);
    List<Progress> readAll();
    Progress read(Long id);
    Optional<Progress> update(Long id, ProgressDto progressDto);
    Progress delete(Long id);
    ProgressType[] types();
    List<Progress> getAllByMemberId(Long id);
}
