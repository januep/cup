package com.uep.wap.controller;

import com.uep.wap.dto.PlayerDTO;
import com.uep.wap.model.Player;
import com.uep.wap.repository.PlayerRepository;
import com.uep.wap.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/player")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @Autowired
    private PlayerRepository playerRepository;

    @PostMapping ("/add")
    public Player addPlayer(@RequestBody PlayerDTO playerDTO) {
        return playerService.createPlayer(playerDTO).getBody();
    }

    @GetMapping("/{player_id}")
    public Player getPlayer(@PathVariable Integer player_id) {
        return playerService.getPlayer(player_id);
    }

    @GetMapping("/players")
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }
}
