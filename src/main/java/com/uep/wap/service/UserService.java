package com.uep.wap.service;

import com.uep.wap.dto.BracketDTO;
import com.uep.wap.dto.UserDTO;
import com.uep.wap.model.Bracket;
import com.uep.wap.model.Player;
import com.uep.wap.model.User;
import com.uep.wap.repository.BracketRepository;
import com.uep.wap.repository.PlayerRepository;
import com.uep.wap.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User addUser(UserDTO userDTO) {
        User user = new User();
        user.setRole(userDTO.getRole());
        user.setEmail(userDTO.getEmail());
        user.setFirst_name(userDTO.getFirst_name());
        user.setLast_name(userDTO.getLast_name());
        user.setPassword(userDTO.getPassword());
        userRepository.save(user);
        System.out.println("Bracket added!");
        return user;
    }

    public User getUser(Integer user_id) {
        return userRepository.findById(user_id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public ResponseEntity<User> createUser(@RequestBody UserDTO userDTO) {
        User user = new User();
        user.setFirst_name(userDTO.getFirst_name());
        user.setLast_name(userDTO.getLast_name());
        user.setEmail(userDTO.getEmail());
        user.setRole(userDTO.getRole());

        // Remember to hash the password before setting it
        user.setPassword(userDTO.getPassword());
        User savedUser = userRepository.save(user);

        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

}