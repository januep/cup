package com.uep.wap.controller;

import com.uep.wap.dto.BracketDTO;
import com.uep.wap.dto.MatchDTO;
import com.uep.wap.dto.PlayerDTO;
import com.uep.wap.dto.SupervisorDTO;
import com.uep.wap.model.Bracket;
import com.uep.wap.model.Player;
import com.uep.wap.model.Supervisor;
import com.uep.wap.repository.BracketRepository;
import com.uep.wap.repository.PlayerRepository;
import com.uep.wap.service.BracketService;
import com.uep.wap.service.MatchService;
import com.uep.wap.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Column;
import java.util.List;

@RestController
@RequestMapping("/api/bracket")
public class BracketController {
//tets
    @Autowired
    private BracketService bracketService;

    public BracketController(BracketService bracketService) {
        this.bracketService = bracketService;
    }
    @Autowired
    private BracketRepository bracketRepository;

    @PostMapping ("/add")
    public Bracket addBracket(@RequestBody BracketDTO bracketDTO) {
        return bracketService.createBracket(bracketDTO).getBody();
    }

    @GetMapping("/{bracket_id}")
    public Bracket getBracket(@PathVariable Integer bracket_id) {
        return bracketService.getBracket(bracket_id);
    }

    @GetMapping("/brackets")
    public List<Bracket> getAllBrackets() {
        return bracketService.getAllBrackets();
    }
}