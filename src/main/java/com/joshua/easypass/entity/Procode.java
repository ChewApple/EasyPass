package com.joshua.easypass.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Procode {
    @Id
    private String province;
    private String code;

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
