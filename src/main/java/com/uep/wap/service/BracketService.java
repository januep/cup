package com.uep.wap.service;

import com.uep.wap.dto.BracketDTO;
import com.uep.wap.dto.PlayerDTO;
import com.uep.wap.dto.UserDTO;
import com.uep.wap.model.Bracket;
import com.uep.wap.model.Player;
import com.uep.wap.model.User;
import com.uep.wap.repository.BracketRepository;
import com.uep.wap.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class BracketService {

    @Autowired
    private BracketRepository bracketRepository;

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

        Bracket savedBracket = bracketRepository.save(bracket);

        return new ResponseEntity<>(savedBracket, HttpStatus.CREATED);
    }
}