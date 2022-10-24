package com.teamproject.backend.repository;

import com.teamproject.backend.model.Progress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long> {
    List<Progress> getAllByMember_Id(Long id);
}
