package com.teamproject.backend.service.implementation;

import com.teamproject.backend.model.*;
import com.teamproject.backend.model.dto.UserDto;
import com.teamproject.backend.model.exceptions.InvalidArgumentsException;
import com.teamproject.backend.model.exceptions.InvalidUser;
import com.teamproject.backend.model.exceptions.InvalidUserCredentialsException;
import com.teamproject.backend.repository.*;
import com.teamproject.backend.service.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public UserServiceImplementation(PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }


    @Override
    public Optional<Member> create(UserDto userDto) {

        return Optional.of(this.userRepository.save(new Member(userDto.getName(), userDto.getEmail(),
                this.passwordEncoder.encode(userDto.getPassword()), userDto.getAge(), userDto.getHeight(),
                userDto.getWeight())));
    }

    @Override
    public List<Member> readAll() {
        return this.userRepository.findAll();
    }

    @Override
    public Member read(Long id) {
        return this.userRepository.findById(id).orElseThrow(InvalidUser::new);
    }

    @Override
    public Optional<Member> update(Long id, UserDto userDto) {
        Member member = this.read(id);

        if (member == null) {
            return Optional.empty();
        }

        if (userDto.getName() != null)  member.setName(userDto.getName());
        if (userDto.getEmail() != null) member.setEmail(userDto.getEmail());
        if (userDto.getPassword() != null) member.setPassword(this.passwordEncoder.encode(userDto.getPassword()));
        if (userDto.getAge() != null) member.setAge(userDto.getAge());
        if (userDto.getHeight() != null) member.setHeight(userDto.getHeight());
        if (userDto.getWeight() != null) member.setWeight(userDto.getWeight());
        return Optional.of(this.userRepository.save((member)));
    }

    @Override
    public Member delete(Long id) {
        Member member = this.read(id);

        if (member == null) {
            return null;
        }

        this.userRepository.delete(member);
        return member;
    }

    @Override
    public Member login(String email, String password) {
        if (email==null || email.isEmpty() || password==null || password.isEmpty()) {
            throw new InvalidArgumentsException();
        }

        Optional<Member> user = this.userRepository.findByEmail(email);

        if (user.isEmpty()) {
            throw new InvalidUserCredentialsException();
        }

        if(passwordEncoder.matches(password, user.get().getPassword())) {
            return user.get();
        }

        throw new InvalidUserCredentialsException();
    }
}
