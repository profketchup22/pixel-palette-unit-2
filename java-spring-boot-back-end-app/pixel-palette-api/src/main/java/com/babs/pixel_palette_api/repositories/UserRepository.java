package com.babs.pixel_palette_api.repositories;

import com.babs.pixel_palette_api.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
}