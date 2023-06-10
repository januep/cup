package com.uep.wap.service;

import com.uep.wap.dto.MatchDTO;
import com.uep.wap.dto.SupervisorDTO;
import com.uep.wap.dto.UserDTO;
import com.uep.wap.model.Match;
import com.uep.wap.model.Player;
import com.uep.wap.model.Supervisor;
import com.uep.wap.model.User;
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
public class SupervisorService {

    public SupervisorService(SupervisorRepository supervisorRepository) {
        this.supervisorRepository = supervisorRepository;
    }
    @Autowired
    private SupervisorRepository supervisorRepository;

    public Supervisor addSupervisor(SupervisorDTO supervisorDTO) {
        Supervisor supervisor = new Supervisor();
        supervisor.setSupervisor_name(supervisorDTO.getSupervisor_name());;
        supervisorRepository.save(supervisor);
        System.out.println("Supervisor added!");
        return supervisor;
    }

    public Supervisor getSupervisor(Integer supervisor_id) {
        return supervisorRepository.findById(supervisor_id).orElseThrow(() -> new RuntimeException("Supervisor not found"));
    }

    public List<Supervisor> getAllSupervisors() {
        return supervisorRepository.findAll();
    }

    public ResponseEntity<Supervisor> createSupervisor(@RequestBody SupervisorDTO supervisorDTO) {
        Supervisor supervisor = new Supervisor();
        supervisor.setSupervisor_name(supervisorDTO.getSupervisor_name());

        Supervisor savedSupervisor = supervisorRepository.save(supervisor);
        return new ResponseEntity<>(savedSupervisor, HttpStatus.CREATED);
    }
}