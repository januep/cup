package com.uep.wap.dto;

import javax.persistence.Column;

public class BracketDTO {

    private int bracket_id;

    private String tournament_name;

    private String tournament_location;

    private String start_date;

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
