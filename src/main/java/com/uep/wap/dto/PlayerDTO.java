package com.uep.wap.dto;

import com.uep.wap.model.Player;

import javax.persistence.Column;
import java.lang.annotation.Annotation;
import java.text.DecimalFormat;
import java.util.Date;

public class PlayerDTO {

    private int player_id;

    public String getFirst_name() {
        return first_name;
    }

    public String getNationality() {
        return nationality;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getLast_name() {
        return last_name;
    }

    public Integer getRanking() {
        return ranking;
    }

    public void setRanking(Integer ranking) {
        this.ranking = ranking;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public int getPlayer_id() {
        return player_id;
    }

    public void setPlayer_id(int player_id) {
        this.player_id = player_id;
    }

    private String first_name;

    private String last_name;

    private Integer ranking;

    private String nationality;

    private Date dateOfBirth;

    private Integer height;

    private Integer weight;

    private Integer points;

}