package com.uep.wap.dto;

import com.uep.wap.model.Player;

import java.util.Date;

public class MatchDTO {

    public Integer getMatch_id() {
        return match_id;
    }

    public void setMatch_id(Integer match_id) {
        this.match_id = match_id;
    }

    private Integer match_id;

    public String getTitle() {
        return title;
    }

    public Integer getHomeScore() {
        return homeScore;
    }

    public Integer getAwayScore() {
        return awayScore;
    }

    public void setAwayScore(Integer awayScore) {
        this.awayScore = awayScore;
    }

    public Date getDate() {
        return date;
    }

    public Integer getBracket_id() {
        return bracket_id;
    }

    public void setBracket_id(Integer bracket_id) {
        this.bracket_id = bracket_id;
    }

    public Integer getSupervisor_id() {
        return supervisor_id;
    }

    public void setSupervisor_id(Integer supervisor_id) {
        this.supervisor_id = supervisor_id;
    }

    public Integer getPlayer2_id() {
        return player2_id;
    }

    public void setPlayer2_id(Integer player2_id) {
        this.player2_id = player2_id;
    }

    public Integer getPlayer1_id() {
        return player1_id;
    }

    public void setPlayer1_id(Integer player1_id) {
        this.player1_id = player1_id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setHomeScore(Integer homeScore) {
        this.homeScore = homeScore;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    private String title;

    private Integer homeScore;

    private Integer awayScore;

    private Date date;

    private Integer player1_id;

    private Integer player2_id;

    private Integer supervisor_id;

    private Integer bracket_id;
}