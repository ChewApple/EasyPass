package com.joshua.easypass.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Carinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer infoid;
    private String brand;
    private String subbrand;

    public Integer getInfoid() {
        return infoid;
    }

    public void setInfoid(Integer infoid) {
        this.infoid = infoid;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getSubbrand() {
        return subbrand;
    }

    public void setSubbrand(String subbrand) {
        this.subbrand = subbrand;
    }
}
