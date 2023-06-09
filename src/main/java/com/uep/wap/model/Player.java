package com.uep.wap.model;

import org.hibernate.Session;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Blob;
import java.text.DecimalFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Table(name="players")
public class Player implements Serializable {

    @Id
    @GenericGenerator(name="player_id_generator" , strategy="increment")
    @GeneratedValue(generator="player_id_generator")
    @Column(name ="player_id")
    private int player_id;
    @Column(name ="first_name")
    private String first_name;

    @Column(name ="last_name")
    private String last_name;

    @Column(name ="ranking")
    private Integer ranking;

    @Column(name ="nationality")
    private String nationality;

    @Column(name ="dateOfBirth")
    private Date dateOfBirth;

    @Column(name ="height")
    private Integer height;

    @Column(name ="weight")
    private Integer weight;

    @Column(name ="points")
    private Integer points;

    @OneToMany(mappedBy = "player1", fetch = FetchType.LAZY)
    private List<Match> player1Matches;

    @OneToMany(mappedBy = "player2", fetch = FetchType.LAZY)
    private List<Match> player2Matches;

    public int getPlayer_id() {
        return player_id;
    }

    public void setPlayer_id(int player_id) {
        this.player_id = player_id;
    }

    public Integer getRanking() {
        return ranking;
    }

    public void setRanking(Integer ranking) {
        this.ranking = ranking;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Player(){
    }
    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getNationality() { return nationality; }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

}




