package com.uep.wap.service;

import com.uep.wap.dto.PlayerDTO;
import com.uep.wap.dto.SupervisorDTO;
import com.uep.wap.model.Player;
import com.uep.wap.model.Supervisor;
import com.uep.wap.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public Player getPlayer(int player_id) {
        return playerRepository.findById(player_id).orElseThrow(() -> new RuntimeException("Player not found"));
    }

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public ResponseEntity<Player> createPlayer(@RequestBody PlayerDTO playerDTO) {
        Player player = new Player();
        player.setFirst_name(playerDTO.getFirst_name());
        player.setLast_name(playerDTO.getLast_name());
        player.setNationality(playerDTO.getNationality());
        player.setDateOfBirth(playerDTO.getDateOfBirth());
        player.setPoints(playerDTO.getPoints());
        player.setRanking(playerDTO.getRanking());
        player.setHeight(playerDTO.getHeight());
        player.setWeight(playerDTO.getWeight());

        Player savedPlayer = playerRepository.save(player);
        return new ResponseEntity<>(savedPlayer, HttpStatus.CREATED);
    }

}
