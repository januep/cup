package com.uep.wap.controller;

import com.uep.wap.dto.SupervisorDTO;
import com.uep.wap.model.Supervisor;
import com.uep.wap.repository.SupervisorRepository;
import com.uep.wap.service.SupervisorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/supervisor")
public class SupervisorController {

    @Autowired
    private SupervisorService supervisorService;

    public SupervisorController(SupervisorService supervisorService) {
        this.supervisorService = supervisorService;
    }

    @Autowired
    private SupervisorRepository supervisorRepository;

    @PostMapping("/")
    public ResponseEntity<Supervisor> createSupervisor(@RequestBody SupervisorDTO supervisorDTO) {
        Supervisor supervisor = new Supervisor();
        supervisor.setSupervisor_name(supervisorDTO.getSupervisor_name());

        Supervisor savedSupervisor = supervisorRepository.save(supervisor);

        return new ResponseEntity<>(savedSupervisor, HttpStatus.CREATED);
    }

    @GetMapping("/{supervisor_id}")
    public Supervisor getSupervisor(@PathVariable Integer supervisor_id) {
        return supervisorService.getSupervisor(supervisor_id);
    }

    @GetMapping("/supervisors")
    public List<Supervisor> getAllSupervisors() {
        return supervisorService.getAllSupervisors();
    }

    @PostMapping ("/add")
    public Supervisor addSupervisor(@RequestBody SupervisorDTO supervisorDTO) {
        return supervisorService.createSupervisor(supervisorDTO).getBody();
    }
}
