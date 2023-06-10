package com.uep.wap.service;

import com.uep.wap.dto.BracketDTO;
import com.uep.wap.dto.MatchDTO;
import com.uep.wap.dto.PlayerDTO;
import com.uep.wap.dto.UserDTO;
import com.uep.wap.model.*;
import com.uep.wap.repository.BracketRepository;
import com.uep.wap.repository.MatchRepository;
import com.uep.wap.repository.PlayerRepository;
import com.uep.wap.repository.SupervisorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class BracketService {

    @Autowired
    private BracketRepository bracketRepository;
    @Autowired

    private MatchRepository matchRepository;
    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private SupervisorRepository supervisorRepository;

    public BracketService(BracketRepository bracketRepository) {
        this.bracketRepository = bracketRepository;
    }

    public Bracket addBracket(BracketDTO bracketDTO) {
        Bracket bracket = new Bracket();
        bracket.setTournament_name(bracketDTO.getTournament_name());
        bracket.setTournament_location(bracketDTO.getTournament_location());
        bracket.setStart_date(bracketDTO.getStart_date());

        bracketRepository.save(bracket);
        System.out.println("Braclet added!");
        return bracket;
    }

    public Bracket getBracket(Integer bracket_id) {
        return bracketRepository.findById(bracket_id).orElseThrow(() -> new RuntimeException("Bracket not found"));
    }

    public List<Bracket> getAllBrackets() {
        return bracketRepository.findAll();
    }

    public ResponseEntity<Bracket> createBracket(@RequestBody BracketDTO bracketDTO) {
        Bracket bracket = new Bracket();
        bracket.setTournament_name(bracketDTO.getTournament_name());
        bracket.setTournament_location(bracketDTO.getTournament_location());
        bracket.setStart_date(bracketDTO.getStart_date());

        // Initializing the matches list
        bracket.setMatches(new ArrayList<>());

        for (MatchDTO matchDTO : bracketDTO.getMatches()) {

            Match match = new Match();
            match.setTitle(matchDTO.getTitle());
            match.setHomeScore(matchDTO.getHomeScore());
            match.setAwayScore(matchDTO.getAwayScore());
            match.setDate(matchDTO.getDate());

            Player player1 = playerRepository.findById(matchDTO.getPlayer1_id())
                    .orElseThrow(() -> new RuntimeException("Player not found"));
            Player player2 = playerRepository.findById(matchDTO.getPlayer2_id())
                    .orElseThrow(() -> new RuntimeException("Player not found"));
            Supervisor supervisor = supervisorRepository.findById(matchDTO.getSupervisor_id())
                    .orElseThrow(() -> new RuntimeException("Supervisor not found"));

            match.setPlayer1(player1);
            match.setPlayer2(player2);
            match.setSupervisor(supervisor);
            match.setBracket(bracket);
            bracket.getMatches().add(match);
        }
        Bracket savedBracket = bracketRepository.save(bracket);

        return new ResponseEntity<>(savedBracket, HttpStatus.CREATED);
    }
}