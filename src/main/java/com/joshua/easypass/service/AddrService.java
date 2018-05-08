package com.joshua.easypass.service;

import com.joshua.easypass.entity.Area;
import com.joshua.easypass.entity.City;
import com.joshua.easypass.entity.Province;
import com.joshua.easypass.repository.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddrService {
    public final static Logger logger = LoggerFactory.getLogger(AddrService.class);
    @Autowired
    private ProvinceRepository proRepo;
    @Autowired
    private CityRepository cityRepo;
    @Autowired
    private AreaRepository areaRepo;
    @Autowired
    private ProshotRepository procRepo;
    @Autowired
    private ShotcodeRepository shotcRepo;

    public String getProCode(String province) {
        return procRepo.getCode(province);
    }

    public String getShotCode(String city) {
        return shotcRepo.getCode(city);
    }

    public Province[] getPros() {
        return proRepo.getPros();
    }

    public City[] getCities(String pname) {
        return cityRepo.getCities(pname);
    }

    public Area[] getAreas(String cname) {
        return areaRepo.getAreas(cname);
    }
}
