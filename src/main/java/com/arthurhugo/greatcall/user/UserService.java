package com.arthurhugo.greatcall.user;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.IntStream;
import java.util.List;

@Service
public class UserService {

    private static final List<User> USERS_LIST = new ArrayList<>();
    private final PasswordEncoder passwordEncoder;

    public UserService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public void register(User user) {
        if (findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("User with this email already exists");
        }

        String rawPassword = user.getPassword();
        String encodedPassword = passwordEncoder.encode(rawPassword);
        user.setPassword(encodedPassword);
        user.setStatus("online");
        USERS_LIST.add(user);
    }

    public User login(User user) {
        var userIndex = IntStream.range(0, USERS_LIST.size())
                .filter(i -> USERS_LIST.get(i).getEmail().equals(user.getEmail()))
                .findAny()
                .orElseThrow(() -> new RuntimeException("User not found"));

        var cUser = USERS_LIST.get(userIndex);

        if (!passwordEncoder.matches(user.getPassword(), cUser.getPassword())) {
            throw new RuntimeException("Password incorrect");
        }

        cUser.setStatus("online");
        return cUser;
    }

    public void logout(String email) {
        var userIndex = IntStream.range(0, USERS_LIST.size())
                .filter(i -> USERS_LIST.get(i).getEmail().equals(email))
                .findAny()
                .orElseThrow(() -> new RuntimeException("User not found"));
        USERS_LIST.get(userIndex).setStatus("offline");
    }

    public List<User> findAll() {
        return USERS_LIST;
    }

    public Optional<User> findByEmail(String email) {
        return USERS_LIST.stream()
                .filter(user -> user.getEmail().equals(email))
                .findFirst();
    }
}