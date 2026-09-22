package com.babs.pixel_palette_api.controller;

import com.babs.pixel_palette_api.models.Artwork;
import com.babs.pixel_palette_api.repositories.ArtworkRepository;
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

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/artworks")
public class ArtworkController {

    @Autowired
    private ArtworkRepository artworkRepository;

    @PostMapping
    public Artwork createArtwork(@RequestBody Artwork newArtwork) {
        return artworkRepository.save(newArtwork);
    }

    @GetMapping("/user/{userId}")
    public List<Artwork> getArtworksByUser(@PathVariable int userId) {
        return artworkRepository.findByUserId(userId);
    }

    @PutMapping("/{id}")
    public Artwork updateArtwork(@PathVariable int id, @RequestBody Artwork updatedArtwork) {
        if (!artworkRepository.existsById(id)) { // Check if the artwork exists before updating
            return null;
        }
        updatedArtwork.setId(id); // manually stamps the correct id onto the object before saving
        return artworkRepository.save(updatedArtwork);
    }

    @DeleteMapping("/{id}")
    public void deleteArtwork(@PathVariable int id) { // this method returns nothing, because there's nothing meaningful to send back after deleting something
        if (artworkRepository.existsById(id)) {
            artworkRepository.deleteById(id);
        }
    }
}