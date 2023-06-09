package com.uep.wap.model;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="matches")
public class Match implements Serializable {
    @Id
    @GenericGenerator(name="match_id_generator" , strategy="increment")
    @GeneratedValue(generator="match_id_generator")
    @Column(name ="match_id")
    private int match_id;

    @Column(name ="title")
    private String title;

    @Column(name ="homeScore")
    private Integer homeScore;

    @Column(name ="awayScore")
    private Integer awayScore;

    @Column(name ="date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "player1_id")
    private Player player1;

    @ManyToOne
    @JoinColumn(name = "player2_id")
    private Player player2;

    @ManyToOne
    @JoinColumn(name = "supervisor_id")
    private Supervisor supervisor;

    @ManyToOne
    @JoinColumn(name = "bracket_id")
    private Bracket bracket;

    public String getTitle() {
        return title;
    }

    public Player getPlayer1() {
        return player1;
    }

    public Player getPlayer2() {
        return player2;
    }

    public void setPlayer2(Player player2) {
        this.player2 = player2;
    }

    public void setPlayer1(Player player1) {
        this.player1 = player1;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getHomeScore() {
        return homeScore;
    }

    public void setHomeScore(Integer homeScore) {
        this.homeScore = homeScore;
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


    public Bracket getBracket() {
        return bracket;
    }

    public void setBracket(Bracket bracket) {
        this.bracket = bracket;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Supervisor getSupervisor() {
        return supervisor;
    }

    public void setSupervisor(Supervisor supervisor) {
        this.supervisor = supervisor;
    }


    public Match() {
    }

    public int getMatch_id() {
        return match_id;
    }

    public void setMatch_id(int match_id) {
        this.match_id = match_id;
    }

}
