package com.babs.pixel_palette_api.controller;

import com.babs.pixel_palette_api.models.User;
import com.babs.pixel_palette_api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// CONTROLLER NOTES:
// @RestController       = this class handles web requests and sends back data
// @RequestMapping("/x") = the base URL for everything in this class
// @Autowired            = Spring hands me a working repository automatically, no "new" needed
// @GetMapping    = Read    (matches CRUD)
// @PostMapping   = Create
// @PutMapping    = Update
// @DeleteMapping = Delete
// @RequestBody   = turns incoming JSON into a real Java object automatically
// @PathVariable  = grabs a value straight out of the URL itself

@RestController  // handles web requests and sends back data
@RequestMapping("/api/users") // sets the base web address for everything in this class
public class UserController {

    @Autowired  // this is how the controller gets access to the repository
    private UserRepository userRepository;

    @PostMapping("/register")
    public User register(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @PostMapping("/login")
    public User login(@RequestBody User loginAttempt) {
        User found = userRepository.findByUsername(loginAttempt.getUsername());
        if (found != null && found.getPassword().equals(loginAttempt.getPassword())) {
            return found;
        }
        return null;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}