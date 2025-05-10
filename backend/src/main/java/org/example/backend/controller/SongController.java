package com.musicstream.backend.controller;

import com.musicstream.backend.model.Song;
import com.musicstream.backend.repository.SongRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/songs")
public class SongController {

    private final SongRepository repository;

    public SongController(SongRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Song> getAllSongs() {
        return repository.findAll();
    }

    @PostMapping
    public Song addSong(@RequestBody Song song) {
        return repository.save(song);
    }
}
