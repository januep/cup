package com.uep.wap.service;
import com.uep.wap.dto.MatchDTO;
import com.uep.wap.model.Bracket;
import com.uep.wap.model.Match;
import com.uep.wap.model.Player;
import com.uep.wap.model.Supervisor;
import com.uep.wap.repository.BracketRepository;
import com.uep.wap.repository.MatchRepository;
import com.uep.wap.repository.PlayerRepository;
import com.uep.wap.repository.SupervisorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class MatchService {

    private final PlayerRepository playerRepository;
    private final SupervisorRepository supervisorRepository;
    private final BracketRepository bracketRepository;
    private final MatchRepository matchRepository;

    @Autowired
    public MatchService(PlayerRepository playerRepository,
                        SupervisorRepository supervisorRepository,
                        BracketRepository bracketRepository,
                        MatchRepository matchRepository) {
        this.playerRepository = playerRepository;
        this.supervisorRepository = supervisorRepository;
        this.bracketRepository = bracketRepository;
        this.matchRepository = matchRepository;
    }

    public Match getMatch(int match_id) {
        return matchRepository.findById(match_id).orElseThrow(() -> new RuntimeException("Match not found"));
    }

    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    public ResponseEntity<Match> createMatch(@RequestBody MatchDTO matchDTO) {
        Match match = new Match();

        Player player1 = playerRepository.findById(matchDTO.getPlayer1_id())
                .orElseThrow(() -> new RuntimeException("Player not found"));
        match.setPlayer1(player1);

        Player player2 = playerRepository.findById(matchDTO.getPlayer2_id())
                .orElseThrow(() -> new RuntimeException("Player not found"));
        match.setPlayer2(player2);

        Supervisor supervisor = supervisorRepository.findById(matchDTO.getSupervisor_id())
                .orElseThrow(() -> new RuntimeException("Supervisor not found"));
        match.setSupervisor(supervisor);

        Bracket bracket = bracketRepository.findById(matchDTO.getBracket_id())
                .orElseThrow(() -> new RuntimeException("Bracket not found"));
        match.setTitle(matchDTO.getTitle());
        match.setBracket(bracket);
        match.setHomeScore(matchDTO.getHomeScore());
        match.setDate(matchDTO.getDate());
        match.setPlayer1(player1);
        match.setPlayer2(player2);
        match.setHomeScore(matchDTO.getHomeScore());
        match.setAwayScore(matchDTO.getAwayScore());
        match.setSupervisor(supervisor);

        Match savedMatch = matchRepository.save(match);
        return new ResponseEntity<>(savedMatch, HttpStatus.CREATED);
    }
}