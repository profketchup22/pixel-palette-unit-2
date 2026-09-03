package com.babs.pixel_palette_api.repositories;

import java.util.List;
import com.babs.pixel_palette_api.models.Artwork;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ArtworkRepository extends JpaRepository<Artwork, Integer> {
    List<Artwork> findByUserId(int userId);
}