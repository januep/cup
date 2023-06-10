package com.uep.wap.controller;

import com.uep.wap.dto.MatchDTO;
import com.uep.wap.model.Match;
import com.uep.wap.repository.MatchRepository;
import com.uep.wap.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/match")
public class MatchController {

    @Autowired
    private MatchService matchService;

    public MatchController(MatchService matchService) {
        this.matchService = matchService;
    }

    @Autowired
    private MatchRepository matchRepository;

    @PostMapping ("/add")
    public Match addMatch(@RequestBody MatchDTO matchDTO) {
        return matchService.createMatch(matchDTO).getBody();
    }

    @GetMapping("/{match_id}")
    public Match getMatch(@PathVariable Integer match_id) {
        return matchService.getMatch(match_id);
    }

    @GetMapping("/matches")
    public List<Match> getAllMatches() {
        return matchService.getAllMatches();
    }
}