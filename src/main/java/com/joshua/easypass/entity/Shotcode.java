package com.joshua.easypass.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Shotcode {
    private String province;
    @Id
    private String city;
    private String shotcode;

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getShotcode() {
        return shotcode;
    }

    public void setShotcode(String shotcode) {
        this.shotcode = shotcode;
    }
}
