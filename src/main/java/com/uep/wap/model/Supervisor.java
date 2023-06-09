package com.uep.wap.model;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="supervisors")
public class Supervisor implements Serializable {

    @Id
    @GenericGenerator(name="supervisor_id_generator" , strategy="increment")
    @GeneratedValue(generator="supervisor_id_generator")
    @Column(name = "supervisor_id")
    private int supervisor_id;

    @Column(name = "supervisor_name")
    private String supervisor_name;

    @OneToMany(mappedBy = "supervisor", cascade = CascadeType.ALL)
    private List<Match> matches;

    public int getSupervisor_id() {
        return supervisor_id;
    }

    public void setSupervisor_id(int supervisor_id) {
        this.supervisor_id = supervisor_id;
    }


    public String getSupervisor_name() {
        return supervisor_name;
    }

    public void setSupervisor_name(String supervisor_name) {
        this.supervisor_name = supervisor_name;
    }

    public Supervisor() {
    }

}
