package com.uep.wap.dto;

import com.uep.wap.model.Match;

import javax.persistence.Column;
import java.util.List;

public class BracketDTO {

    private int bracket_id;

    private String tournament_name;

    private String tournament_location;

    private String start_date;

    public List<MatchDTO> getMatches() {
        return matches;
    }

    public void setMatches(List<MatchDTO> matches) {
        this.matches = matches;
    }

    private List<MatchDTO> matches;

    //methods

    public int getBracket_id() {
        return bracket_id;
    }

    public void setBracket_id(int bracket_id) {
        this.bracket_id = bracket_id;
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
