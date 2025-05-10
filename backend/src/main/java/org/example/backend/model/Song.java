package com.musicstream.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "songs")
public class Song {

    @Id
    private String id;
    private String title;
    private String artist;
    private String url;

    // Getters and setters
}
