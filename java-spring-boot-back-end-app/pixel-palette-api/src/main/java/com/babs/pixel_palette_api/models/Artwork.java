package com.babs.pixel_palette_api.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;

// ENTITY NOTES:
// @Entity           = this class represents a real database table
// @Id               = marks the column that uniquely identifies each row
// @GeneratedValue    = the database auto-assigns this number, I never set it myself
// @ManyToOne + @JoinColumn = builds a foreign key relationship (many of these belong to one of those)
// @Lob               = this column can hold way more text than normal (for big data)

@Entity
public class Artwork {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    @Lob // Normal text columns have a size limit that's too small for drawing data "Large Object"
    private String imageData;

    private LocalDateTime createdDate;

    @ManyToOne //  each Artwork points to exactly one User, but a User can have many Artworks.
    @JoinColumn(name = "user_id") // This annotation specifies the foreign key column in the Artwork table that references the primary key of the User table.
    private User user;

    public Artwork() {
    }

    public Artwork(String title, String imageData, User user) {
        this.title = title;
        this.imageData = imageData;
        this.user = user;
        this.createdDate = LocalDateTime.now(); //  Auto-fills the timestamp when a piece is created
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImageData() {
        return imageData;
    }

    public void setImageData(String imageData) {
        this.imageData = imageData;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}