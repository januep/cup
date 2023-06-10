package com.uep.wap.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@Table(name="brackets")
public class Bracket implements Serializable {
    @Id
    @GenericGenerator(name="bracket_id_generator" , strategy="increment")
    @GeneratedValue(generator="bracket_id_generator")
    @Column(name ="bracket_id")
    private int bracket_id;

    public int getBracket_id() {
        return bracket_id;
    }

    public void setBracket_id(int bracket_id) {
        this.bracket_id = bracket_id;
    }

    @Column(name ="tournament_name")
    private String tournament_name;

    @Column(name ="tournament_location")
    private String tournament_location;

    @Column(name ="start_date")
    private String start_date;

    @OneToMany(mappedBy = "bracket", cascade = CascadeType.ALL)
    private List<Match> matches;

    public Bracket(){
    }

    public String getTournament_name() {
        return tournament_name;
    }

    public void setTournament_name(String tournament_name) {
        this.tournament_name = tournament_name;
    }

    public String getTournament_location() {
        return tournament_location;
    }

    public void setTournament_location(String tournament_location) {
        this.tournament_location = tournament_location;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

}