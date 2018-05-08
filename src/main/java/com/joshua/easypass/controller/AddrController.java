package com.joshua.easypass.controller;

import com.joshua.easypass.entity.Area;
import com.joshua.easypass.entity.City;
import com.joshua.easypass.entity.Province;
import com.joshua.easypass.service.AddrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class AddrController {

    @Autowired
    private AddrService addrService;

    @GetMapping(value = "/province")
    public Province[] getPros() {
        return addrService.getPros();
    }

    @PostMapping(value="/procode")
    public String getProCode(@RequestParam("province") String province){
        return addrService.getProCode(province);
    }

    @PostMapping(value="/shotcode")
    public String getShotCode(@RequestParam("city") String city){
        return addrService.getShotCode(city);
    }

    @PostMapping(value = "/city")
    public City[] getCities(@RequestParam("pname") String pname) {
        return addrService.getCities(pname);
    }

    @PostMapping(value = "/area")
    public Area[] getAreas(@RequestParam("cname") String cname) {
        return addrService.getAreas(cname);
    }
}
