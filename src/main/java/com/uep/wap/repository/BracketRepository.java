package com.uep.wap.repository;

import com.uep.wap.model.Bracket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BracketRepository extends JpaRepository<Bracket, Integer> {
}
